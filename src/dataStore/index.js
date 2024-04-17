import { combineReducers } from 'redux';
import myReducer from './reducers';

const rootReducer = combineReducers({
  myReducer,
  // Add other reducers here if needed
});

export default rootReducer;