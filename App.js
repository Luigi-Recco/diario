import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, SafeAreaView, View, Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native';

import Diario from './components/Diario';

import { AntDesign } from '@expo/vector-icons';

import { useState,useEffect } from 'react';

import {db, collection, addDoc, getDocs} from './firebase/index'


export default function App() {
 
 

    const [title,setTitle] = useState("");
    const [mostraDiario,setMostraDiario] = useState([]);
 
    //cadastra dados
    const addItensDiario = async() => {
      try {
        const docRef = await addDoc(collection(db, "diario"), {
          title: title,
          isChecked:false,

        });
        console.log("Document written with ID: ", docRef.id);
        setTitle("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
        getmostrarDiarios();
    };
  
    //le os dados
    const getmostrarDiarios = async() => {
      const querySnapshot = await getDocs(collection(db, "diario"));
      setMostraDiario(querySnapshot.docs.map((doc)=>({...doc.data(),id: doc.id})));
    };

    useEffect(() => {

      getmostrarDiarios();

    }, []);

    return (
    <SafeAreaView style={styles.container}>

          <View style={styles.header}>

              <Text style={styles.heading}> Meu Diario de React Native</Text>


              <Text style={styles.noOfItens}> 0 </Text>

              <Pressable>
            
            <AntDesign name="delete" size={24} color="black" />
           
            </Pressable>

          </View>

              {
             
               <FlatList
            
                data ={getmostrarDiarios}
                renderItem={({item}) => 
                <View> <Text>title={item.title}</Text> </View> }
                keyExtractor={(item) => item.id}
                />
              
        :(
                <ActivityIndicator/>
              )
              }

           
            <TextInput placeholder="Escreva suas lembranças"
             style={styles.input}
             value ={title}
             onChangeText={(text)=> setTitle(text)}
             onSubmitEditing={addItensDiario}
             />
            
            <StatusBar style="auto" />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header:{
      flexDirection:'row',
      backgroundColor:'#fff',
      width:'%90',
      alignSelf:'center',
      padding:10,
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:10
  },
  heading:{
      fontSize:30,
      fontWeight:'500',
      flex:1,
  },
  noOfItens:{
      fontSize:30,
      fontWeight:'500',
      marginRight:20,
  },
  input:{
    backgroundColor:'lightgray',
    padding:10,
    fontSize:17,
    width:'%90',
    alignSelf:'center',
    borderRadius:10,
    marginTop: 'auto',
  }
});
