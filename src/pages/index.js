import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/header';
import HeaderBag from '../components/HeaderBag/header-bag';
import HeaderBag__Item from '../components/HeaderBag/__Item/header-bag__item';
import HeaderBag__Count from '../components/HeaderBag/__Count/header-bag__count';
import Bag__Item from '../components/Bag/__Item/bag__item';
import Pagination from '../components/Pagination/pagination';
import ProductList from '../components/ProductList/product-list';
import Container from '../components/Product/Container/container';
import ProductPage from '../components/ProductPage/product-page';
import Pagination__List from '../components/Pagination/__List/pagination__list';
import Footer from '../components/Footer/footer';
import Footer__Sidenote from '../components/Footer/__Sidenote/footer__sidenote';
import PageTitle from '../components/Page-title/page-title';
import HeaderBag__Price from '../components/HeaderBag/__Price/header-bag__price';
import BagIcon from '../components/Icons/bag-icon';
import WhishListIcon from '../components/Icons/whishlist-icon';
import HeaderBag__WishlistCount from '../components/HeaderBag/__WishlistCount/header-bag__wishlist-count';

const productsList = [
  {
    title: 'Product Title 1',
    img: 'images/activity_image.jpeg',
    subtitle: 'Product Description 1',
    strike: 210,
    discounted: 210,
  },
  {
    title: 'Product Title 2',
    img: 'images/activity_image.jpeg',
    subtitle: 'Product Description 2',
    price: 210,
    inCart: true,
  },
];
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
export default function Home() {
  return (
    <div>
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
      <div>
        <body>
          <Header>
            <PageTitle content={'BRAND'} />
            <HeaderBag>
              <HeaderBag__Item>
                <HeaderBag__Count>
                  <HeaderBag__Price value={210} />
                  <BagIcon />
                  <Bag__Item value={10} isCounter={true} />
                </HeaderBag__Count>
              </HeaderBag__Item>
              <HeaderBag__Item>
                <HeaderBag__WishlistCount>
                  <WhishListIcon />
                  <Bag__Item value={10} isCounter={true} />
                </HeaderBag__WishlistCount>
              </HeaderBag__Item>
            </HeaderBag>
          </Header>
          <ProductPage>
            <Container>
              <ProductList list={productsList} />
              <Pagination>
                <Pagination__List list={paginationList}></Pagination__List>
              </Pagination>
            </Container>
          </ProductPage>
          <Footer>
            <Footer__Sidenote content={'Footer'} />
          </Footer>
        </body>
      </div>
    </div>
  );
}
