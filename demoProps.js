/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, {Component} from 'react';
import {
  View,
  Text,
  // eslint-disable-next-line prettier/prettier
  Stylesheet,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

class DemoProps extends Component {
  state = {thongbao: 'Toi Ten La', hoten: 'Nguyen Van Nhinh'};
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{this.props.loichao}</Text>
        <Text>{this.state.thongbao}</Text>
        <Text>{this.state.hoten}</Text>
      </View>
    );
  }
}

export default DemoProps;
