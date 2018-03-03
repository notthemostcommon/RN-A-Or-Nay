import React, { Component } from 'react';
import { 
    View, 
    Text,
    TextInput, 
    TouchableHighlight, 
    StyleSheet,
    AsyncStorage, 
    ActivityIndicatorIOS,
      } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left} from 'native-base'; 

const ACCESS_TOKEN = 'access_token';

class RegisterScreen extends Component {
    constructor() {
        super()
      this.state = {
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
        errors: [],
        showProgress: false,

      }
    }

    async onRegisterPressed(){
        try{
            let response = await fetch('http://173.2.2.154:3000/api/users', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    user:{
                        name: this.state.name,
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
            </Header>
            <View style={styles.container}>
                <Text> {this.state.email} </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Email'
                    keyboardType="email-address"
                    autoCapitalize='none'
                    onChangeText={(val) => this.setState({email: val})}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Name'
                    onChangeText={(val) => this.setState({name: val})}
                />
                <Text>{this.state.name}</Text>
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
