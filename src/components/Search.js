import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { SearchBar } from 'react-native-elements'; 
import SearchList from './SearchList';


export default class locationSearch extends Component {
    constructor(){
        super()
        this.state = {
            text: '', 
            results: ''
           
        }
        this.submitSearch = this.submitSearch.bind(this);
      }
      
      submitSearch(){
       
        fetch("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=" +this.state.text)
        .then (res => {
          return res.json();
        })
        .then (data => {
          // console.log(data)
          this.setState({
            results: data
          })
          // console.log("this is state", this.state.results)
        })
        .catch(err => {
          console.log(err) 
        })
      }

      
      
  render() {
    

    return (
      <View>
        <Text> A or Nay </Text>
        {this.state.results ? <Text>{this.state.results.dba}</Text> : <Text>No Results</Text>}
         {this.state.results ? <SearchList results={this.state.results}/> : <Text></Text>}
        <Text>{this.state.text}</Text>
        <SearchBar
            showLoading
            platform="ios"
            // name="search"
            cancelButtonTitle="Cancel"
            placeholder='Search'
            returnKeyType='search'
            // value={this.state.searchText}
            onChangeText={(text) => this.setState({text})}
            // onChange={this.setSearchText}
            clearButtonMode="while-editing" 
            onSubmitEditing={this.submitSearch}
            lightTheme={true}
            />
      </View>
    );
  }
}
