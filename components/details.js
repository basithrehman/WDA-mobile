import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Details extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text>laal</Text>
                <Button title="BT" onPress= { () => this.props.navigation.navigate('Home')}> </Button>
            </View>
        )
    }
}