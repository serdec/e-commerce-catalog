import React from 'react';
import { array } from 'prop-types';
import ProductList__Item from './__Item/product-list__item';

const ProductList = ({ list = [] } = {}) => {
  return (
    <ul className="product-list">
      {list.map((el) => (
        <ProductList__Item
          key={el.uuid}
          title={el.title}
          cover_image_url={el.cover_image_url}
          description={el.description}
          retail_price={el.retail_price.formatted_value}
          net_price={el.net_price?.formatted_value}
          discount={el.discount}
          inCart={el.inCart}
        />
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  list: array,
};

export default ProductList;
