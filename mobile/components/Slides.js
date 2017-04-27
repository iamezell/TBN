import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  textStyle: {
    fontSize: 30,
  },
};

export default class Slides extends Component {
  renderLastSlide(index) {
      console.log(index);
    if (index === this.props.data.length - 1) {
      return <Button
        title="Onwards"
        raised
        onPress={this.props.onComplete}
      />;
    }
  }

  renderSlides() {
      console.log('Called');
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.text} style={styles.slideStyle}>
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}
