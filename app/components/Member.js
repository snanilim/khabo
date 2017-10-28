import React from 'react';
import { connect } from 'react-redux'
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet, Alert} from 'react-native';
import { Icon, FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

import {getMember, mealTodayAction} from '../actions/member';

class Member extends React.Component {
    constructor (props) {
      super()
      this.state = {
        checkedToday: props.member.today_meal,
        checked: props.member.auto_meal,
        member: props.member,
        disable: false
      }
      // this.updateMealToday = this.updateMealToday.bind(this)
    }
    // ------------------------------------------------------------------
    componentWillReceiveProps(newprops){
      var d = new Date();
      var hour = d.getHours();
      
      if(hour>10 && hour<15){
        this.setState({
          disable: true
        })
        
      }
    }


    // ------------------------------------------------------------------


    updateMealToday () {
      var that = this;
      var mealToday = !this.state.checkedToday;
      if(mealToday){
        var val = 'ON'
      }else{
        var val = 'OFF'
      }

      var d = new Date();
      var hour = d.getHours();
      if(hour>10 && hour<15){
        alert("Times Up To Update");
      }else{
        Alert.alert(
            "   " + val,
            'Are You Sure You Want To ' + val + ' Your Meal Today',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Yes', onPress: () => { that.mealTodayHelper(mealToday) } },
            ],
            { cancelable: false }
        )
      }

      
    }

    mealTodayHelper(mealToday){

      if(mealToday){
        var val = true
      }else{
        var val = false
      }

      var bool_meal = {};
      bool_meal['id'] = this.state.member._id;
      bool_meal['index'] = val;
      bool_meal['name'] = "today_meal";

      mealTodayAction(bool_meal, function(err, res){
        if(err){
          console.log(err);
        }else{
          alert("Update Completed")
        }
      });
      this.setState({
        checkedToday: mealToday
      })
    }

    // ------------------------------------------------------------------

    updateAutoMeal(){
      var that = this;
      var autoMeal = !this.state.checked;
      if(autoMeal){
        var val = 'ON'
      }else{
        var val = 'OFF'
      }
      Alert.alert(
          "   " + val,
          'Are You Sure You Want To ' + val + ' Your Auto Meal',
          [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: 'Yes', onPress: () => { that.mealAutoHelper(autoMeal) } },
          ],
          { cancelable: false }
      )
    }

    mealAutoHelper(autoMeal){
      if(autoMeal){
        var val = true
      }else{
        var val = false
      }

      var bool_meal = {};
      bool_meal['id'] = this.state.member._id;
      bool_meal['index'] = val;
      bool_meal['name'] = "auto_meal";

      mealTodayAction(bool_meal, function(err, res){
        if(err){
          console.log(err);
        }else{
          alert("Update Completed")
        }
      });

      this.setState({
        checked: autoMeal
      })
    }
    // ------------------------------------------------------------------
  
    render() {

      
      return (
        
          <View>
              
              <Card
                  title={this.state.member.name}
                  >
                  
                  <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                      <Image
                          style={styles.image}
                          resizeMode="cover"
                          source={require('../assets/img-03.jpg')}
                      />
                  </View>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>
                     
                  </Text>

                  <CheckBox
                    title='Auto Meal'
                    checked={this.state.checked}
                    onPress={ ()=> this.updateAutoMeal() }
                  />

                  <Button
                  onPress={() => this.updateMealToday()}
                  disabled = {this.state.disable}
                  backgroundColor = {this.state.checkedToday ? '#26ceab' : '#ff6e6e'}
                  title= { this.state.checkedToday ? 'Today Meal: YES' : 'Today Meal: NO'} />

                      
              </Card>

              
          </View>

      
        
      );
    }
  }

  const styles = StyleSheet.create({
    histContainer: {
        backgroundColor: '#ccc',
        paddingBottom: 30
    },
    image:{
        width: 120,
        height: 120,
        borderRadius:100,
    }
})

const mapStateToProps = (state) => {
  
  return {
    newMember: state.member.member
  };
};

  export default connect(mapStateToProps)(Member);