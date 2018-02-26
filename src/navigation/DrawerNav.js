import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation'; 
import { Container, Header, Content, Body} from 'native-base'; 
// screens 
import HomeScreen from '../components/HomeScreen'; 
import LoginScreen from '../components/LoginScreen'; 
import SearchList from '../components/SearchList'; 
import ShowLocation from '../components/ShowLocation'; 
import Search from '../components/Search'; 
import LoginForm from '../components/LoginForm';

export const Home = StackNavigator({
    HomeScreen: {screen: HomeScreen}, 
    Search: {screen: Search},
    SearchList: {screen: SearchList}, 
    ShowLocation: {screen: ShowLocation},
    // AppDrawerNavigator: {screen: AppDrawerNavigator},  
  }, {
    initialRouteName: 'HomeScreen', 
  })

  const CustomDrawerContentComponent = (props) => (
    <Container>
      <Header style={{height: 200}}>
        <Body>
          <Image 
            style={styles.drawerImage}
            source={require('../assets/A-OR-NAY-1.png')}/>
        </Body>
      </Header>
      <Content>
        <DrawerItems {...props}/>
      </Content>
    </Container>
  )
  
export const AppDrawerNavigator = DrawerNavigator({
    Home: {screen: Home},
    LoginScreen: {screen: LoginScreen}, 
    
  }, 
  {
    initialRouteName: 'Home', 
    contentComponent: CustomDrawerContentComponent, 
    drawerOpenRoute: 'DrawerOpen', 
    drawerCloseRoute: 'DrawerClose', 
    drawerToggleRoute: 'DrawerToggle'
  })
  
  const styles = StyleSheet.create({
    drawerImage: {
      height: 150, 
      width: 150
    }
  })

  