import React, { Component } from 'react';
import { 
    View, 
    Text,
    TextInput, 
    TouchableHighlight, 
    StyleSheet,
    AsyncStorage, 
    ActivityIndicatorIOS, 
    Image
      } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left, Right} from 'native-base'; 




const ACCESS_TOKEN = 'access_token';

class LoginScreen extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      password: "",
      error: "",
      showProgress: false,
    }
  }

  async storeToken(accessToken){
    try {
    await AsyncStorage.setItem(ACCESS_TOKEN, accessToken); 
      // this.getToken(); 
    } catch(error){
      console.log("an error", error);
    }
  }

  // async getToken(){
  //   try {
  //   let token = await AsyncStorage.getItem(ACCESS_TOKEN); 
  //   console.log("token is: ", token)
  //   } catch(error){
  //     console.log("an error", error);
  //   }
  // }

  async removeToken(){
    try {
    await AsyncStorage.removetItem(ACCESS_TOKEN); 
    this.getToken(); 
    } catch(error){
      console.log("an error", error);
    }
  }

  async onLoginPressed() {
    this.setState({showProgress: true})
    try {
      let response = await fetch('http://localhost:3000/api/login', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                session:{
                                  email: this.state.email,
                                  password: this.state.password,
                                }
                              })
                            });
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
          //Handle success
          this.setState({error: ''});
          let accessToken = res;
          console.log("this is login token", accessToken);
          //On success we will store the access_token in the AsyncStorage
          this.storeToken(accessToken);
          this.props.navigation.navigate('Home',{accessToken: accessToken}); 

      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        this.removeToken(); 
        this.setState({error: error});
        console.log("error " + error);
        // this.setState({showProgress: false});
    }
  }
  render() {
    const { navigate } = this.props.navigation; 

    return (
      <Container>
        <Header>
            <Left>
                 <Icon name='ios-menu' onPress={()=> navigate('DrawerOpen')}/>
            </Left>
            <Right>
                <Image 
                    style={{width: 50, height: 50, justifyContent: 'center' }}
                    source={require('/Users/James/A-Or-Nay/A-Or-Nay-App/src/assets/A-or-Nay-outlines_Transparent8.png')}/>              
            
                </Right>
          </Header>
          <View style={styles.container}>
            <Text style={styles.heading}>
              Login
            </Text>
            <TextInput
              onChangeText={ (text)=> this.setState({email: text}) }
              style={styles.input} 
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize='none'>
            </TextInput>
            <TextInput
              onChangeText={ (text)=> this.setState({password: text}) }
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}>
            </TextInput>
            <TouchableHighlight onPress={this.onLoginPressed.bind(this)}  style={styles.button}>
              <Text style={styles.buttonText}>
                Login
              </Text>
            </TouchableHighlight>

            

            {/* <ActivityIndicatorIOS animating={this.state.showProgress} size="large" style={styles.loader} /> */}
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec', 
    width: '75%', 
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default LoginScreen; 