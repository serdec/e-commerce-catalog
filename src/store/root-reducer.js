import { combineReducers } from 'redux';
import bagReducer from '../components/Bag/reducer';
import wishlistReducer from '../components/Wishlist/reducer';
const rootReducer = combineReducers({
  bag: bagReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
