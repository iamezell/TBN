import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { passwordText: 'password', emailText: 'email' };
    AsyncStorage.removeItem('fb_token');
  }
  componentDidMount () {
    this.props.facebookLogin();
  }
  render() {
    return (
      <View />
    );
  }
}
export default connect(null, actions)(AuthScreen)
