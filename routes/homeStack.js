import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home';
import FrontPage from '../components/FrontPage';
import Header from '../shared/header';
import React from 'react';

const screens = {
    FrontPage: {
        screen: FrontPage,
    },
     Home: {
        screen: Home,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {   
        headerStyle: {
            backgroundColor: '#000',
            height:90,
        },
        headerLeft: ()=> null, 
    }
});

export default HomeStack;