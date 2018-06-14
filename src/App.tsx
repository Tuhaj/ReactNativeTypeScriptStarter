import React from 'react';
import { Component } from 'react';
import Hello from './containers/Hello';
import configuredStore from './configuredStore';
//import './ReactotronConfig';

import {
  StyleSheet,
  View
} from 'react-native';
import {Provider} from "react-redux";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={ configuredStore }>
          <View style={styles.container}>
            <Hello />
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
