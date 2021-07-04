import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
 

export default function Addtodo({submitHandler}){
   const [text, setText] = useState('');

   const clearHandler = (text) => {
    submitHandler(text);
    setText('');
}

    return(
        <View style={styles.inputContainer}>
            <View style = {styles.input}>
            <TextInput 
            placeholder='What do you want to do?'
            onChangeText={value => setText(value)}
            value={text} 
            clearButtonMode='always'
            />
            </View>
            <Ionicons name="ios-add-circle-outline" style ={styles.button} size={45} onPress={() => clearHandler(text) }/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginBottom: 100,
        marginLeft: 20,
        borderBottomWidth: 1,
        backgroundColor:'#fff',
        width:300,
        height: 42,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#303030',
    },
    button: {
        justifyContent: 'center',
        alignItems:'center',
        color: '#FF0000',
        marginLeft: 5,
    },
    closeButtonParent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        borderWidth: 1,
        
      },

})