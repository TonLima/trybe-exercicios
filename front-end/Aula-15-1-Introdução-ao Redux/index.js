import { createStore } from 'redux';

const store = createStore();

const reducer = (state) => {
  return state;
};

const store = createStore(reducer);

const reducer = (state = { login: false, email:"" }) => {
  return state;
};

const store = createStore(reducer);
