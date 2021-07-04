import { createStackNavigator } from 'react-navigation-stack';
import Calendar from '../components/Calendar';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Calendar : {
        screen: Calendar,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },

}
const calendarStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
       
        headerStyle: {
           backgroundColor: '#000f',
        }
    }
});

export default calendarStack;