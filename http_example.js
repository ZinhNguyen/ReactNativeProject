import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class http_example extends Component {
  state = {
    data: '',
  };
  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View>
          <Text> {this.state.data.id} </Text>
        <Text> {this.state.data.title} </Text>
        <Text> {this.state.data.body} </Text>
      </View>
    );
  }
}

export default http_example;
