import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Button } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import {getMember, autoUpdateMeal, totalMealToday} from '../actions/member';


import Home from './Home';
import Members from './Members';
import AddMember from './AddMember';
import MealList from './MealList';

const FirstRoute = () => <Home />;
const SecondRoute = () => <Members />;
const ThirdRoute = () => <AddMember />;
const FourthRoute = () => <MealList />;

class Start extends PureComponent {
    static navigationOptions = {
        tabBarLabel: 'Home',
      };
    state = {
      index: 0,
      routes: [
          { key: '1', title: 'Home' },
          { key: '2', title: 'Member' },
          { key: '3', title: 'Add' },
          { key: '4', title: 'List' },
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

      if(newprops.index == 1){
        this.setState({
          index: 1,
        },()=>{
          this.props.dispatch(getMember());
        })
      }

    }




  _handleIndexChange = index => {
    this.setState({ index })
  };


  _renderHeader = props => <TabBar style={{ backgroundColor: '#00b9e6' }} {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': FourthRoute,
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
    backgroundColor: 'transparent',
    
  },
  label: { color: '#222' },
});

const mapStateToProps = (state) => {
  return {
    member: state.member.member,
    index: state.member.index
  };
};

export default connect(mapStateToProps)(Start);