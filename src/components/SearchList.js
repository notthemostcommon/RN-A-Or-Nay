import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'; 
import ShowLocation from './ShowLocation'; 



class SearchList extends Component {
    constructor(props){
        super(props)

        this.showLocation = this.showLocation.bind(this); 
    }

    showLocation(){
        console.log("pressed")
        return (
            <ShowLocation location={this.props.results.dba}/>
        )
        
    }


  render () {
    //   console.log(props)
  return (
    <List>
        {
          this.props.results.map((item, i) => (
            <ListItem
              key={i}
              title={item.dba}
              subtitle={item.grade}
              leftIcon={{name: item.icon}}
              onPress={this.showLocation}
            />
          ))
        }
      </List>
  )
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})
}

  

export default SearchList;
