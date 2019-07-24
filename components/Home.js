import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={[styles.container,{}]}>
        <Text>Work Work Work</Text>
        <Button title="order" onPress={ ()=> {
            this.props.navigation.navigate('Order')
        }}></Button>
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
  