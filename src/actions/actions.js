import store from '../store/store';

export function addItem(text, cb = () => {return text}) {
  store.dispatch({type: 'ADD_TEXT', text: text});
  cb();
}
