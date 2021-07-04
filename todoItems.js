import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function TodoItems({item, pressHandler, doneHandler}) {

    const deleteHandler = (item) => {
        Alert.alert(
            "WARNING!",
            "Are you sure you want to delete this todo list?",
            [
              { text: "delete", onPress: () => pressHandler(item.key) },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
            ]
          );
    }

       
    return(
        <View style = {styles.container}>
            <TouchableOpacity>
            <View style = {styles.item} >
                <Text style = {styles.textItem}>{item.text}</Text>
                <Feather name="delete" size={20}  style = {styles.delete}  onPress={() =>deleteHandler(item)}/>
            </View>
            </TouchableOpacity>
        </View>
 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    item: {
        padding: 14,
        marginTop: 15,      
        backgroundColor: '#303030',
        borderRadius: 10,
        marginLeft: 25,
        marginRight: 25,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textItem: {
        color: '#fff',
        marginRight: 20,
        width: '85%',
    },
    delete: {
        color: '#d4d4d4'
    }

})