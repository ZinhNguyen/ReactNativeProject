import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PresentationalComponent from './PresentationalComponent'

export class todoApp extends Component {
  state = {
    myState: 'This is my state',
  };
  updateState = () => this.setState({myState: 'State is updated'});
  render() {
    return (
      <View>
        <PresentationalComponent
          myState={this.state.myState}
          updateState={this.updateState}
        />
      </View>
    );
  }
}

export default todoApp;
