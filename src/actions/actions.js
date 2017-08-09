import store from '../store/store';

export function addItem(text, cb = () => { return text }) {
  if(text) {
    store.dispatch({ type: 'ADD_TEXT', text: text });
    cb();
  }
}

export function removeItem(id, cb = () => { return id }) {
  store.dispatch({ type: 'DELETE_TEXT', id: id});
  cb();
}
