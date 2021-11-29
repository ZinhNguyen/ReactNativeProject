import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

export class scrollview1 extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scroll}
        ref={a => (this.scroll = a)}
        stickyHeaderIndices={[0]}
        pagingEnabled={true}>
        <View>
          <Image style={styles.hinh} source={require('./assets/cho.jpg')} />
          <Text style={styles.text}> Flower Shop </Text>
        </View>
        <View>
          <Pressable
            onPress={() =>
              this.scroll.scrollToEnd({animated: true, duration: 500})
            }>
            <Text style={styles.text}> to end </Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.text}>
            Component that wraps platform ScrollView while providing
            integration, with touch locking "responder" system. Keep in mind
            that ScrollViews, must have a bounded height in order to work, since
            they contain unbounded-height children into a bounded container via
            a scroll interaction. In order to bound the height of a ScrollView,
            either set the height of the view directly discouraged or make sure
            all parent views have bounded height. Forgetting to transfer down
            the view stack can lead to errors here, which the element inspector
            makes quick to debug. Doesn't yet support other contained responders
            from blocking this scroll view from becoming the responder.
            Component that wraps platform ScrollView while providing integration
            with touch locking "responder" system. Keep in mind that ScrollViews
            must have a bounded height in order to work, since they contain
            unbounded-height children into a bounded container via a scroll
            interaction. In order to bound the height of a ScrollView, either
            set the height of the view directly discouraged or make sure all
            parent views have bounded height. Forgetting to transfer down the
            view stack can lead to errors here, which the element inspector
            makes quick to debug. Doesn't yet support other contained responders
            from blocking this scroll view from becoming the responder.
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() =>
              this.scroll.scrollTo({x: 0, y: 0, animated: true, duration: 5000})
            }>
            <Text style={styles.text}> to begin </Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
}

export default scrollview1;

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  scroll: {
    margin: 0,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  hinh: {
    width: '100%',
    height: 50,
    resizeMode: 'cover',
  },
});
