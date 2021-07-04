import React from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground, TouchableOpacity} from 'react-native';

export default function FrontPage({navigation}) {

    const pressHandler = () => {
        navigation.navigate('Home');
    }

    return(
        <View style = {styles.frontpage}>
            <TouchableOpacity onPress={pressHandler}>
            <Image
            source={require('./TodoHub2.png')}
            style={styles.image}
            /> 
             </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    frontpage:{
        backgroundColor: '#000',
        flex: 1,
        justifyContent:'center',
      }, 
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginBottom: 100,
    },

})