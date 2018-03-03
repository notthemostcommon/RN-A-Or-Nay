import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';



class ViolationList extends React.Component {
    constructor(props) {
      super(props);
  
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
    }
    render() {
      return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
        />
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginLeft: 12,
      fontSize: 16,
    },
    photo: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
  });

  const Row = (props) => (
    <View style={styles.container}>
     
      <Text style={styles.text}>
        {nest}
      </Text>
    </View>
  );
  
  
  export default ViolationList; 