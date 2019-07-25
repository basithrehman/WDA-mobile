import React from "react";
import { Icon } from "react-native-elements";

const HamburgerMenu = props => {
  return (
    <Icon underlayColor="#1f89dc"
      color="#fff"
      name="menu"
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};

export default HamburgerMenu;