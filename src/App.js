import React, { Component } from 'react';
import './App.css'
import store from './store'
import { Provider } from 'react-redux'
import Switch from './components/Switch'
import TextBox from './components/TextBox'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>React--动态效果组件</h1>
        <Switch />
        <TextBox />
      </Provider>
    );
  }
}

export default App;