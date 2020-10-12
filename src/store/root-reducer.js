import { combineReducers } from 'redux';
import bagReducer from '../components/Bag/reducer';
const rootReducer = combineReducers({
  bag: bagReducer,
});

export default rootReducer;
