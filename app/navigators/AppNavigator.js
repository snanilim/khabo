import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableHighlight, Button, View,  StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

// import components
import MyHomeScreen from '../components/Start';


const AppWithNavigationState = StackNavigator({
    Home: {
      screen: MyHomeScreen,
      navigationOptions: {
        headerTitle: 'KHADOK',
        headerStyle: {backgroundColor: '#00b9e6'},
        headerTitleStyle: {color: '#fff'},
      },
    }
  });
  

export default AppWithNavigationState