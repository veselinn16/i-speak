import { createStore } from 'redux';
import { contacts } from '../staticData';
import reducer from '../reducers';

const store = createStore(reducer, {contacts}); // { contacts: contacts } --> initial state

export default store;