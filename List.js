import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from 'react-native';

class List extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'Nhinh',
      },
      {
        id: 1,
        name: 'Nhi',
      },
      {
        id: 2,
        name: 'Nhuong',
      },
    ],
  };
  alertTtemName = item => {
    alert(item.name);
  };
  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            style = {styles.container}
            key={item.id}
            onPress={() => this.alertTtemName(item)}>
            <Text style= {styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center'
    },
    text: {
        color: 'red',
    }
})
