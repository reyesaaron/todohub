import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import calendarStack from './calendarStack';
import { FontAwesome5 } from '@expo/vector-icons'; 

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions:{
            title: 'TodoHub',
        }
       
    },
    Calendar: {
        screen: calendarStack,
    },
    About: {
        screen: AboutStack,
        navigationOptions:{
            title: 'About TodoHub',
        }
    }
});

export default createAppContainer(RootDrawerNavigator);