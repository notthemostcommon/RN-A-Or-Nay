import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import {StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation'; 
import { Container, Header, Content, Body} from 'native-base';
import {AppDrawerNavigator} from './src/navigation/DrawerNav';  
// import StackNav from './src/navigation/StackNav'; 
// screens 
// import HomeScreen from './src/components/HomeScreen'; 
// import LoginScreen from './src/components/LoginScreen'; 
// import SearchList from './src/components/SearchList'; 
// import ShowLocation from './src/components/ShowLocation'; 
// import Search from './src/components/Search'; 
// import LoginForm from './src/components/LoginForm';

class App extends Component {
 render() {
    return (
      
        <AppDrawerNavigator
        />
        

      
 
    );
  }
}



  

 
export default App; 