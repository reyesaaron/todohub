import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

export default function About() {
    return (
        <View style = {styles.container}>
             <ImageBackground
            source={require('./background2.jpg')}
            style={{flex: 1, alignSelf: 'center'}}>
                <Text style={styles.header}>ABOUT TodoHub</Text>
                <TouchableOpacity style ={styles.touch}>
                <   View style={styles.content}>
                        <Text style={styles.text}>           Are you a person that can always forget something that you need to do? Worry less! Because TodoHub is here for you! TodoHub App is a simple and awesome app to organize your tasks with a very easy-to-use interface. 
                            TodoHub can help you to make a list of your tasks that you can easily remember because your device is always in your hands. </Text>
                        <Text style={styles.text}>          TodoHub App is an Mobile App that is made by the student in Technological University of the Philippines, Mr. Aaron Christian
                            D. Reyes. It is a final requirement in his Mobile Application Development, submitted by his professor Ms. Wellanie Molino </Text>
                     </View>
                    
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20,
    },
    content: {
        marginLeft: 0,
        marginRight: 0,
        
    },
    text: {
        fontSize: 18,
        color: '#fff'
    },
    touch:{
        padding: 50,
        backgroundColor: '#00000070',
        marginTop: 120,
        borderRadius: 90,
    }
})
