import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableHighlight, Button, View,  StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

// import components
import MyHomeScreen from '../components/Start';
import MyMembersScreen from '../components/Members';
import AddMembersScreen from '../components/AddMember'

const AppWithNavigationState = StackNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Members: {
      screen: MyMembersScreen,
    },
    AddMember:{
        screen: AddMembersScreen,
    }
  });
  

export default AppWithNavigationState