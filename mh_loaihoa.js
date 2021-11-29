import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Touchable} from 'react-native';
import styles from './styles';
import {loaihoas} from './data/loaihoa.json';
import Duongcach from './duongcach';
import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'

const Mh_LoaiHoa=()=>{

    const navigation = useNavigation();
        return(
            <FlatList
            data={loaihoas}
            keyExtractor={(item)=>item.maloai}
            renderItem={item=>renderItem(item)}
            ItemSeparatorComponent={Duongcach}
            pagingEnabled={true}
            ListHeaderComponent={THDautrang}
            //ListFooterComponent={Cuoitrang}
            />
        )

function handleSelection (id){
    alert(id);
}

function renderItem({item, index}) {
  return (
    <TouchableOpacity
        onPress ={
            () => navigation.navigate('Detail', {maloai: item.maloai, tenloai:item.tenloai})
        }>
            <View>
                <Loaihoa ma={item.maloai} ten={item.tenloai}/>
            </View>
        </TouchableOpacity>
  );
}

function Loaihoa({ma, ten}) {
  return (
    <View key={ma}>
      <Text style={styles.tieude}>{ten}</Text>
    </View>
  );
}



function THDautrang() {
  return (
    <Dautrang image={require('./assets/daLat.jpg')}/>
  );
}

// function Cuoitrang() {
//   return (
//     <Dautrang image={require('./assets/vungTau.jpg')}/>
//   );
// }
}
export default Mh_LoaiHoa;
