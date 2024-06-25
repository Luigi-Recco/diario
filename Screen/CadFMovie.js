import React, { useState } from 'react';
import {  Pressable, StyleSheet,Text, TextInput, View } from "react-native";
import { db,  collection, addDoc, getDocs} from '../firebase/firebase';
const CadScreen = () =>{

        const [title,setTitle] = useState('');
        const [description,setDescription] = useState('');
        const [pasta,setPasta] = useState('');



        const addMovie = async()=>{
                   try {
                 const docRef = await addDoc(collection(db, "movies"), {
                        title:title,
                        description:description
                     });
                console.log("ID do bagulho ", docRef.id);
                setTitle("");
                setDescription("");
                } catch (e) {
                console.error("Error adding document: ", e);
                }
                // readMovie();
                        };

        // const readMovie = async() =>{
        //     const querySnapshot = await getDocs(collection(db, "movies"));
        //     const lista = [];
        //         querySnapshot.forEach((doc) => {
        //             console.log(doc.id,doc.data());
        //             lista.push({
        //                 ...doc.data(),
        //                 id:doc.id,
        //                     });
        //                     setMovieList(lista)
        //                 });
        // }

        // useEffect(() => {
        //         readMovie();
        // }, [])

        return(

    <View
        style={styles.container}
        >
                          
     

{/*           
                    <FlatList
                        data={MovieList}
                        renderItem={({item}) => {
                        return(
                        <View>

                        <Text > {item.tile} </Text>
        
                        <Text >{item.description}</Text>

            </View>)
                        
                    }}
                
                    /> */}


                     


                <View style={styles.inputContainer}> 

                                
                        <TextInput placeholder='Nome do Filme'
                        value ={title}
                        onChangeText={setTitle}
                        style ={styles.input}
                        >

                        </TextInput>

                        <TextInput placeholder='Descrição'
                        value ={description}
                        onChangeText={setDescription}
                        style ={styles.input}
                         
                        >

                        </TextInput>


                </View>

                <View style={styles.buttonContainer}>

                    <Pressable
                    onPress={addMovie}
                    style={[styles.button, styles.buttonOutline]}
                    >
                      <Text style={styles.buttonOutlineText}>Registrar</Text>
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