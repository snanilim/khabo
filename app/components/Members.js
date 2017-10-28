import React from 'react';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import { FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

import {getMember, totalMealToday} from '../actions/member';
import Member from './Member';

class Members extends React.Component {
    constructor () {
      super()
      this.state = {
        selectedIndex: 0,
        checked: true,
        refreshing: false,
      }
      
    }

    componentWillMount(){
      this.props.dispatch(getMember());
    }


    _onRefresh() {
      this.setState({refreshing: true});
      var that = this;
      this.props.dispatch(getMember(function(){

        that.setState({refreshing: false});

      }));

    }


  
    render() {

      var output = [];
      var members = this.props.member;

      // console.log(this.state.refreshing);
      
      if(members == undefined){
        var output = [];
      }else{
        members.forEach(function(member, key, map){
          var mem = <Member member={member} key={member._id}/>
          output.push(mem);
        })
      }
      


      return (

        <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
        >
          <View>
            {output}
          </View>

        </ScrollView>
        
      );
    }
  }

  const styles = StyleSheet.create({
    histContainer: {
        backgroundColor: '#ccc',
        paddingBottom: 30
    },
    image:{
        width: 80,
        height: 80,
    }
})

const mapStateToProps = (state) => {
  return {
    member: state.member.member
  };
};

  export default connect(mapStateToProps)(Members);