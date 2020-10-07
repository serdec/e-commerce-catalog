import React from 'react';
import Head from 'next/head';
import Product__ImageWrapper from '../components/Product/__ImageWrapper/product__image-wrapper';
import Product__Details from '../components/Product/__Details/product__details';

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
          <header className="header container">
            <h1 className="page-title">BRAND</h1>
            <aside className="header-bag">
              <div className="header-bag__item header-bag__count">
                <div className="header-bag__price">£210</div>
                <svg
                  className="icon"
                  width="17px"
                  height="18px"
                  viewBox="36 8 17 18"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>Bag Icon</title>
                  <path
                    d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z"
                    id="Bag-Icon"
                    stroke="none"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="bag__item-counter">10</span>
              </div>
              <div className="header-bag__item header-bag__wishlist-count">
                <svg
                  className="icon"
                  width="20px"
                  height="20px"
                  viewBox="0 6 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>Wishlist Icon</title>
                  <polygon
                    id="Wishlist-Icon"
                    stroke="none"
                    fillRule="evenodd"
                    points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
                  ></polygon>
                </svg>
                <span className="bag__item-counter">5</span>
              </div>
            </aside>
          </header>
          <main className="product-page">
            <div className="container">
              <ul className="product-list">
                <li className="product-list__item">
                  <article
                    className="product"
                    itemScope
                    itemType="http://schema.org/Product"
                  >
                    <Product__ImageWrapper img={'images/activity_image.jpeg'} />
                    <Product__Details
                      title={'Product Title R'}
                      description={'Product Description R'}
                      strike={210}
                      discounted={210}
                    />
                  </article>
                </li>

                <li className="product-list__item">
                  <article
                    className="product"
                    itemScope
                    itemType="http://schema.org/Product"
                  >
                    <figure className="product__image-wrapper">
                      <img
                        className="product__image"
                        src="images/activity_image.jpeg"
                        alt="Product"
                        itemProp="image"
                      />
                      <button className="product__wishlist-button button button--round button--wishlist">
                        <svg
                          className="icon"
                          width="20px"
                          height="20px"
                          viewBox="0 6 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Wishlist Icon</title>
                          <polygon
                            id="Wishlist-Icon"
                            stroke="none"
                            fillRule="evenodd"
                            points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
                          ></polygon>
                        </svg>
                      </button>
                    </figure>
                    <div className="product__details">
                      <h1 className="product__title" itemProp="brand">
                        Product Title
                      </h1>
                      <p className="product__subtitle" itemProp="description">
                        Product Description
                      </p>
                      <div
                        className="product__price"
                        itemScope
                        itemType="http://schema.org/Offer"
                      >
                        <span className="product__price" itemProp="price">
                          £210
                        </span>
                      </div>
                      <button className="product__add-to-cart button button--primary button--in-cart">
                        In Cart
                      </button>
                    </div>
                  </article>
                </li>
              </ul>

              <nav className="pagination">
                <ul className="pagination__list">
                  <li className="pagination__item">
                    <a href="#" className="pagination__link">
                      <svg
                        className="icon"
                        width="8px"
                        height="10px"
                        viewBox="18 18 8 10"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Arrow Left</title>
                        <polygon
                          id="Left-Icon"
                          stroke="none"
                          fillRule="evenodd"
                          transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
                          points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
                        ></polygon>
                      </svg>
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a href="#" className="pagination__link">
                      1
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a href="#" className="pagination__link">
                      2
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a href="#" className="pagination__link">
                      3
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a href="#" className="pagination__link">
                      ...
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a href="#" className="pagination__link">
                      10
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a href="#" className="pagination__link">
                      <svg
                        className="icon"
                        width="8px"
                        height="10px"
                        viewBox="18 18 8 10"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Arrow Right</title>
                        <polygon
                          id="Left-Iocn"
                          stroke="none"
                          fillRule="evenodd"
                          points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
                        ></polygon>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </main>
          <footer className="container">
            <p className="footer__sidenote">Footer</p>
          </footer>
        </body>
      </div>
    </div>
  );
}
