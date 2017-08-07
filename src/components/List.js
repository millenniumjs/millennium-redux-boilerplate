import millennium from 'millenniumjs';

const List = ({ items }) => {

  const list = items.map((listItem) => {
    return <li>{ listItem }</li>
  });

  return (
    <ul>
      { list }
    </ul>
  )

}

export default List;