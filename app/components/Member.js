import React from 'react';
import { connect } from 'react-redux'
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet, Alert} from 'react-native';
import { FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

import {getMember, mealTodayAction} from '../actions/member';

class Member extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Members',

    };

    constructor (props) {
      super()
      this.state = {
        selectedIndex: 0,
        checked: props.member.auto_meal,
        member: props.member
      }
      this.updateMealToday = this.updateMealToday.bind(this)
    }
    // ------------------------------------------------------------------


    componentWillMount(){
      var member = this.state.member;
      console.log(member.today_meal);
      if(member.today_meal){
        var val = 0;
      }else{
        var val = 1;
      }
      this.setState({
        selectedIndex: val
      })
    }

    // ------------------------------------------------------------------


    updateMealToday (selectedIndex) {
      var that = this;
      if(selectedIndex == 0){
        var val = 'ON'
      }else{
        var val = 'OFF'
      }
      Alert.alert(
          "   " + val,
          'Are You Sure You Want To ' + val + ' Your Meal Today',
          [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: 'Yes', onPress: () => { that.mealTodayHelper(selectedIndex) } },
          ],
          { cancelable: false }
      )
      
    }

    mealTodayHelper(selectedIndex){

      if(selectedIndex == 0){
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
      this.setState({selectedIndex})
    }

    // ------------------------------------------------------------------

    updateAutoMeal(){
      var that = this;
      var autoMeal = !this.state.member.auto_meal;
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
      const buttons = ['Yes', 'No']
      const { selectedIndex } = this.state
      console.log(this.state.member);
      return (
        
          <View>
              
              <Card
                  title={this.state.member.name}
                  >
                  
                  <View style={{flexDirection: "row"}}>
                      <Image
                          style={styles.image}
                          resizeMode="cover"
                          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                      />
                  </View>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>
                     
                  </Text>

                  <CheckBox
                    title='Auto Meal'
                    checked={this.state.checked}
                    onPress={ ()=> this.updateAutoMeal() }
                  />

                  <ButtonGroup
                    onPress={this.updateMealToday}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40}} />

                  {/* <Button
                      icon={{ name: 'code' }}
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      title='View Detail' 
                      onPress={() => navigate('ChatHistory')} /> */}
                      
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
        width: 80,
        height: 80,
    }
})

const mapStateToProps = (state) => {
  
  return {
   
  };
};

  export default connect(mapStateToProps)(Member);