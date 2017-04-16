import React from 'react';
import { Text } from 'react-native';


const styles = {
  textStyles: {
    fontSize: '20px',
  },
};

const Header = () => {
  const { textStyle } = styles;
  return <Text style={textStyle}>Albums!</Text>;
};

export default Header;
