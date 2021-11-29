/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';

const Flex = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Header</Text>
      </View>
      <View style={{flex: 8, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <Text>Left</Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'blue'}}>
          <Text>Center</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <Text>right</Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default Flex;
