import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styles from './styles';
import {hoas} from './data/hoa.json';
import Duongcach from './duongcach';
import THDautrang from './dautrang'

export class mh_flatlist extends Component {
  render() {
    return (
      <FlatList
        data={hoas}
        keyExtractor={item => item.mahoa}
        renderItem={renderItem}
        ItemSeparatorComponent={Duong}
        pagingEnabled={false}
        ListHeaderComponent={Dautrang}
        ListFooterComponent={Cuoitrang}
      />
    );
  }
}

function renderItem({item}) {
  return (
    <View>
      <Loaihoa ma={item.mahoa} ten={item.tenhoa} mota={item.mota} />
    </View>
  );
}

function Loaihoa({ma, ten, mota}) {
  return (
    <View key={ma}>
      <Text style={styles.tieude}>{ten}</Text>
      <Text style={styles.noidung}>{mota}</Text>
    </View>
  );
}

function Duong() {
  return <Duongcach />;
}

function Dautrang() {
  return (
    <THDautrang image={require('./assets/daLat.jpg')}/>
  );
}

function Cuoitrang() {
  return (
    <THDautrang image={require('./assets/vungTau.jpg')}/>
  );
}
export default mh_flatlist;
