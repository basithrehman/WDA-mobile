import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MyHeader from "../components/MyHeader";

export default class Home extends React.Component {
  render() {
    return (
      <View>
      <MyHeader navigation={this.props.navigation} title="Home" />
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
  