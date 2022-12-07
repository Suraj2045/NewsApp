import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './NavigationScreen/HomeScreen';
import ToolsScreen from './NavigationScreen/ToolsScreen';
import AmazonScreen from './NavigationScreen/AmazonScreen';

const homeName = 'Home';
const toolsName = 'Tools';
const amazonName = 'Amazon';
console.log('Tools', ToolsScreen);

const Tab = createBottomTabNavigator();
export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === toolsName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === amazonName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    avtiveTintColor: 'tomato',
                    inactiveTinColor: 'grey',
                    labalStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}
            >

                <Tab.Screen name={homeName} componemt={HomeScreen} />
                <Tab.Screen name={toolsName} componemt={ToolsScreen} />
                <Tab.Screen name={amazonName} componemt={AmazonScreen} />

            </Tab.Navigator>
        </NavigationContainer>

    )
}
