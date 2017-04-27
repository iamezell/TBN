import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { passwordText: 'password', emailText: 'email' };
  }
  componentDidMount () {
    this.props.facebookLogin();
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.headingContainer}>
          <Icon color="white" name="lock" size={62} />
          <Text style={styles.heading}>TheBigNeed</Text>
        </View>
        <FormLabel containerStyle={styles.labelContainerStyle}>Email</FormLabel>
        <FormInput
          ref="form2"
          placeholder="Please enter your email..."
        />
        <FormLabel containerStyle={styles.labelContainerStyle}>Password</FormLabel>
        <FormInput
          ref="form1"
          placeholder="Please enter password..."
        />
        <Button
          onPress={() => console.log('yo')}
          icon={{ name: 'done' }}
          buttonStyle={{ marginTop: 15 }}
          title="SUBMIT"
        />
      </ScrollView>
    );
  }
}
styles = StyleSheet.create({
  headingContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#2c3e50',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
});

export default connect(null, actions)(AuthScreen)
