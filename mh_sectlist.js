/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, SectionList, View, Image } from 'react-native'
import {loaihoas} from './data/loaihoas.json'
import style from './styles'
import Duongcach from './duongcach'
import THDautrang from './dautrang'

class mh_sectlist extends Component{
    render(){
        return(
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

function renderSectionHeader({section}){
    return(
        <View style={style.headerContainer}>
            <Text style={style.tieude}>{section.tenloai}</Text>
        </View>
    )
}

function renderItem({item,index}){
    return(
        <View>
            <Hoa ma={item.mahoa} ten={item.tenhoa} mota={item.mota}/>
        </View>
    )
}

function Hoa({ma, ten, mota}){
    return(
        <View key={ma}>
            <Text style={style.tieude}>{ten}</Text>
            <Text style={style.noidung}>{mota}</Text>
        </View>
    )
}

function Duong({item, index}){
    return(
        <Duongcach />
    )
}

function Dautrang(){
    return(
        <THDautrang image={require('./assets/haLong.jpg')} />
    )
}

function Cuoitrang(){
    return(
        <THDautrang image={require('./assets/daLat.jpg')}/>
    )
}

export default mh_sectlist
