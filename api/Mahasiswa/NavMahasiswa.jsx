import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Data from './Data';
import Detaildata from './DetailData';
import { StatusBar } from "react-native";
import FormTambah from "./FormTambah";

export default function NavMahasiswa(){
    const Stack = createNativeStackNavigator();
    
    return(
        <NavigationContainer>
            <StatusBar
                barStyle="light-content"
                hidden = {false}
                backgroundColor="#7071e8"
                translucent = {true}
                />
            <Stack.Navigator initialRouteName="Datamahasiswa">
                <Stack.Screen name="DataMahasiswa" component={Data} 
                options={
                    {
                        headerTitle: 'Data Mahasiswa',
                        headerTintColor: '#fff',
                        headerStyle:{
                            backgroundColor:'#7071e8',
                        },
                    }
                }
                />

                <Stack.Screen name="DetailMahasiswa" component={Detaildata} 
                options={
                    {
                        headerTitle: 'Detail Mahasiswa',
                        headerTintColor: '#fff',
                        headerStyle:{
                            backgroundColor:' #7071e8',
                        },

                    }
                }
                />

                <Stack.Screen name="FormTambah" component={FormTambah} 
                options={
                    {
                        headerTitle: 'Tambah Mahasiswa',
                        headerTintColor: '#fff',
                        headerStyle:{
                            backgroundColor:' #7071e8',
                        },
                        headerTitleAlign: 'center',
                    }
                }
                />

            </Stack.Navigator>
        </NavigationContainer>
    );


}