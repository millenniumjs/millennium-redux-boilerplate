import { createStore } from 'redux';
import update from 'immutability-helper';

const reducer = (state, action) => {

  switch (action.type) {
    case ('ADD_TEXT'):
      return state = update(state, { $push: [action.text] });
      break;
  }

  return state;

}

const initialState = [];

const store = createStore(reducer, initialState);
export default store;
