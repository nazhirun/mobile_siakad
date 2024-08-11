import { FlatList,StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ListContact(){
    const   DATA =[
        {
            nim:'100',
            nama: 'Nazhirun Mardhiy',
        },
        {
            nim: '90',
            nama : 'Rudi Ardiansyah',
        },
        {
            nim: '95',
            nama: 'Rekha Purwaningsih'
        },
        {
            nim: '97',
            nama: 'Alexa Francisca'
        }
    ];

    return(
        <View
        style={{
            flex:1,
            justifyContent:'center',
        }}>

            <FlatList
            data={DATA}
            renderItem={({item})=>(
                <View style={styles.item}>
                    <Text style={styles.title}>{item.nim}</Text>
                    <Text style={styles.titleNama}>{item.nama}</Text>
                </View>
            )}
            keyExtractor={(item,index) => index.toString()}
            />
        </View>
    );
}

const styles =StyleSheet.create({
item: {
    backgroundColor: '#190482',
    padding: 10,
    paddingLeft: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopStartRadius: 25,
    borderBottomEndRadius:25,
},
title: {
    fontSize:32,
    fontWeight: 'bold',
    color: '#FFFFDD'
},
titleNama: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2D9FF',
},

});