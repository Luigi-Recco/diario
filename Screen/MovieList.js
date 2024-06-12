import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'

const MovieList = (props) => {


  return (

    <View style = {styles.container}>

                <Text style={styles.MovieTitle}>{props.title}</Text>

                <Text style={styles.MovieDescription}>{props.description}</Text>


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