import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MyHeader from "../components/MyHeader";
import { Icon } from "react-native-elements";

import { Slider } from './slider';
export default class Home extends React.Component {
  
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
             <Icon name="home" color="black" />
      )
  }

  render() {
    return (
      <View style={[{flex: 1}]}>
      <MyHeader navigation={this.props.navigation} title="Home" />
      
      <Slider></Slider>
      <View style={[{ flexDirection:'row', height: 65, position:'absolute', bottom:0, width: '100%', padding: 10,backgroundColor:'white', borderTopColor: 'rgb(226, 226, 226)', borderTopWidth:1}]}>
       <View style={[{width:'50%',}]}>
       <Button color='gray' title="Favourites" style={[{backgroundColor: '#FF0000'}]}></Button>
       </View>
     <View style={[{width:'50%'}]}>
     <Button color='gray' title="Account"></Button>
       </View> 
      </View>
      <Button title="BT" onPress= { () => this.props.navigation.navigate('Details')}> </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});