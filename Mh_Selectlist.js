import React, { Component } from 'react';
import { Text, SectionList, View, Image } from 'react-native';
import {loaihoas} from './data/loaihoas.json';
import style from './style';

export class Mh_Selectlist extends Component {
    render() {
        return (
            <View>
                <SectionList
                sections={loaihoas}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item,index)=>index}
                stickySectionHeadersEnabled={true}
                ItemSeparatorComponent={Duong}
                ListHeaderComponent={Dautrang}
                ListFooterComponent={Cuoitrang}
                />
            </View>
        )
    }
}

function renderSectionHeader({ section }) {
    return(
        <View
            style={style.headerContainer}>
                <Text style={style.tieude}>{section.tenloai}</Text>
        </View>
    )
}

function renderItem({item, index}){
    return(
        <View>
            <Hoa ma={item.mahoa} ten={item.tenhoa} mota={item.mota}/>
        </View>
    )
}

function Hoa({ma, ten, mota}) {
    return(
        <View key={ma}>
            <Text style={style.tieude}>{ten}</Text>
            <Text style={style.noidung}>{mota}</Text>
        </View>
    )
}

function Duong({item, index}){
    return(
        <View style={style.duongthang}/>
    )
}

function Dautrang(){
    return(
        <View>
            <Image source={require('./images/binh-hoa.jpg')} style={style.dautrang}/>
        </View>
    )
}

function Cuoitrang(){
    return(
        <View>
            <Image source={require('./images/binh-hoa.jpg')} style={style.dautrang}/>
        </View>
    )
}

export default Mh_Selectlist
