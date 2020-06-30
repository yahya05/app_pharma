import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { _auth } from '../../config/config';
import { observer , inject  } from "mobx-react"

@inject('store')
@observer
class Loading extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  

  checkIfLoggedIn = () => {
    this.unsubscribe = _auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid
        this.props.store.login(true)
        this.props.navigation.navigate('Home', {uid});
      } else {
        this.props.navigation.navigate('Home');
      }
    });
  };

  UNSAFE_componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"  />
      </View>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
