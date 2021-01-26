import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {ROUTES} from './src/utils/constants';

import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Search from './src/screens/Search';

const Tab = createBottomTabNavigator();

// creating stack navigatin for different screens.
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings'}}
      />
    </SettingsStack.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={ROUTES.HOME}
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name={ROUTES.SEARCH}
            component={Search}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="search" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name={ROUTES.SETTINGS}
            component={SettingsStackScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="settings" size={size} color={color} />
              ),
              title: 'Settings',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
