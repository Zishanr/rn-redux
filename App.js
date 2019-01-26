import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store/Store'
import Setup from './src/Setup'
import { createStackNavigator } from 'react-navigation'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


const Router = createStackNavigator({
  home: {
    Screen: Setup,
  },
  about: {}
})

export default App