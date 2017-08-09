import millennium from 'millenniumjs';
import jsdom from 'mocha-jsdom';
import store from '../store/store';
import App from '../components/App';

describe('<App/>', () => {

  jsdom()

  it('Renders <App /> with Redux without crashing', () => {
    const root = document.createElement('div');
    millennium.render(<App store={store} state={store.getState()} />, root);
  });

});
