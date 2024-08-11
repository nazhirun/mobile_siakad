import { StyleSheet,Text,View } from "react-native";
import React from "react";
export default function ProfileScreen(){
    return(
        <View
    style={{
        backgroundColor:'#FFFBF5',
        justifyContent : 'center',
        alignItems : 'center',
        flex:1

    }}>
        <Text
        style={{
            fontSize:30,
            fontWeight:'bold',
            color: '#7743DB',
            textShadowColor:'red',
            textShadowRadius:3,
        }}>
            ProfileScreen
        </Text>
    </View>
    );
}

const styles =StyleSheet.create({})