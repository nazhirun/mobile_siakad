import { Text,View, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from './Home';
import ListContact from './ListContact'
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function Lat2(){
return(
    <NavigationContainer>
       <Tab.Navigator 
       screenOptions={{
        tabBarLabelStyle: {fontSize:12},
        tabBarStyle: {backgroundColor: 'powderblue'},
       }}>
        <Tab.Screen name="Home" component={Home}
        options={{
            title:'Beranda',
        }}/>
        <Tab.Screen name ="ListContact" component={ListContact}
        options={{
            title: 'Data kontak'
        }}/>
       </Tab.Navigator>
    </NavigationContainer>
)
}

const styles = StyleSheet.create({});


