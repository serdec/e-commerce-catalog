import React from 'react';
import Head from 'next/head';

const withMeta = (Component) => (props) =>
  (function WithMeta() {
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
        <Component {...props} />
      </>
    );
  })();

export default withMeta;
