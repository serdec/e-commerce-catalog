import React from 'react';
import range from 'lodash.range';
import ProductList from '../../components/ProductList/product-list';
import { array, number } from 'prop-types';
import page from '../../components/HOCs/page';
import Pagination__List from '../../components/Pagination/__List/pagination__list';
import Pagination from '../../components/Pagination/pagination';

const productsPerPage = 6;

const ProductListing = ({
  productsList = [],
  pagesList = [],
  current = 1,
} = {}) => (
  <>
    <ProductList list={productsList} />
    <Pagination>
      <Pagination__List list={pagesList} current={current} />
    </Pagination>
  </>
);

ProductListing.propTypes = {
  productsList: array,
  pagesList: array,
  current: number,
};

const fetchCatalog = async ({ limit = 0, offset = 0 } = {}) => {
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
  return res;
};
const getNumberOfPagesOfRemoteCatalog = async () => {
  const res = await fetchCatalog();
  const productsList = await res.json();
  const numberOfPages = Math.ceil(productsList.length / productsPerPage);
  return numberOfPages;
};

export const getStaticPaths = async () => {
  const numberOfPages = await getNumberOfPagesOfRemoteCatalog();
  const arrayOfPages = range(1, numberOfPages + 1);
  const paths = arrayOfPages.map((n) => ({
    params: { page: `${n}` },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  // Get the number of pages in the catalog and build an object list
  const numberOfPages = await getNumberOfPagesOfRemoteCatalog();
  const arrayOfPages = range(1, numberOfPages + 1);
  const pagesList = arrayOfPages.map((n) => ({
    id: `${n}`,
  }));
  //fetch the current page
  const offset = (params.page - 1) * productsPerPage;
  const res = await fetchCatalog({ limit: productsPerPage, offset });
  const productsList = await res.json();
  return {
    props: {
      productsList,
      pagesList,
      current: parseInt(params.page),
    },
    revalidate: 10,
  };
};
// export default ProductListing;
const ProductListingPage = page(ProductListing);
export default ProductListingPage;
