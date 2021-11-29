import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Touchable} from 'react-native';
import styles from './styles';
import {hoas} from './data/hoa.json';
import Duongcach from './duongcach';
import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'

const Mh_Hoa=({route})=>{
    const maloai=route.params.maloai;
    const HoaChon=hoas.filter(x=>x.maloai==maloai);
        return(
            <FlatList
            data={HoaChon}
            keyExtractor={(item)=>item.mahoa}
            renderItem={item=>renderItem(item)}
            ItemSeparatorComponent={Duong}
            pagingEnabled={false}
            ListHeaderComponent={THDautrang}
            ListFooterComponent={Cuoitrang}
            />
        )

function handleSelection (id){
    alert(id);
}

function renderItem({item, index}) {
  return (
    <TouchableOpacity
        onPress ={
            () => handleSelection(item.mahoa)
        }>
            <View>
                <Loaihoa ma={item.mahoa} ten={item.tenhoa} mota={item.mota}/>
            </View>
        </TouchableOpacity>
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

function THDautrang() {
  return (
    <Dautrang image={require('./assets/daLat.jpg')}/>
  );
}

function Cuoitrang() {
  return (
    <Dautrang image={require('./assets/vungTau.jpg')} style={styles.Dautrang}/>
  );
}
}
export default Mh_Hoa;
