import { View, Text,StyleSheet,ActivityIndicator } from "react-native";
import React, {useEffect,useState} from "react";
import { apiUrl } from "../../config";

const DetailMahasiswa = ({route})=>{
const {nim} = route.params;
const [mahasiswa, setMahasiswa] = useState(null);
const [loading, setLoading] = useState(null);
const [error, setError] = useState('');


useEffect(()=>{
    const fetchData = async()=>{
        try{
            const response = await fetch(
               `${apiUrl}mahasiswa/${nim}`,
            );
            const json = await  response.json();
            setMahasiswa(json);
    }catch(error){
        setError(' tidak dapat memuat data');
    }finally{
        setLoading(false);
    }
};

fetchData();
}, [nim]);

if (loading){
    return <ActivityIndicator size="large" />;
}
if (error){
     return <Text>{error}</Text>;
}

return (
<View style={styles.container}>
<Text style={styles.title}>Detail Mahasiswa</Text>
{mahasiswa && (
    <View>
        <Text style={styles.detail}> Nim:{mahasiswa.nim_2210059} </Text>
        <Text style={styles.detail}> Nama:{mahasiswa.nama_lengkap_2210059} </Text>
        <Text style={styles.detail}> 
        Jenkel:{mahasiswa.jenkel_2210059=='L' ? 'Laki-Laki' : 'Perempuan'} 
        </Text>
        <Text style={styles.detail}> 
        TTL:{mahasiswa.tmp_lahir_2210059}/ {mahasiswa.tgllahir_2210059} 
        </Text>
        <Text style={styles.detail}> Alamat:{mahasiswa.alamat_2210059} </Text>
        <Text style={styles.detail}> No Telp:{mahasiswa.notelp_2210059} </Text>
    </View>
)}
</View>
);
};


const styles = StyleSheet.create({
container: {
    flex:1,
    padding:20,
    justifyContent:'center'
},
title: {
 fontSize:24,
 fontWeight: 'bold',
 marginBottom: 20,
},
detail: {
   fontSize: 18,
   marginBottom:10,
},

}
);

export default DetailMahasiswa;