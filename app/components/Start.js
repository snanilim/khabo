import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Button } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import {autoUpdateMeal, totalMealToday} from '../actions/member';


import Home from './Home';
import Members from './Members';
import AddMember from './AddMember';

const FirstRoute = () => <Home />;
const SecondRoute = () => <Members />;
const ThirdRoute = () => <AddMember />;

class Start extends PureComponent {
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
        callAutoUpdateMeal: true,
    };

    componentWillReceiveProps(newprops){
      var member = newprops.member;

      var rawDate = member[0].updatedAt;

      var todayDate = new Date().toLocaleDateString();
      var callAutoUpdateMeal = this.state.callAutoUpdateMeal;

      if(todayDate != new Date(rawDate).toLocaleDateString() && callAutoUpdateMeal){
        this.props.dispatch(autoUpdateMeal());
        this.setState({
          callAutoUpdateMeal: false
        })
      }
      
    }



  _handleIndexChange = index => this.setState({ index });

  onPositionChange(){
    alert('ok');
  }

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
        onSwipeEnd = {this.onPositionChange.bind(this)}
      />
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    member: state.member.member
  };
};

export default connect(mapStateToProps)(Start);