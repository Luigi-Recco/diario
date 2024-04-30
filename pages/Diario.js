import { View,Text,StyleSheet,Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React,{useEffect,useState} from "react";
import {db,doc,updateDoc,deleteDoc} from '../firebase/firebase';

const Diario = (props) =>{
        const [isChecked,setIsChecked] = useState(props.isChecked);

        const updateIsChecked = async() => {
            const DiarioRef = doc(db, "diario", props.id);
            await updateDoc(DiarioRef, {
                isChecked: isChecked,
                });
        };

        const deleteDiario = async() =>{
            await deleteDoc(doc(db, "diario", props.id));
            props.getmostrarDiarios();
        }

        useEffect(()=>{
            updateIsChecked();

        },[isChecked]);

    return(

            <View style={styles.container}>

                    <Pressable onPress={()=>setIsChecked(!isChecked)}>
                        {
                          isChecked ? (
                            <AntDesign name="checkcircle" size={24} color="black" />
                          ):(

                            <AntDesign name="checkcircleo" size={24} color="black" /> 
                        )}

                    </Pressable>
                    

                            <Text style={styles.title}>{props.title}</Text>


                    <Pressable onPress={deleteDiario}>
                    <AntDesign name="delete" size={24} color="black" />
                    </Pressable>

            </View>

    );

};

export default Diario;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#00FA9A',
        justifyContent:'space-between',
        padding:10,
        width:'90%',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:15,
        marginVertical:10
    },
    title:{
        flex:1,
        marginLeft:10,
        fontSize:17,
        fontWeight:"500",
        textAlign:'center'
    }
})