import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { SafeAreaView, ScrollView, Dimensions, View , Text} from "react-native";
import React, {Component} from 'react';

import Home from '../components/Home';
import order from '../components/order';
import Sidebar from '../components/sidebar'


const AppNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Order: { screen: order }
},
{
  initialRouteName: 'Home',
  contentComponent: (props) => ( <Sidebar {...props}></Sidebar>)
}
);

export default createAppContainer(AppNavigator);