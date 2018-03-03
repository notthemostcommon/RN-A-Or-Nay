import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, ListView, ScrollView } from 'react-native';
import { Container, List, ListItem,} from 'native-base'; 
import { HeaderBackButton } from 'react-navigation';
import _ from 'underscore'; 


class ShowViolations extends Component {
  constructor(props){
    super(props)
 
  }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.dispatch({ type: 'Navigation/BACK' })} />,
        headerTitle: "Violations"
    })
  
 
render() {
  const {title} = this.props.navigation.state.params
    return (
      <ScrollView style = {style.modal}>
      
        {_.sortBy(title, 'key').reverse().
        map( (d, i)  => (
          <List key={i} >
           <ListItem itemDivider key={d.key}> 
            <Text>  
              {new Date(d.key).toISOString().split('T')[0]} 
            </Text>
           </ListItem>
           {d.values.map((d, i) => (
            <ListItem key={i+i}>  
              <Text>{d}</Text>
         
         
           </ListItem>
            ))}
          </List>
        ))}

      </ScrollView>
        )
  }
}
export default ShowViolations; 

const style = StyleSheet.create({
  modal: {
    // paddingTop: 75, 
    // flexDirection: 'row',
    // width: '90%', 
    // height: '15%'
  }
})

// export default class MyComponent extends Component {
  
//   render() {
//     return (
//         <View>
           
//                 <Button
//                     onPress={() => this.closeModal()}
//                     title="Close modal"
//                 >
//                 </Button>
              
//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//   },
//   innerContainer: {
//     alignItems: 'center',
//   },
// });