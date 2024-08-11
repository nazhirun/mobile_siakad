import React, {useState} from "react";
import { ScrollView,StyleSheet,Alert,View,Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from  "@react-native-community/datetimepicker";
import { Input,Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { apiUrl } from "../../config";
import { useNavigation } from "@react-navigation/native";


const FormTambah=()=>{
    const [nim, setNim] = useState('');
    const [namaLengkap, setNamaLengkap] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [tempatLahir, setTempatLahir] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState(new Date());
    const [alamat, setAlamat] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const navigation = useNavigation();
    const [validationErrors, setValidationErrors] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    const submitForm =()=>{
        setIsSaving(true);
        setValidationErrors({});
        const 
    }
} 
