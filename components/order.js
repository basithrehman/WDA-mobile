import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from "react-native-elements";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MyHeader from "../components/MyHeader";

export default class order extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Order',
    drawerIcon: () => (
      <FontAwesome name='first-order' />
      )
  }
  render() {
    return (
      <View>
      <MyHeader navigation={this.props.navigation} title="Order" />
      <Text>This is Home Screen</Text>
    </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  