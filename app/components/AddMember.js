import React from 'react';
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet} from 'react-native';
import { FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

class AddMember extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'AddMember',

    };

    constructor () {
      super()
      this.state = {
        selectedIndex: 0,
        checked: true
      }
      this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }
  
    render() {
      const buttons = ['Yes', 'No']
      const { selectedIndex } = this.state
      return (
        <ScrollView>
          <View style={styles.histContainer}>
              
              <Card
                  title='Rabbi'
                  >
                  <FormLabel>Name</FormLabel>
                  <FormInput/>

                  <FormLabel>Phone</FormLabel>
                  <FormInput/>

                  <FormLabel>Designation</FormLabel>
                  <FormInput/>

                  <FormLabel>Email</FormLabel>
                  <FormInput/>
                      
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

  export default AddMember