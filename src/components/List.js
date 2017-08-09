import millennium from 'millenniumjs';
import { removeItem } from '../actions/actions';

const List = ({ items }) => {

  const list = items.map((listItem , index) => {

    return (
      <li className = "list__item">

        { listItem }

        <button onClick = { () => removeItem(index) } className = "form__btn list__item__buttons">
          Remove
        </button>

      </li>
    )

  });

  return (
    <ul className = "list">
      { list }
    </ul>
  )

}

export default List;
