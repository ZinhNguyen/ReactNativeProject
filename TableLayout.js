/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Stylesheet, TextInput, Button, StyleSheet} from 'react-native';

const TableLayout = () => {
  return (
    <View style={[style.container]}>
        <View style={[style.row]}>
            <View style={[style.center]}>
                <Text>UserName</Text>
            </View>
            <View style={{flex: 4}}>
                <TextInput style={[style.yellow]}/>
            </View>    
        </View>
        <View style={[style.row]}>
            <View style={[style.center]}>
                <Text>PassWord</Text>
            </View>
            <View style={{flex: 4}}>
                <TextInput style={[style.yellow]}/>
            </View>    
        </View>
        <View style={[style.row]}>
            <View>
                <Button title="Đăng Nhập" />
            </View>
        </View>
    </View>
  );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 30,
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
    },
    yellow:{
        backgroundColor: 'yellow',
    },
    center:{
        flex: 1, justifyContent: 'center',
    },
});

export default TableLayout;