import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons'
import { Image, Text, ScrollView, TouchableHighlight, View,  StyleSheet, RefreshControl} from 'react-native';

import { PricingCard, Button, Card, Badge} from 'react-native-elements';

import {getMember, totalMealToday} from '../actions/member';


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
          refreshing: false,
        }
      }

      _onRefresh() {
        this.setState({refreshing: true});

        this.props.dispatch(totalMealToday());
        var that = this;
        this.props.dispatch(getMember(function(){
  
          that.setState({refreshing: false});
  
        }));
  
      }

      
  
    render() {
      var todayDate = new Date().toLocaleDateString();
        
      return (
        <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
        >

            <Card
                title="Today's Meal"
                >
                
                <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center',}}>
                    Date: {todayDate}
                </Text>

                {/* <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    {this.props.total_today_meal.length}
                </Text> */}
               <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                <Badge
                  containerStyle={{ marginBottom: 10, marginTop: 10, height: 80, width: 80, borderRadius:10, backgroundColor: '#26ceab' }}
                  value={this.props.total_today_meal.length}
                  textStyle={{ color: '#fff', fontSize: 30, }}
                />
                </View>
                

                <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center', }}>
                    Meal Yes: {this.props.total_today_meal.length}
                </Text>

                <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center', }}>
                    Meal No: {this.props.member.length - this.props.total_today_meal.length}
                </Text>

                <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center', }}>
                    Total Person: {this.props.member.length}
                </Text>

                
                              
                </Card>

        </ ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  const mapStateToProps = (state) => {
    console.log(state);
    return {
      member: state.member.member,
      total_today_meal: state.member.total_today_meal
    };
  };
  
    export default connect(mapStateToProps)(Home);