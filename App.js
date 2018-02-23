import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Index from './client';
import store from './client/store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

console.disableYellowBox = true;

export default App
