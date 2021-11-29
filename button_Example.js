/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const button_Example = (props) => {
  return (
    <View style = {styles.container}>
      <TouchableOpacity>
        <Text style = {styles.text}>
            Button
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default button_Example

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    padding: 20,
    borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'red',
  }
})
