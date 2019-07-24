import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class order extends React.Component {
  render() {
    return (
      <View style={[styles.container,{}]} >
        <Text>Work Work Work</Text>
        <Button title="home" onPress={ ()=> this.props.navigation.navigate('Home') }> </Button>
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
  