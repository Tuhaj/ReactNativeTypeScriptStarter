import React from 'react';
import Hello from './containers/Hello';
import { configureStore } from './configureStore';

import {
  StyleSheet,
  View
} from 'react-native';
import {Provider} from "react-redux";

interface Props {
    configureStore: () => void
};

export default class App extends React.Component<Props> {
  render() {
    return (
        <Provider store={ configureStore() }>
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
