import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product__ImageWrapper from './__ImageWrapper/product__image-wrapper';
import Product__Details from './__Details/product__details';
import { isProductInBag } from '../Bag/reducer';
import { addToBag } from '../Bag/reducer';

const noop = () => {};

const mapStateToProps = (state) => ({
  isProductInBag: isProductInBag(state.bag),
});
const mapDispatchToProps = {
  addToBag,
};

export const Product = ({
  uuid = '',
  title = '',
  cover_image_url = '',
  description = '',
  retail_price = {},
  net_price = {},
  discount = 0,
  isProductInBag = noop,
  addToBag = noop,
} = {}) => (
  <article className="product" itemScope itemType="http://schema.org/Product">
    <Product__ImageWrapper cover_image_url={cover_image_url} />
    <Product__Details
      uuid={uuid}
      title={title}
      cover_image_url={cover_image_url}
      description={description}
      retail_price={retail_price?.formatted_value}
      net_price={net_price?.formatted_value}
      discount={discount}
      inBag={isProductInBag(uuid)}
      addToBag={() =>
        addToBag({
          uuid,
          title,
          cover_image_url,
          description,
          retail_price: retail_price,
          net_price: net_price,
          discount,
        })
      }
    />
  </article>
);

Product.propTypes = {
  cover_image_url: PropTypes.string,
  description: PropTypes.string,
  uuid: PropTypes.string,
  title: PropTypes.string,
  retail_price: PropTypes.object,
  net_price: PropTypes.object,
  discount: PropTypes.number,
  inCart: PropTypes.bool,
  isProductInBag: PropTypes.func,
  addToBag: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
