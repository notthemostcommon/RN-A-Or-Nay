import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import Reducers from './src/reducers/';
import LoginForm from './src/components/LoginForm';
import Search from './src/components/Search'

class App extends Component {
 


  render() {
    return (
      <Provider store={createStore(Reducers, applyMiddleware(logger, thunk))}>
        <View>
          <LoginForm />
          <Search />
        </View>
      </Provider>
    );
  }
}

export default App;
