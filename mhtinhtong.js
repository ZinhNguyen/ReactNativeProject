/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Stylesheet,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

class MhtinhTong extends Component {
  state = {soa: 0, sob: 0, tong: 0};
  thaydoisoa = text => {
    this.setState({
      soa: text * 1,
    });
  };
  thaydoisob = text => {
    this.setState({
      sob: text * 1,
    });
  };
  tong = (soa, sob) => {
    this.setState({tong: soa + sob});
  };
  render() {
    return (
      <View style={[style.container]}>
        <View style={[style.row]}>
          <View style={[style.center]}>
            <Text>So a</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput style={[style.yellow]} onChangeText={this.thaydoisoa} />
          </View>
        </View>
        <View style={[style.row]}>
          <View style={[style.center]}>
            <Text>So b</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput style={[style.yellow]} onChangeText={this.thaydoisob} />
          </View>
        </View>
        <View style={[style.row]}>
          <View style={[style.center]}>
            <Text>Ket Qua</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput style={[style.yellow]} />
          </View>
        </View>
        <View style={[style.row]}>
          <View>
            <Button
              title="Đăng Nhập"
              onPress={() => this.tong(this.soa, this.sob)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MhtinhTong;
