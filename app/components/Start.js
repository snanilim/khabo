import React, { PureComponent } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import {autoUpdateMeal} from '../actions/member';


import Home from './Home';
import Members from './Members';
import AddMember from './AddMember';

const FirstRoute = () => <Home />;
const SecondRoute = () => <Members />;
const ThirdRoute = () => <AddMember />;

export default class Start extends PureComponent {
    static navigationOptions = {
        tabBarLabel: 'Home',
      };
    state = {
      index: 0,
      routes: [
          { key: '1', title: 'Home' },
          { key: '2', title: 'Member' },
          { key: '3', title: 'AddMember' },
        ],
    };

    componentWillMount(){
      // autoUpdateMeal();
    }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
  });

  render() {
    return (
      
         
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});