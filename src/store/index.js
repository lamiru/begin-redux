import { createStore } from 'redux';
import modules from './modules';

const index = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(modules, devTools);

  return store;
}

export default index();
