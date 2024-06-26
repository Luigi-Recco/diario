import React, { useState,useEffect } from 'react';
import {  Pressable, StyleSheet,Text, TextInput, View,FlatList } from "react-native";
import { db,doc,  collection, addDoc, getDocs, deleteDoc} from '../firebase/firebase';
import Itens from './Itens';

const CadScreen = () =>{



        const [description,setDescription] = useState('');
        const [ListadeCompra, setListadeCompra] = useState([]);


        const addLista = async()=>{
                   try {
                 const docRef = await addDoc(collection(db, "ListaDeCompra"), {
                        description:description,
                        feito:false
                     });
                console.log("ID do bagulho ", docRef.id);
                setDescription("");
                } catch (e) {
                console.error("Error adding document: ", e);
                }
                readLista();

                        };

       

        const readLista = async() =>{
            const querySnapshot = await getDocs(collection(db, "ListaDeCompra"));
            const lista = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.id,doc.data());
                    lista.push({
                        ...doc.data(),
                        id:doc.id,
                            });
                            setListadeCompra(lista)
                        });
        }

        const deleteItensLista = async()=>{
            const querySnapshot = await getDocs(collection(db, "ListaDeCompra"));

            querySnapshot.docs.map((item)=>deleteDoc(doc(db,"ListaDeCompra",item.id)));
            readLista();
        }

        useEffect(() => {
           
            readLista();

        }, []);

        return(

    <View
        style={styles.container}
        >
                          
     

          
                    <FlatList
                        data={ListadeCompra}
                        renderItem={({item}) => {
                        return(
                            <Itens
                                description={item.description}
                                feito={item.feito}
                                id={item.id}
                                readLista = {readLista}
                            />
                            )
                        
                    }}
                    keyExtractor={(item) => item.id}
                
                    />


                     


                <View style={styles.inputContainer}> 

                                
                        <TextInput placeholder='Suas compras'
                        value ={description}
                        onChangeText={setDescription}
                        style ={styles.input}
                        >

                        </TextInput>

                       

                </View>

                <View style={styles.buttonContainer}>

                    <Pressable
                    onPress={addLista}
                    style={[styles.button, styles.buttonOutline]}
                    >
                      <Text style={styles.buttonOutlineText}>Registrar</Text>
                    </Pressable>
                    
                    <Pressable
                    onPress={deleteItensLista}
                    style={[styles.button, styles.buttonOutline]}>
                          
                        <Text style={styles.buttonOutlineText}>Deletar todas as compras</Text>
                    </Pressable>

                    
                </View>

        </View>

           
                




    );
}

export default CadScreen
const styles = StyleSheet.create({

    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
        inputContainer:{
            width:'80%',
        },
        input:{
            backgroundColor:'white',
            paddingHorizontal:15,
            paddingVertical:10,
            borderRadius:10,
            marginTop:5
        },
        buttonContainer:{
            width:'60%',
            justifyContent:'center',
            alignItems:'center',
            marginTop:40,
    
        },
        button:{
                backgroundColor:'#0782F9',
                width:'100%',
                padding:15,
                borderRadius: 10,
                alignItems:'center',
            },
        buttonText:{
                color:'white',
                fontWeight:'700',
                fontSize:16,
        },
        buttonOutline:{
            backgroundColor:'white',
            marginTop:5,
            borderColor:'#0782F9',
            borderWith:2
        },
        buttonOutlineText:{
            color:'#0782F9',
            fontWeight:'700',
            fontSize:16,
        },
        title:{
            textAlign:'center',
            fontSize:20,
            fontWeight:20,
            marginBottom:60
        }

})