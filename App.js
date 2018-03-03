import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {AppDrawerNavigator} from './src/navigation/DrawerNav';  

class App extends Component {
 render() {
    return (
      
        <AppDrawerNavigator
        />
    );
  }
}
export default App; 