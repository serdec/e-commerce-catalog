import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/header';
import Pagination from '../components/Pagination/pagination';
import ProductList from '../components/ProductList/product-list';
import ProductPage from '../components/ProductPage/product-page';
import Pagination__List from '../components/Pagination/__List/pagination__list';
import Footer from '../components/Footer/footer';
import { array } from 'prop-types';

const paginationList = [
  {
    id: 'LeftArrow',
    title: 'Arrow Left',
  },
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: 'RightArrow',
    title: 'Arrow Right',
  },
];
export default function Home({ productsList }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta
          httpEquiv="x-ua-compatible"
          content="ie=edge"
          key="http-equiv-content"
        />
        <title>Shopping Cart Challenge</title>
        <meta
          name="description"
          content="Shopping Cart Javascript Developer Challenge"
          key="description"
        />

        {/*Schema.org for Google*/}
        <meta
          itemProp="name"
          content="Shopping Cart Challenge"
          key="google:name"
        />
        <meta
          itemProp="description"
          content="Shopping Cart Javascript Developer Challenge"
          key="google:description"
        />

        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta
          name="og:title"
          content="Shopping Cart Challenge"
          key="og:title"
        />
        <meta
          name="og:description"
          content="Shopping Cart Javascript Developer Challenge"
          key="og:description"
        />
        <meta
          name="og:site_name"
          content="Shopping Cart Challenge"
          key="og:site_name"
        />
        <meta name="og:locale" content="en_Us" key="og:locale" />
        <meta name="og:type" content="website" key="og:type" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewoport"
        />
      </Head>
      <Header />
      <ProductPage>
        <ProductList list={productsList} />
        <Pagination>
          <Pagination__List list={paginationList} />
        </Pagination>
      </ProductPage>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const url = `https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0`;
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

Home.propTypes = {
  productsList: array,
};
