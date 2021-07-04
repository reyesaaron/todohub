import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, StyleSheet,FlatList, TouchableWithoutFeedback, Keyboard, Alert, ImageBackground, KeyboardAvoidingView } from 'react-native';
import TodoItems from './todoItems';
import Addtodo from './addtodoItems';

export default function Home() {
    const [todos, setTodos]= useState([
        {text: 'Play Valorant', key: '1', completed: false}, 
        {text: 'Study Programming', key: '2', completed: false}, 
        {text: 'Do the House chores', key: '3', completed: true},
      ]); 
    
      const pressHandler = (key) => {
        setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.key != key);
        })
      }

      const submitHandler = (text) => {
         if (text.length > 3){
          setTodos ((prevTodos) => {
            return [
                  {text: text, key: Math.random().toString(), completed: false },
              ...prevTodos
            ]
            ;
          })

        } 
         else{
          Alert.alert('WARNING!', 'Please input more than 3 characters!', [
            {text: 'Okay', onPress: () => console.log('Alert closed!')}
          ]);
        }
      }

    return(
      
      <KeyboardAvoidingView style={styles.taskWrapper} behavior="height">
        <TouchableWithoutFeedback onPress= {() => {
            Keyboard.dismiss();
            console.log('Keyboard Dismissed'); 
          }}>
            {/* // container */}
              <View style = {styles.container}>
              <ImageBackground
            source={require('./youcan.jpg')}
            style={{flex: 1, alignSelf: 'center'}}> 
                <StatusBar style = "light"/>
                {/* header */}
                {/* contents */}
                <View style = {styles.content}>
                  {/*Task Items*/}
                  <View style = {styles.items}>
                    <FlatList
                      data = {todos}
                      renderItem={({item}) => (
                        <TodoItems item = {item} pressHandler ={pressHandler}/>
                      )}
                    />
                  </View>
                  <Addtodo submitHandler={submitHandler}/>
                </View>
                </ImageBackground> 
              </View>  
          </ TouchableWithoutFeedback>
          </KeyboardAvoidingView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    content: {
      flex: 1,
    },
    items: {
      alignItems: 'center',
      color: '#fff',
      marginBottom:110,
      flex: 1,
    },
    taskWrapper: {
      flex: 1,
      backgroundColor: 'white',
    }
  })
  