import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import {db,doc,updateDoc,deleteDoc} from '../firebase/firebase'


const Itens = (props) => {
    const [feito,setFeito] = useState(props.feito)

    const deleteItensLista = async()=>{
        await deleteDoc(doc(db,"ListaDeCompra",props.id));
        props.readLista();
    }

    const updateLista = async()=>{
        const comprasFeitas = doc(db, "ListaDeCompra", props.id);

     await updateDoc(comprasFeitas, {
          feito: feito
        });
    }
    

    useEffect(() => {
           
        updateLista();
    }, [feito]);

    return (
    <View style={styles.container}>
                           
                         <Pressable onPress={()=> setFeito(!feito)}>
                            {feito ?(
                                <AntDesign name="checkcircle" size={24} color="black" />

                            ):(
                                <AntDesign name="checkcircleo" size={24} color="black" />

                            )}
                        </Pressable>

                        <Text>{props.description}</Text>

                        <Pressable onPress={deleteItensLista}>
                             <AntDesign name="delete" size={24} color="black" />
                        </Pressable>

    </View>
  )
}

export default Itens

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignSelf:"center",
        flexDirection:"row",
        alignItems:'center',
        padding:10,
        width:'90%',
        backgroundColor:'lightblue',
        borderRadius:20,
        margin:20
    },
})