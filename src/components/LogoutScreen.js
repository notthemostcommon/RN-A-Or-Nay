
import React, { Component } from 'react';
import {  View, Text, AsyncStorage } from 'react-native';
const ACCESS_TOKEN = 'access_token'; 

class LogoutScreen extends Component {
    constructor(props) {
        super(props);
     }

    componentWillMount() {
        AsyncStorage.clear();
        this.props.navigation.navigate('Home')
    }
    render () {
        return null
      }
}
export default LogoutScreen;



