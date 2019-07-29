import React, { Component } from 'react';
import './App.css'
import store from './store'
import { Provider } from 'react-redux'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>React--动态效果组件</h1>
      </Provider>
    );
  }
}

export default App;