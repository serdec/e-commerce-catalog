import React from 'react';
import range from 'lodash.range';
import ProductList from '../../components/ProductList/product-list';
import { array } from 'prop-types';
// import page from '../../components/HOCs/page';

const ProductListing = ({ productsList = [] } = {}) => (
  <ProductList list={productsList} />
);

ProductListing.propTypes = {
  productsList: array,
};

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://api.musement.com/api/v3/venues/164/activities?limit=0&offset=0',
    {
      headers: {
        'accept-language': 'it',
        'Content-Type': 'application/json',
        'content-type': 'application/json',
        'x-musement-currency': 'EUR',
        'x-musement-version': '3.4.0',
      },
    }
  );
  const productsList = await res.json();
  const number_of_pages = Math.ceil(productsList.length / 6);
  const array_of_pages = range(1, number_of_pages + 1);
  const paths = array_of_pages.map((n) => ({
    params: { page: `${n}` },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const limit = 6;
  const offset = (params.page - 1) * 6;
  const url = `https://api.musement.com/api/v3/venues/164/activities?limit=${limit}&offset=${offset}`;
  const res = await fetch(url, {
    headers: {
      'accept-language': 'it',
      'Content-Type': 'application/json',
      'content-type': 'application/json',
      'x-musement-currency': 'EUR',
      'x-musement-version': '3.4.0',
    },
  });
  const productsList = await res.json();
  return {
    props: {
      productsList,
    },
  };
};
// const ProductListingPage = (props) => page(ProductListing)(props);
export default ProduwctListing;
