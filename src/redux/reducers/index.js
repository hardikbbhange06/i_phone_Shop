import { combineReducers } from 'redux';
import addItemsReducer from './addItem';

const rootReducer = combineReducers({
  addItems: addItemsReducer,
  // Add other reducers if you have them
});

export default rootReducer;