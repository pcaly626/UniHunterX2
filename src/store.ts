import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
);

export default store;