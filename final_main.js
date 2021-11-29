/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, ScrollView, Button } from 'react-native'
import Styles from './final_style'
import Mh_sectlist from './mh_sectlist'
import Mh_loaihoa from './mh_loaihoa'
import Icon from 'react-native-ico-material-design'

export class final_main extends Component {
    render() {
        return (
            <View style={[Styles.container]}>
                <View style={Styles.header}>
                    {/* <ImageBackground source={require('./assets/daLat.jpg')} resizeMode='cover' style={Styles.imageHeader}/> */}                                    
                    <View style={Styles.headerLeft}>
                        <TextInput style={Styles.input}/>
                    </View>
                    <View style={Styles.headerRight}>
                        <Icon name="chat-bubble" height="30" width="30" color="black"/>
                    </View>                       
                </View>
                <View style={Styles.body}>
                     <Mh_sectlist />
                </View>
                <View style={Styles.footer}>
                    <View style={Styles.footerMiddle}>
                        <Icon name="home-button" height="30" width="30" color="black" />          
                    </View>
                    <View style={Styles.footerMiddle}>
                        <Icon name="notifications-bell-button" height="30" width="30" color="black" />
                    </View>
                    <View style={Styles.footerMiddle}>
                        <Icon name="shopping-cart" height="30" width="30" color="black" />
                    </View>
                    <View style={Styles.footerMiddle}>
                        <Icon name="favorite-heart-outline-button" height="30" width="30" color="black" />
                    </View>
                    <View style={Styles.footerMiddle}>
                        <Icon name="round-account-button-with-user-inside" height="30" width="30" color="black" />
                    </View>
                </View>
            </View>
        )
    }
}

export default final_main
