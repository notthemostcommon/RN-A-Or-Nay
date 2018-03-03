import React, { Component } from 'react';
import {  View, Text, StyleSheet, KeyboardAwareScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements'; 
import SearchList from './SearchList';
import Indicator from './ActivityIndicator'; 
import _ from 'underscore'; 
// import { withNavigation } from 'react-navigation';


export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            text: '', 
            results: '', 
            loading: false
           
        }
        this.submitSearch = this.submitSearch.bind(this);
      }
      
      submitSearch(){
        this.setState({loading: true})
        
        fetch("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=" +this.state.text)
        .then (res => {
          return res.json();
        })
        .then (data => {
          // console.log(data)
          this.setState({
            results: data, 
            loading: false, 
          })
          this.search.clearText();
          _.uniq(this.state.results, false, (location => {
            return location.camis
          })).length > 1 ?
          this.props.navigation.navigate('SearchList', {results: this.state.results}) : 
          this.props.navigation.navigate('ShowLocation', {title: this.state.results})
          // console.log("this is thisstate", this.state.results)
        })
        .catch(err => {
          console.log(err) 
        })
      }

      
      
  render() {
    const {navigate} = this.props.navigation

    return (
      <View>
        {this.state.loading ? <Indicator/> : null}

       
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
            ref={search => this.search = search}
            autoGrow={true}
          
            />
            {/* {this.state.results ? <SearchList navigation={this.props.navigation} results={this.state.results}/> : <Text></Text>} */}
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
}); 