import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { SafeAreaView, ScrollView, Dimensions } from "react-native";

import Home from '../components/Home';
import order from '../components/order'

const AppNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Order: { screen: order }
},
{
    initialRouteName: 'Home'
}
);

export default createAppContainer(AppNavigator);