import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'We are here' },
    { text: 'to help you' },
    { text: 'make money.' },
];

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => (e) => {
    this.props.navigation.navigate('auth');
  }
  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete()} />
    );
  }
}
