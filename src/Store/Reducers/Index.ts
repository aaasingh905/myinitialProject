import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-unresolved
import userReducer from './UserReducer';

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>
