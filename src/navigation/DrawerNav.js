import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Button, AsyncStorage} from 'react-native';
import {StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation'; 
import { Container, Header, Content, Body} from 'native-base'; 
// screens 
import HomeScreen from '../components/HomeScreen'; 
import LoginScreen from '../components/LoginScreen'; 
import SearchList from '../components/SearchList'; 
import ShowLocation from '../components/ShowLocation'; 
import Search from '../components/Search'; 
// import LoginForm from '../components/LoginForm';
import RegisterScreen from '../components/RegisterScreen'; 
import LogoutScreen from '../components/LogoutScreen'; 
import ShowViolations from '../components/ShowViolations'; 
// const ACCESS_TOKEN = 'access_token'; 
 
export const HomeStack = StackNavigator({
    Home: {screen: HomeScreen}, 
    Search: {screen: Search},
    SearchList: {screen: SearchList}, 
    ShowLocation: {screen: ShowLocation},
    ShowViolations: { screen: ShowViolations },
    // AppDrawerNavigator: {screen: AppDrawerNavigator},  
  }, 
  {
    initialRouteName: 'Home', 
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
    Home: {screen: HomeStack},
    Login: {screen: LoginScreen}, 
    Register: {screen: RegisterScreen},
    Logout: {screen: LogoutScreen}, 
    
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

  