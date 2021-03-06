import React from 'react';
import { connect } from 'react-redux'
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet} from 'react-native';
import { FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

import {addMember} from '../actions/member';

class AddMember extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'AddMember',

    };

    constructor () {
      super()
      this.state = {
        name: '',
        phone: '',
        designation: '',
        email: '',
        auto_meal: false,

      }
      // this.updateIndex = this.updateIndex.bind(this)
    }

    submit(){
      var member = {};
      member['name']= this.state.name;
      member['phone']= this.state.phone;
      member['designation']= this.state.designation;
      member['email']= this.state.email;
      member['auto_meal']= this.state.auto_meal;

      this.props.dispatch(addMember(member));
    }


  
    render() {

      return (
        <ScrollView>
          <View style={styles.histContainer}>
              
              <Card
                  title='Rabbi'
                  >
                  <FormLabel>Name</FormLabel>
                  <FormInput onChangeText={(value) => { this.setState({ name: value }) }} />

                  <FormLabel>Phone</FormLabel>
                  <FormInput onChangeText={(value) => { this.setState({ phone: value }) }} />

                  <FormLabel>Designation</FormLabel>
                  <FormInput onChangeText={(value) => { this.setState({ designation: value }) }}/>

                  <FormLabel>Email</FormLabel>
                  <FormInput onChangeText={(value) => { this.setState({ email: value }) }}/>

                  <CheckBox
                      title='Auto Meal'
                      checked={this.state.auto_meal}
                      onPress={() => this.setState({ auto_meal: !this.state.auto_meal })}
                  />

                  <Button
                    onPress={() => this.submit()}
                    backgroundColor='#03A9F4'
                    title="Add Member"
                    />
                      
              </Card>

              
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
    
  };
};

export default connect(mapStateToProps)(AddMember);