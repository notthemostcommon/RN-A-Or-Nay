import React, { Component } from 'react';
import  {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View, 
  ImageBackground, 
  Image
} from 'react-native';
import Search from './Search'; 
import {Icon, Button, Container, Header, Content, Left} from 'native-base'; 
import Background from '../assets/Red_Tablecloth_gw7h60.png'; 

const ACCESS_TOKEN = ''; 
console.log("this is access token", ACCESS_TOKEN)
class HomeScreen extends Component {
  constructor(props){
    super(props); 
    this.state = {
      accessToken: '', 
      userId: '', 
      userName: ''
    }
  }

  componentWillMount() {
    this.getToken();
  }

    async getToken() {
      try {
        let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
        if(!accessToken) {
            console.log("Token not set in Home");
        } else {
            this.verifyToken(accessToken)
        }
      } catch(error) {
          console.log("Something went wrong", error);
      }
    }
    

    async verifyToken(token) {
      let accessToken = token

      try {
        let response = await fetch('http://173.2.0.251:3000/api/users/api/verify?session%5Baccess_token%5D='+ this.props.navigation.state.params.accessToken);
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
          //Verified token means user is logged in so we redirect him to home.
          console.log("this is verify respone", response)
        } else {
            //Handle error
            let error = res;
            throw error;
        }
      } catch(error) {
          console.log("error response: " + error);
      }
    }
  // this.props.navigation.state.params.accessToken
    
 
    render() {
      const {navigate} = this.props.navigation 
      return (
      
        <Container>
          <Header>
              <Left>
                  <Icon name='ios-menu' onPress={()=> navigate('DrawerOpen')}/>
              </Left>
            </Header>

            {/* <View style={styles.container}> */}
            <Text style={styles.text}> Discover Your Favorite Restaurants</Text>
            <Search 
              navigation={this.props.navigation}  
              />
              <ImageBackground 
                source={Background}
                resizeMode={'cover'}
                style={styles.logo}>

              
              
              
              <Image 
                style={{width: '50%', height: '50%'}}
                source={require('/Users/James/A-Or-Nay/A-Or-Nay-App/src/assets/A-or-Nay-outlines_Transparent8.png')}/>              
              <Text style={styles.italics} > And What You Never Wanted to Know</Text>
            </ImageBackground>
            {/* </View> */}
          </Container> 
      );
    }
  }

  export default HomeScreen

  
  

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // justifyContent: 'flex-start',
      // alignItems: 'center',
      backgroundColor: 'white',
      // padding: 10,
      paddingTop: 10
    },
    icon: {
      // flex: 1, 
      justifyContent: 'flex-start',
      // height: '100%', 
      width: '100%', 
      padding: 10,  
      paddingTop: -10, 
      // backgroundColor: '#4682B4'
    },
    search: {
      backgroundColor: '#48BBEC',
      // alignSelf: 'stretch',
      // alignItems: 'flex-end',
      marginTop: 10,
      justifyContent: 'flex-end'
    },
      logo: {
        // flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: 2,
    },
      text: {
        fontSize: 20,
        marginBottom: 15, 
        fontFamily: 'ChalkboardSE-Regular',
        fontWeight: '700',
        textAlign: 'center',
    }, 
    
      italics: {
        fontSize: 'italics', 
        fontSize: 20,
        marginBottom: 15, 
        fontFamily: 'ChalkboardSE-Regular',
        fontWeight: '700',
        textAlign: 'center',

      }
    
    
  });
  
  
