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

class RegisterScreen extends Component {
    constructor() {
        super()
      this.state = {
        email: "",
        f_name: "",
        l_name: "", 
        password: "",
        password_confirmation: "",
        errors: [],
        showProgress: false,

      }
    }

    async onRegisterPressed(){
        try{
            let response = await fetch('http://localhost:3000/api/users', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    user:{
                        f_name: this.state.f_name,
                        l_name: this.state.l_name, 
                        email: this.state.email,
                        password: this.state.password,
                        password_confirmation: this.state.password_confirmation,
                    }
                })
            }); 
            let res = await response.text(); 
            if(response.status >= 200 && response.status < 300) {
                console.log("res success is:", res);
                let accessToken = res;
                this.props.navigation.navigate('Home', {accessToken: accessToken})
            } else {
                let errors = res; 
                throw errors 
            }
            }
            catch (errors) {
                console.log("Catch error is", errors)
                let formErrors = JSON.parse(errors); 
                let errorsArray = []; 
                for (let key in formErrors){
                    if (formErrors[key].length > 1){
                        formErrors[key].map(error => errorsArray.push(`${key} ${error}`))
                    } else {
                        errorsArray.push(`${key} ${formErrors[key]}`)
                    }
                }
                this.setState({errors: errorsArray}); 
                this.setState({showProgress: false});
        }
    }
    
  render() {
    
    return (
        <Container> 
            <Header>
                <Left>
                     <Icon name='ios-menu' onPress={()=> this.props.navigation.navigate('DrawerOpen')}/>
                </Left>
                <Right>
                <Image 
                    style={{width: 50, height: 50, justifyContent: 'center' }}
                    source={require('/Users/James/A-Or-Nay/A-Or-Nay-App/src/assets/A-or-Nay-outlines_Transparent8.png')}/>              
            
                </Right>
            </Header>
            <View style={styles.container}>
                <Text style={styles.heading}>
                Create an Account
                </Text>

                
                <TextInput 
                    style={styles.input} 
                    placeholder='First Name'
                    onChangeText={(val) => this.setState({f_name: val})}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Last Name'
                    onChangeText={(val) => this.setState({l_name: val})}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Email'
                    keyboardType="email-address"
                    autoCapitalize='none'
                    onChangeText={(val) => this.setState({email: val})}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Password'
                    onChangeText={(val) => this.setState({password: val})}
                    secureTextEntry={true}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Password Confirmation'
                    onChangeText={(val) => this.setState({password_confirmation: val})}
                    secureTextEntry={true}
                />
                <TouchableHighlight 
                    style={styles.button}
                    onPress={this.onRegisterPressed.bind(this)} >
                        <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableHighlight>

                <Errors errors={this.state.errors}/>
                {/* <ActivityIndicatorIOS animating={this.state.showProgress} size="large" style={styles.loader} /> */}
        </View>
    </Container>
        
    );
  }
}

export default RegisterScreen;

const Errors = (props) => {
    return (
        <View>
            {props.errors.map((error, i) => <Text key={i} style={styles.error}> {error}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        backgroundColor: '#F5FCFF', 
        padding: 10, 
        paddingTop: 80, 
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec', 
        width: '75%'
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
      loader: {
        marginTop: 20
      }

})
