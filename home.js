/* eslint-disable prettier/prettier */
import React from "react";
import {Text, Image, View, Button} from "react-native";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
    const navigation = useNavigation();
    return(
        <View style={{flexDirection:'column'}}>
           
            <Button
            onPress={()=> navigation.navigate('Detail', {username: 'vntan', phone:'0908290030'})}
            title="Detail"
            color="blue"
            />
            <Button
            onPress={()=> navigation.navigate('MhFlat')}
            title="Flat List"
            color="blue"
            />
            <Button
            onPress={()=> navigation.navigate('MhSect')}
            title="Section List"
            color="blue"
            />
            <Button
            onPress={()=> navigation.navigate('FinalMain')}
            title="Final Main"
            color="blue"
            />
            <Button
            onPress={()=> navigation.navigate('FinalLogin')}
            title="Final Login"
            color="blue"
            />
            <Button
            onPress={()=> navigation.navigate('FinalSignin')}
            title="Final Signin"
            color="blue"
            />            
            </View>
    );
}
const gioithieu="Ung dung gioi thieu va Huong dan cam hoa"
export default Home;