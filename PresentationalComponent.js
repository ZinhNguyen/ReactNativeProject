import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PresentationalComponent = props => {
  return (
    <View>
      <Text style={styles.myStyle} onPress={props.updateState}>
        {props.myState}
      </Text>
    </View>
  );
};

export default PresentationalComponent;

const styles = StyleSheet.create({
  myStyle: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
