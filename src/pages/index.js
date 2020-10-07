import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" key='charset' />
        <meta http-equiv="x-ua-compatible" content="ie=edge" key='http-equiv-content' />
        <title>Shopping Cart Challenge</title>
        <meta name="description" content="Shopping Cart Javascript Developer Challenge" key='description' />

        {/*Schema.org for Google*/}
        <meta itemprop="name" content="Shopping Cart Challenge" key='google:name' />
        <meta itemprop="description" content="Shopping Cart Javascript Developer Challenge" key='google:description' />

        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name="og:title" content="Shopping Cart Challenge" key='og:title' />
        <meta name="og:description" content="Shopping Cart Javascript Developer Challenge" key='og:description' />
        <meta name="og:site_name" content="Shopping Cart Challenge" key='og:site_name' />
        <meta name="og:locale" content="en_Us" key='og:locale' />
        <meta name="og:type" content="website" key='og:type' />

        <meta name="viewport" content="width=device-width, initial-scale=1" key='viewoport' />
      </Head>
      <div>
        <body>
          <header class="header container">
            <h1 class="page-title">BRAND</h1>
            <aside class="header-bag">
              <div class="header-bag__item header-bag__count">
                <div class="header-bag__price">
                  £210
                </div>
                <svg class="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <title>Bag Icon</title>
                  <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill-rule="evenodd"></path>
                </svg>
                <span class="bag__item-counter">10</span>
              </div>
              <div class="header-bag__item header-bag__wishlist-count">
                <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <title>Wishlist Icon</title>
                  <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                </svg>
                <span class="bag__item-counter">5</span>
              </div>
            </aside>
          </header>
          <main class="product-page">
            <div class="container">
              <ul class="product-list">
                <li class="product-list__item">
                  <article class="product" itemscope itemtype="http://schema.org/Product">
                    <figure class="product__image-wrapper">
                      <img class="product__image" src="images/activity_image.jpeg" alt="Product" itemprop="image" />
                      <button class="product__wishlist-button button button--round button--wishlist">
                        <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>Wishlist Icon</title>
                          <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                        </svg>
                      </button>
                    </figure>
                    <div class="product__details">
                      <h1 class="product__title" itemprop="brand">Product Title</h1>
                      <p class="product__subtitle" itemprop="description">Product Description</p>
                      <div class="product__price" itemscope itemtype="http://schema.org/Offer">
                        <span class="product__price--strike">£210</span><span class="product__price--discounted" itemprop="price">£210</span>
                      </div>
                      <button class="product__add-to-cart button button--primary">Add to Cart</button>
                    </div>
                  </article>
                </li>

                <li class="product-list__item">
                  <article class="product" itemscope itemtype="http://schema.org/Product">
                    <figure class="product__image-wrapper">
                      <img class="product__image" src="images/activity_image.jpeg" alt="Product" itemprop="image" />
                      <button class="product__wishlist-button button button--round button--wishlist">
                        <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>Wishlist Icon</title>
                          <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                        </svg>
                      </button>
                    </figure>
                    <div class="product__details">
                      <h1 class="product__title" itemprop="brand">Product Title</h1>
                      <p class="product__subtitle" itemprop="description">Product Description</p>
                      <div class="product__price" itemscope itemtype="http://schema.org/Offer">
                        <span class="product__price" itemprop="price">£210</span>
                      </div>
                      <button class="product__add-to-cart button button--primary button--in-cart">In Cart</button>
                    </div>
                  </article>
                </li>
              </ul>

              <nav class="pagination">
                <ul class="pagination__list">
                  <li class="pagination__item">
                    <a href="#" class="pagination__link">
                      <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Arrow Left</title>
                        <polygon id="Left-Icon" stroke="none" fill-rule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                      </svg>
                    </a>
                  </li>
                  <li class="pagination__item">
                    <a href="#" class="pagination__link">
                      1
                            </a>
                  </li>
                  <li class="pagination__item">
                    <a href="#" class="pagination__link">
                      2
                            </a>
                  </li>
                  <li class="pagination__item">
                    <a href="#" class="pagination__link">
                      3
                            </a>
                  </li>
                  <li class="pagination__item">
                    <a href="#" class="pagination__link">
                      ...
                            </a>
                  </li>
                  <li class="pagination__item">
                    <a href="#" class="pagination__link">
                      10
                            </a>
                  </li>
                  <li class="pagination__item">
                    <a href="#" class="pagination__link">
                      <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Arrow Right</title>
                        <polygon id="Left-Iocn" stroke="none" fill-rule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav >
            </div >
          </main >
          <footer class="container">
            <p class="footer__sidenote">Footer</p>
          </footer>
        </body >
      </div >
    </div >
  )
}

