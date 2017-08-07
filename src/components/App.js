import millennium from 'millenniumjs';
import { addItem } from '../actions/actions';
import List from './List';

const App = ({ store, state }) => {

  function add() {
    const input = millennium.refs.inputText;

    addItem(input.value, () => {
      input.value = "";
    });
  }

  return (
    <div>

      <input type = "text" ref = "inputText" />
      <button onClick = { add }> Add item </button>

      <List items={state}/>

    </div>
  )

}

export default App;
