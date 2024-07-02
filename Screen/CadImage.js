import { StyleSheet, Text, View,TouchableOpacity,Image,Alert } from 'react-native'
import React, { useState } from 'react'
import {firebase} from "../firebase/firebase"
import * as ImagePicker from 'expo-image-picker' 
import * as FileSystem from 'expo-file-system'
const CadImage = () => {

  
    const[img,setImg] = useState('')
    const[uploading,setUploading] =useState(false)
    
        const pickImage = async() =>{
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing:true,
                aspect:[4,3],
                quality:1
              });
              if(!result.canceled){
                setImg(result.assets[0].uri);
              }
        }

        const uploadMedia = async() =>{
          setUploading(true);
        
        try{
          const {uri} = await FileSystem.getInfoAsync(img);
          const blob = await new Promise ((resolve, reject) =>{
            const xhr = new XMLHttpRequest();
            xhr.onload = () =>{
              resolve(xhr.response);
            };  
              xhr.onerror = (e) =>{
                reject(new TypeError('Erro ao requisitar'));
                };
                    xhr.responseType ='blob';
                    xhr.open('GET',uri,true);
                    xhr.send(null);
            
          });
          const filename = img.substring(img.lastIndexOf('/') + 1);
          const ref = firebase.storage().ref().child(filename);

          await ref.put(blob);
          setUploading(false);
          Alert.alert('Foto cadastrada')
          setImg(null)
        } catch(e)
        {
          console.error(e);
          setUploading(false);
        }

      }
        

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
              <Text style={styles.buttonText}> Escolha uma imagem</Text>
      </TouchableOpacity>

        <View>
          {img && <Image
            source={{uri:img}}
            style={{width: 300, height:300}}
          />}
        </View>
    
        <TouchableOpacity style={styles.updateButton} onPress={uploadMedia}>
              <Text style={styles.buttonText}> Upload da imagem</Text>
      </TouchableOpacity>
    
    </View>


  )
}

export default CadImage

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
    
},
buttonText:{
  color:'white',
  fontWeight:'700',
  fontSize:20,
  textAlign:"center"
},
selectButton:{
  backgroundColor:'blue',
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  borderRadius:25,
  width:'90%',
  marginBottom:10,
  height:'5%'
  
},
updateButton:{
  backgroundColor:'black',
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  borderRadius:25,
  width:'90%',
 height:'5%'
}
})