import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class image_example extends Component {
  render() {
    return (
      <View>
        <Image source={require('./assets/cuc_1.jpg')} />
      </View>
    );
  }
}

export default image_example;
