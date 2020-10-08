import React from 'react';
import { array } from 'prop-types';
import ProductList__Item from './__Item/product-list__item';

const ProductList = ({ list = [] } = {}) => (
  <ul className="product-list">
    {list.map((el) => (
      <ProductList__Item
        key={el.title}
        title={el.title}
        img={el.img}
        subtitle={el.subtitle}
        price={el.price}
        strike={el.strike}
        discounted={el.discounted}
        inCart={el.inCart}
      />
    ))}
  </ul>
);

ProductList.propTypes = {
  list: array,
};
export default ProductList;
