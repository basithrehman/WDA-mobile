import { createDrawerNavigator, createAppContainer, createStackNavigator ,DrawerItems } from 'react-navigation';
import { SafeAreaView, ScrollView, Dimensions, View , Text} from "react-native";
import React, {Component} from 'react';
import { Icon } from "react-native-elements";

import Home from '../components/Home';
import order from '../components/order';
import Sidebar from '../components/sidebar'
import Details from '../components/details'

const StackNavigator = createStackNavigator({
  Home: { screen: Home,
    navigationOptions: {
      header: null
  }
 },
  Order: { screen: order,
    navigationOptions: {
      header: null
  } },
  Details: { screen: Details},
},
{
   headerMode: 'screen',
}
)

const AppNavigator = createDrawerNavigator({
 
  Home: { screen: StackNavigator,
    navigationOptions : {
      drawerLabel: 'Home',
      drawerIcon: () => (
               <Icon name="home" color="black" />
        )
    } },
  Order: { screen: order }
},
{
  initialRouteName: 'Home',
  contentComponent: (props) => ( <Sidebar {...props}></Sidebar>)
}
);




export default createAppContainer(AppNavigator);