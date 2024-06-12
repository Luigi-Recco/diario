import React, { useState,useEffect } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet,Text, TextInput, View } from "react-native";
import {app, db, getFirestore, collection, addDoc, getDocs} from '../firebase/firebase';
import { ActivityIndicator, FlatList } from 'react-native-web';
import MovieList from './MovieList';
const LoginScreen = () =>{

        const [title,setTitle] = useState('');
        const [description,setDescription] = useState('');
        const [MovieList, setMovieList] = useState([]);


        const addMovie = async()=>{
                   try {
                 const docRef = await addDoc(collection(db, "movies"), {
                        title:title,
                        description:description
                     });
                console.log("Document written with ID: ", docRef.id);
                setTitle("");
                setDescription("");
                } catch (e) {
                console.error("Error adding document: ", e);
                }
                readMovie();
                        };

        const readMovie = async() =>{
            const querySnapshot = await getDocs(collection(db, "movies"));
                querySnapshot.forEach((doc) => {
                    console.log(doc.id,doc.data());
                    setMovieList({
                        ...doc.data(),
                        id:doc.id,
                            });
                        });
        }

        useEffect(() => {
                readMovie();
        }, [])

        return(

        <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>

                    {MovieList.length > 0  ?(
                    
            
                    <FlatList
                        data={MovieList}
                        renderItem={({item,item2}) => <MovieList title={item.title} 
                        keyExtractor={item=>item.id}
                        />}
                        
                    />
                        ):(
                            <ActivityIndicator/>
                        )}



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

        </KeyboardAvoidingView>

           
                




    );
}

export default LoginScreen
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