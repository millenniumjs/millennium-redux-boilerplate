import { createStore } from 'redux';

const reducer = (state, action) => {

  switch (action.type) {

    // ADD
    case ('ADD_TEXT'):

      const concatenedArray = state.concat(action.text);

      return state = concatenedArray;
      break;

    // DELETE
    case ('DELETE_TEXT'):

      const filteredArray = state.filter((item, index) => {
        return index !== action.id
      });

      return state = filteredArray
      break;

  }

  return state;

}

const initialState = [];
const store = createStore(reducer, initialState);

export default store;
