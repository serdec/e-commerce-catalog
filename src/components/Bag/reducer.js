import cuid from 'cuid';

export const addToBag = ({
  uuid = cuid(),
  title = '',
  cover_image_url = '',
  description = '',
  retail_price = {},
  net_price = {},
  discount = 0,
} = {}) => ({
  type: addToBag.type,
  payload: {
    uuid,
    title,
    cover_image_url,
    description,
    retail_price,
    net_price,
    discount,
  },
});
addToBag.type = 'Bag/addToBag';
export const removeFromBag = (uuid) => ({
  type: removeFromBag.type,
  payload: uuid,
});
removeFromBag.type = 'Bag/removeFromBag';

export const isProductInBag = (state) => (uuid = '') => {
  const res = state.filter((product) => product.uuid === uuid);
  return res.length > 0;
};

export const getBagTotal = (state) =>
  state.reduce((acc, product) => acc + product.retail_price?.value, 0);

export const getNumberOfProductsInBag = (state) => state.length;

const bagReducer = (state = [], { type = '', payload = {} } = {}) => {
  switch (type) {
    case addToBag.type:
      return [...state, payload];
    case removeFromBag.type:
      return state.filter((product) => product.uuid != payload);
    default:
      return state;
  }
};

export default bagReducer;
