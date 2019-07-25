import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { SafeAreaView, ScrollView, Dimensions, View , Text} from "react-native";
import React, {Component} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Sidebar extends React.Component {

    constructor(props){
        super(props);
      }

      
    render() {
        return (
            <SafeAreaView style={[{flex:1}]}>
            <View style={[{height:'20%', backgroundColor: 'white', justifyContent:'center', alignItems:'center'}]}>
            <FontAwesome size={100} name="user-circle"></FontAwesome>
            <Text style={[{paddingTop: 10, color:'#1f89dc'}]}>Hello User</Text>
            </View>
            <ScrollView>
              <DrawerItems {...this.props}></DrawerItems>
            </ScrollView>
            </SafeAreaView>
        );
    }    
}