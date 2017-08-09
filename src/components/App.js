import millennium from 'millenniumjs';
import Header from './Header';
import Form from './Form';
import List from './List';

const App = ({ state }) => {
  return (
    <div class = "app">
      <Header />
      <Form />
      <List items = { state } />
    </div>
  )
}

export default App;
