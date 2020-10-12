import { describe } from 'riteway';
import cuid from 'cuid';
import bagReducer, {
  addToBag,
  removeFromBag,
  isProductInBag,
  getBagTotal,
  getNumberOfProductsInBag,
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

describe('bag reducer', async (assert) => {
  {
    assert({
      given: 'no arguments',
      should: 'return the valid initial state',
      expected: [],
      actual: bagReducer(),
    });
  }
  {
    const product = newProduct({ title: 'Some Title' });
    const state = createState({ products: [product] });
    assert({
      given: 'a product',
      should: 'add it to the bag',
      expected: state,
      actual: bagReducer(bagReducer(), addToBag(product)),
    });
  }
  {
    const product = newProduct({ title: 'Some Title' });
    const actualState = createState({ products: [product] });
    const expected = createState({ products: [] });
    assert({
      given: 'a product',
      should: 'remove it from the bag',
      expected,
      actual: bagReducer(actualState, removeFromBag(product.uuid)),
    });
  }
  {
    const product = newProduct({ title: 'Some Title' });
    const actualState = createState({ products: [product] });
    assert({
      given: 'a product',
      should: 'remove it from the bag',
      expected: true,
      actual: isProductInBag(actualState)(product.uuid),
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
      actual: getBagTotal(actualState),
    });
    assert({
      given: 'a list of product',
      should: 'return the number of products in the bag',
      expected: 2,
      actual: getNumberOfProductsInBag(actualState),
    });
  }
});
