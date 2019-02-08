import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer); // intial state set by the reducer

export default store;