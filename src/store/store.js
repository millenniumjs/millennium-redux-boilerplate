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

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
