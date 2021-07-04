import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Agenda} from 'react-native-calendars';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

export default function Calendar() {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < 1; j++) {
            items[strTime].push({
              name: 'Todo List for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  const renderItem = (item) => {
    return(
      <TouchableOpacity >
            <View>
              <Text style = {styles.item}>{item.name}</Text>
            </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style = {{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2021-06-11'} 
        renderItem={renderItem}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
});