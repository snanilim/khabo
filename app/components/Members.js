import React from 'react';
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet} from 'react-native';
import { FormLabel, FormInput, CheckBox, Button, FormValidationMessage, Avatar, Card, ButtonGroup} from 'react-native-elements';

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

  export default Members