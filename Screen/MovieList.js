import { StyleSheet, Text, View,FlatList  } from 'react-native'
import React, { useState,useEffect } from 'react';
import { db,  collection, getDocs} from '../firebase/firebase';



const MovieList = () => {

  const [MovieList, setMovieList] = useState([]);

  const readMovie = async() =>{
    const querySnapshot = await getDocs(collection(db, "movies"));
    const lista = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.id,doc.data());
            lista.push({
                ...doc.data(),
                id:doc.id,
                    });
                    setMovieList(lista)
                });
}

useEffect(() => {
        readMovie();
}, [])

  return (

    <View >

                      <FlatList
                        data={MovieList}
                        renderItem={({item}) => {
                        return(
                        <View>

                        <Text style={styles.MovieTitle} > {item.tile} </Text>
        
                        <Text style={styles.MovieDescription}>{item.description}</Text>

            </View>)
                        
                    }}
                
                    />


    </View>

  )
}

export default MovieList

const styles = StyleSheet.create({
    container:
    {
        flexDirection:'row',
        backgroundColor:'black',
        
        padding:10
    },
    MovieTitle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:20

    },
    MovieDescription:{
        textAlign:'center',
        fontSize:20,
        fontWeight:20
    }
})