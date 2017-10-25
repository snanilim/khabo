import React from 'react';
import { connect } from 'react-redux';
import { Image, Text, ScrollView, TouchableHighlight, View,  StyleSheet} from 'react-native';

import { Icon, PricingCard, Button, Card} from 'react-native-elements';




class Home extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Homes',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    };

    constructor() {
        super()
        this.state = {

        }
      }


      
  
    render() {
        
      return (
        <ScrollView>

            <Card
                title="Today's Meal"
                >
                
                <View>
                    
                </View>
                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                Today's Meal
                </Text>

                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Date: 14/12/14
                </Text>

                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    {this.props.total_today_meal.length}
                </Text>

                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Total Person: {this.props.member.length}
                </Text>

                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Meal Yes: {this.props.total_today_meal.length}
                </Text>

                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Meal No: {this.props.member.length - this.props.total_today_meal.length}
                </Text>

                
                              
                </Card>
            <Button
            onPress={() => this.props.navigation.navigate('Members')}
            title="Go to notifications"
            />
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