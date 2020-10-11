import { describe } from 'riteway';
import cuid from 'cuid';
import bagReducer, { addToBag, removeFromBag } from './reducer';

const newProduct = ({ title = '', id = cuid() } = {}) => ({
  id,
  title,
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
    const state = createState({ products: [product] });
    const expected = createState({ products: [] });
    assert({
      given: 'a product',
      should: 'remove it from the bag',
      expected,
      actual: bagReducer(state, removeFromBag(product.id)),
    });
  }
});
