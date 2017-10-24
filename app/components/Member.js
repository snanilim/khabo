import React from 'react';
import { connect } from 'react-redux'
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet} from 'react-native';
import { FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

import {getMember} from '../actions/member';

class Member extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Members',

    };

    constructor (props) {
      super()
      this.state = {
        selectedIndex: 0,
        checked: true,
        member: props.member
      }
      this.updateIndex = this.updateIndex.bind(this)
    }


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


    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }
  
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
                    checked={this.state.member.auto_meal}
                  />

                  <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40}} />

                  <Button
                      icon={{ name: 'code' }}
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      title='View Detail' 
                      onPress={() => navigate('ChatHistory')} />
                      
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