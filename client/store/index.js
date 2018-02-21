import {createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import images from './reducers/images';

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))

const store = createStore(images, middleware);

export default store;
export * from './reducers/images';
