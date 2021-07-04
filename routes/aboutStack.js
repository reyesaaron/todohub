import { createStackNavigator } from 'react-navigation-stack';
import About from '../components/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About : {
        screen: About,
        headerTitle: 'About',
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },

}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#000',
            
        }
    }
});

export default AboutStack;