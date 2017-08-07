import millennium from '../../millenniumjs/dist/millennium';
import store from './store/store';
import App from './components/App.js';

const render = () => {
  const rootElement = document.getElementById('root');
  millennium.render(<App store={store} state={store.getState()} />, rootElement);
}

render();
store.subscribe(render);
