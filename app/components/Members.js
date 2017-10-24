import React from 'react';
import { connect } from 'react-redux'
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet} from 'react-native';
import { FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

import {getMember} from '../actions/member';
import Member from './Member';

class Members extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Members',

    };

    constructor () {
      super()
      this.state = {
        selectedIndex: 0,
        checked: true
      }
      
    }

    componentWillMount(){
      this.props.dispatch(getMember());
    }

  
    render() {

      var output = [];
      var members = this.props.member;

      console.log(members);
      
      if(members == undefined){
        var output = [];
      }else{
        members.forEach(function(member, key, map){
          var mem = <Member member={member} key={member._id}/>
          output.push(mem);
        })
      }
      


      return (

        <ScrollView>
          <View style={styles.histContainer}>
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
  console.log(state);
  return {
    member: state.member.member
  };
};

  export default connect(mapStateToProps)(Members);