import React, { Component } from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import { Avatar, Rating } from 'react-native-elements'; 
import Map from './Map'; 
import _ from 'underscore';
import ShowViolations from './ShowViolations';  
import ViolationData from './ShowViolations'; 
import { Container, Header, Content, H1, H2, H3} from 'native-base'; 



class ShowLocation extends Component {
  constructor() {
    super()

  }; 

  render() {
    console.log("inside showlocation")
    const { title } = this.props.navigation.state.params
    const { navigate } = this.props.navigation

    const nested = []; 

    title.forEach(d => {
        findItems(d)
    })
    
    function findItems(date) {
        let obj = {};
        let newData = nested.filter(d => { 
            return d.key == date.inspection_date } )
        if( newData.length != 0){ 
            newData[0].values.push(date.violation_description)
        } else {
            obj.key = date.inspection_date
            obj.values = [date.violation_description]
            nested.push(obj)
        }
    }
        // console.log("nested", nested)
    
    return (
        <Container>
            <Content>
                <H1> {title[0].dba} </H1>
                <H3> {`${title[0].building} ${title[0].street}`} </H3>
                <H3> {`${title[0].boro} ${title[0].zipcode}`} </H3>
                <Text> Current Grade:</Text>

                <Avatar
                  medium
                  title={`${title[0].grade}`}

                  // activeOpacity={0.7}
                />
                <Button
              onPress={() => navigate('ShowViolations', { title: nested })}
              // onPress={() => this.setState({modalVisible: true}) }
              title="See Violations"
              // navigate('ShowViolations', { title: nested })
          />
            </Content>
            <Rating
              showRating
              type="star"
              fractions={1}
              startingValue={3.6}
              // readonly
              imageSize={40}
              onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10, alignSelf: 'center' }}
              
              ratingBackgroundColor={'grey'}
            />

            <Map/>
            <View style={styles.container}>
         
          
        </View>
      </Container>
      
    
    );
}; 
}
  


export default ShowLocation;





const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    innerContainer: {
      alignItems: 'center',
    },
  });





// import React, { Component } from 'react';
// import { Text, View, Button, Modal, StyleSheet } from 'react-native';

// export default class MyComponent extends Component {
//   state = {
//     modalVisible: false,
//   };

//   openModal() {
//     this.setState({modalVisible:true});
//   }

//   closeModal() {
//     this.setState({modalVisible:false});
//   }

//   render() {
//     return (
//         <View style={styles.container}>
//           <Modal
//               visible={this.state.modalVisible}
//               animationType={'slide'}
//               onRequestClose={() => this.closeModal()}
//           >
//             <View style={styles.modalContainer}>
//               <View style={styles.innerContainer}>
//                 <Text>This is content inside of modal component</Text>
//                 <Button
//                     onPress={() => this.closeModal()}
//                     title="Close modal"
//                 >
//                 </Button>
//               </View>
//             </View>
//           </Modal>
//           <Button
//               onPress={() => this.openModal()}
//               title="Open modal"
//           />
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