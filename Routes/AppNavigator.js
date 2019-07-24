import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import order from '../components/order'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Order: { screen: order }
},
{
    initialRouteName: 'Order',
    // headerMode: "none",
    defaultNavigationOptions: {
      headerTitle: 'order',
  
      headerStyle: {
          backgroundColor: '#28F1A6',
         
          shadowOpacity: 0,
      },
      headerTintColor: '#333333',
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff'
      }
  }
}
);

export default createAppContainer(AppNavigator);