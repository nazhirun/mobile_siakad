import { StyleSheet,Text,View, ActivityIndicator, FlatList,TextInput,RefreshControl,TouchableOpacity } from "react-native";
import React,{useState,useEffect} from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { apiUrl } from "../../config";

export default function Data(){
    const [dataMahasiswa,setDataMahasiswa] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const[page, setPage] = useState(1);
    const[lastPage, setLastPage] = useState(0);

    const[search,setSearch] = useState('');
    const[isSearching, setIsSearching] = useState(false);

    const[refreshing, setRefresing] = useState(false);
    const navigation = useNavigation();


    //fungsi memanggil api
    const fetchDataMahasiswa = async (pageNumber = 1, searchQuery = search) =>{
        setLoading(true);  //mulai loading
        setError(''); //reset error state
        
        try {
            const response= await fetch(`${apiUrl}mahasiswa?page=${pageNumber}&search=${searchQuery}`);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setPage(pageNumber);
            setLastPage(json.meta.last_page);


            setDataMahasiswa(
                pageNumber === 1 ? json.data : [...dataMahasiswa, ...json.data],
            );

        }catch (error){
            setError(`Tidak bisa mengambil data: ${error}`)
        }finally{
            setLoading(false);
            if(pageNumber === 1) setRefresing(false);
        }
    };

    const handleSearch = () =>{
        setIsSearching(true);
        fetchDataMahasiswa(1, search);
    };

    const clearSearch = () =>{
        setIsSearching(false);
        fetchDataMahasiswa(1,'');
        setSearch('');
    };

    const onRefresh = () =>{
        setRefresing(true);
        fetchDataMahasiswa(1,search).finally(() => setRefresing(false));
    };



    useEffect(()=>{
        fetchDataMahasiswa();
    },[]);

    const renderItemMahasiswa = ({item})=>{
        const showDetailData = () =>{
            navigation.navigate('DetailMahasiswa', {nim_2210059: item.nim_2210059});
        };
        
        return(
            <View style={styles.item}>
                 <Text style={styles.titleNim}>{item.nim_2210059}</Text>
                <Text style={styles.text}>{item.nama_lengkap_2210059}</Text>
               <TouchableOpacity
               style={styles.detailButton} onPress={showDetailData}>
                <Icon name="arrow-redo" size={24} color='#000'/>
               </TouchableOpacity>

            </View>
        );
    };

    return(
    <View style={styles.container}>
        <TextInput
        style={styles.searchInput}
        placeholder="cari berdasarkan NIM atau Nama"
        value = {search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        />

        {isSearching && (
            <TouchableOpacity onPress={() => clearSearch} style={styles.button}>
                <Text style={styles.buttonText}>Clear search</Text>
            </TouchableOpacity>
        )}

        {loading && page ===1 &&(
        <ActivityIndicator size="large" color="#00000ff" />
        )}
        {error && <Text style={styles.error}>{error}</Text>}
        <FlatList
        data={dataMahasiswa}
        renderItem={renderItemMahasiswa}
        keyExtractor={item=>item.nim_2210059}
        extraData={loading||error}
        onEndReached={() =>{
            if(!loading && page < lastPage){
                fetchDataMahasiswa(page +1);
            }
        }}
        onEndReachedThreshold={0.5} //atur sesuai kebutuhan
        ListFooterComponent={() =>
            !loading || page === 1 ? null :(
                <ActivityIndicator size = "large" color = "#860A35" />
            )
        }
         refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }

        />

        <TouchableOpacity style={styles.fab}
        onPress={()=>{
            navigation.navigate('FormTambah');
        }}>
            <Icon name="add"  size={30} color="#fff" />
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        backgroundColor: '#EFEFEF' //warna latar belakang
    },
    searchInput:{
        height:50,
        borderColor: '#CCCCCC',
        borderWidth:1,
        paddingLeft: 15,
        borderRadius: 25,
        fontSize: 16,
        marginBottom:10,
    },
    error:{
        color: 'red',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
    },
    item:{
        backgroundColor: '#FFFFFF',
        padding:15,
        marginVertical:8,
        borderRadius:10,
        elevation:4,
        shadowRadius: 5,
    },
    titleNim:{
        fontSize:22,
        color:'#333333',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text:{
        fontSize: 18,
        color: '#555555',

    },
    button:{
        backgroundColor: '#007BFF',
        padding:10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop:5,
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
    },
    detailButton:{
        position: 'absolute',
        right:10,
        top:20,
        padding:10,
    },

    fab:{
        position: 'absolute',
        width:60,
        height: 60,
        alignItems: 'center',
        justifyContent:'center',
        right:20,
        bottom:20,
        backgroundColor:'#007bff',
        borderRadius:30,
        elevation:8,
        shadowRadius: 5,
        shadowColor:'#000',
        shadowOpacity: 0.3,
        shadowOffset: {width:0, height:2},
    },

});