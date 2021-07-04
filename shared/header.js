import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Header({navigation}){

    const openMenu = () => {
       navigation.openDrawer()
    }

    return(
        <View style = {styles.header}>
            <MaterialCommunityIcons name="menu" size={28} color="#fff" style ={styles.icon} onPress={openMenu} />
            <View>
            <Image
            source={require('./TodoHub2.png')}
            style={{height: 60, width: 60, alignSelf: 'center'}}
            /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        left: 1,
    }
})