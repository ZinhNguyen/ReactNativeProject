import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInputBase } from 'react-native'

const style = StyleSheet.create({
    tieude:{
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        alignSelf: 'center'
    },
    noidung:
    {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        alignSelf: 'center'
    },
    duongthang:{
        height: 1,
        backgroundColor: 'red',
        paddingTop: 2,
        marginTop: 25
    },
    containerscroll:
    {
        flex: 1
    },
    hinh: 
    {
        width: '100%',
        height: 50,
        resizeMode: 'cover'
    }
})

export default style
