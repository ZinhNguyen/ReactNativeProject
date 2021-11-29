/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Animated} from 'react-native';
import Home from "./home";
//import Detail from './details';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAg from 'react-native-vector-icons/MaterialIcons';
//import IconAg from 'react-native-vector-icons/AntDesign';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mh_flatlist from './mh_flatlist';
import Mh_sectlist from './mh_sectlist';
import FinalMain from './final_main';
import FinalLogin from './final_login';
import FinalSignin from './final_signin';
import Mh_LoaiHoa from './mh_loaihoa';
import Mh_Hoa from './mh_hoa';
import Mh_Selectlist from './Mh_Selectlist';


const MaterdetailNav=createStackNavigator();
const Tab= createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Materdetail=()=>(
  <MaterdetailNav.Navigator
  initialRouteName='Mater'
  options={{headerTitleAlign:'center'}}
  >
    <MaterdetailNav.Screen
    name='Mater'
    component={Mh_LoaiHoa}
    options={{title:'Danh Sách Loài Hoa',
    headerTitleAlign: 'center'
    }}
    />
    <MaterdetailNav.Screen
    name='Detail'
    component={Mh_Hoa}
    options={({route}) => ({
      title: route.params.tenloai,
      headerTitleAlign:'center',
    })}
    />
  </MaterdetailNav.Navigator>
)

const TabControl=() => (
  <Tab.Navigator>
    <Tab.Screen name= "Master Detail" 
    component={Materdetail}
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size}) => (
        <IconAg name="favorite" color={color} size={size} />)
    }}/>
     <Tab.Screen name= "Setting" 
    component={Mh_sectlist}
    options={{
      tabBarLabel: 'Select',
      tabBarIcon: ({ color, size}) => (
        <IconAg name="settings" color={color} size={size} />)
    }}/> 
   
  </Tab.Navigator>
)

class MyApp extends Component {
  render() {
    return (
      <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name = "Home" 
          component={TabControl}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({color, size}) => (
              <IconAg name="home" color={color} size={size} />)
          }}/>
          <Drawer.Screen name="Flat" 
          component={Mh_flatlist}
          options={{
            drawerLabel: 'Select',
            drawerIcon: ({color, size}) => (
              <IconAg name="camera" color={color} size={size} />)
          }}/>
          <Drawer.Screen name="Final" 
          component={FinalMain}
          options={{
            drawerLabel: 'Final',
            drawerIcon: ({color, size}) => (
              <IconAg name="camera" color={color} size={size} />)
          }}/>
        </Drawer.Navigator>
        {/* <Stack.Navigator
          initialRouteName='Master'
            options={{
              headerTitleAlign: 'center',
            }}
        >
          <Stack.Screen
            name='Master'
            component={Mh_LoaiHoa}
            options={{
              title: 'Danh Sách Loại Hoa',
              headerTitleAlign:'center',
              
            }}
            />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerTitleAlign:'center',
              
            }}
            />
          <Stack.Screen
            name='Detail'
            component={Mh_Hoa}
            options={({route}) => ({
              title: route.params.tenloai,
              headerTitleAlign:'center',
              
            })}
            />
          <Stack.Screen
            name='MhFlat'
            component={Mh_flatlist}
            options={{
              headerTitleAlign:'center',
            }}
            />
           <Stack.Screen
            name='MhSect'
            component={Mh_sectlist}
            options={{
              headerTitleAlign:'center',
            }}
            />
           <Stack.Screen
            name='FinalMain'
            component={FinalMain}
            options={{
              headerTitleAlign:'center',
              headerTransparent: 'true',
              title: '',
              headerLeft: null,
            }}
            />
           <Stack.Screen
            name='FinalLogin'
            component={FinalLogin}
            options={{
              headerTitleAlign:'center',
            }}
            />
           <Stack.Screen
            name='FinalSignin'
            component={FinalSignin}
            options={{
              headerTitleAlign:'center',
            }}
            />
            </Stack.Navigator>            */}
      </NavigationContainer>
      </>
    )
  }
}

export default MyApp;
