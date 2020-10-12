import { describe } from 'riteway';
import cuid from 'cuid';
import wishlistReducer, {
  addToWishlist,
  removeFromWishlist,
  isProductInWishlist,
  getWishlistTotal,
  getNumberOfProductsInWishlist,
} from './reducer';

const newProduct = ({
  uuid = cuid(),
  title = '',
  cover_image_url = '',
  description = '',
  retail_price_formatted = '0',
  retail_price_value = 0,
  net_price_formatted = '0',
  net_price_value = 0,
  discount = 0,
} = {}) => ({
  uuid,
  title,
  cover_image_url,
  description,
  retail_price: {
    formatted: retail_price_formatted,
    value: retail_price_value,
  },
  net_price: {
    formatted: net_price_formatted,
    value: net_price_value,
  },
  discount,
});

const createState = ({ products }) => products;

describe('wishlist reducer', async (assert) => {
  {
    assert({
      given: 'no arguments',
      should: 'return the valid initial state',
      expected: [],
      actual: wishlistReducer(),
    });
  }
  {
    const product = newProduct({ title: 'Some Title' });
    const state = createState({ products: [product] });
    assert({
      given: 'a product',
      should: 'add it to the wishlist',
      expected: state,
      actual: wishlistReducer(wishlistReducer(), addToWishlist(product)),
    });
  }
  {
    const product = newProduct({ title: 'Some Title' });
    const actualState = createState({ products: [product] });
    const expected = createState({ products: [] });
    assert({
      given: 'a product',
      should: 'remove it from the wishlist',
      expected,
      actual: wishlistReducer(actualState, removeFromWishlist(product.uuid)),
    });
  }
  {
    const product = newProduct({ title: 'Some Title' });
    const actualState = createState({ products: [product] });
    assert({
      given: 'a product',
      should: 'remove it from the wishlist',
      expected: true,
      actual: isProductInWishlist(actualState)(product.uuid),
    });
  }
  {
    const product = newProduct({
      title: 'Some Title',
      retail_price_value: 100,
    });
    const product2 = newProduct({
      title: 'Some Title2',
      retail_price_value: 100,
    });
    const actualState = createState({ products: [product, product2] });
    assert({
      given: 'a list of product',
      should: 'calculate their value',
      expected: 200,
      actual: getWishlistTotal(actualState),
    });
    assert({
      given: 'a list of product',
      should: 'return the number of products in the wishlist',
      expected: 2,
      actual: getNumberOfProductsInWishlist(actualState),
    });
  }
});
