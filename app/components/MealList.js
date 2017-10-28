import React from 'react';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Image, Text, TouchableHighlight, View, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import { List, ListItem, Card} from 'react-native-elements';

import {getMember, totalMealToday} from '../actions/member';

class MealList extends React.Component {

    constructor () {
      super()
      this.state = {
        refreshing: false,

      }

    }

    _onRefresh() {
      this.setState({refreshing: true});
      var that = this;
      this.props.dispatch(getMember(function(){

        that.setState({refreshing: false});

      }));

    }


  
    render() {
        var list = this.props.member;
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
                  title="Today's Meal List"
                  >
              
          <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l, i) => (
                
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={i}
                title={l.name}
                titleStyle = {{ color: l.today_meal ? '#26ceab' : '#ff6e6e' }}
                hideChevron={true}
                type='ionicon'
                badge={{ 
                    value: l.today_meal ? 'YES' : 'NO', 
                    textStyle: { color: '#fff' },  
                    containerStyle: { backgroundColor: l.today_meal ? '#26ceab' : '#ff6e6e' } 
                    }}
              />
            ))
          }
        </List>

              
          </Card>

      </ScrollView>
        
      );
    }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) => {
  return {
    member: state.member.member
  };
};

export default connect(mapStateToProps)(MealList);