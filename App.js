/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// ios: 'Press Cmd+R to reload,\n' +
// 'Cmd+D or shake for dev menu',
// android: 'Double tap R on your keyboard to reload,\n' +
// 'Shake or press menu button for dev menu',

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import AppWithNavigationState from './app/navigators/AppNavigator';
import store from './app/store/store.js'

// ------------------------------------------------------------------
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
