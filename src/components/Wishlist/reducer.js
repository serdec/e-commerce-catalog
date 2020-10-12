import cuid from 'cuid';

export const addToWishlist = ({
  uuid = cuid(),
  title = '',
  cover_image_url = '',
  description = '',
  retail_price = {},
  net_price = {},
  discount = 0,
} = {}) => ({
  type: addToWishlist.type,
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
addToWishlist.type = 'Wishlist/addToWishlist';
export const removeFromWishlist = (uuid) => ({
  type: removeFromWishlist.type,
  payload: uuid,
});
removeFromWishlist.type = 'Wishlist/removeFromWishlist';

export const isProductInWishlist = (state) => (uuid = '') => {
  const res = state.filter((product) => product.uuid === uuid);
  return res.length > 0;
};

export const getWishlistTotal = (state) =>
  state.reduce((acc, product) => acc + product.retail_price?.value, 0);

export const getNumberOfProductsInWishlist = (state) => state.length;

const wishlistReducer = (state = [], { type = '', payload = {} } = {}) => {
  switch (type) {
    case addToWishlist.type:
      return [...state, payload];
    case removeFromWishlist.type:
      return state.filter((product) => product.uuid != payload);
    default:
      return state;
  }
};

export default wishlistReducer;
