export const addToBag = (product) => ({
  type: addToBag.type,
  payload: product,
});
addToBag.type = 'Bag/addToBag';
export const removeFromBag = (id) => ({
  type: removeFromBag.type,
  payload: id,
});
removeFromBag.type = 'Bag/removeFromBag';

const bagReducer = (state = [], { type = '', payload = {} } = {}) => {
  switch (type) {
    case addToBag.type:
      return [...state, payload];
    case removeFromBag.type:
      return state.filter((product) => product.id != payload);
    default:
      return state;
  }
};

export default bagReducer;
