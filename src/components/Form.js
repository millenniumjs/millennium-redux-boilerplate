import millennium from 'millenniumjs';
import { addItem } from '../actions/actions';

const Form = () => {

  function makeClickable(e) {
    const pressEnter = e.which == 13 || e.keyCode == 13;

    if (pressEnter) {
      addComment();
    }
  }

  function addComment() {
    const input = millennium.refs.inputText;

    addItem(input.value, () => {
      input.value = '';
    });
  }

  return (
    <div className = "form">

      <input
        type = "text"
        placeholder = "You have a comment ?"
        ref = "inputText"
        className = "form__input"
        onkeypress = { makeClickable }
      />

      <button onClick = { addComment } className = "form__btn">
        Add comment
      </button>

    </div>
  )

}

export default Form;
