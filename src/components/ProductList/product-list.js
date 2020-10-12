import React from 'react';
import { array } from 'prop-types';
import ProductList__Item from './__Item/product-list__item';

const ProductList = ({ list = [] } = {}) => {
  return (
    <ul className="product-list">
      {list.map((product) => {
        return <ProductList__Item product={product} key={product.uuid} />;
      })}
    </ul>
  );
};

ProductList.propTypes = {
  list: array,
};

export default ProductList;
