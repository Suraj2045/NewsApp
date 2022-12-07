import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './NavigationScreen/HomeScreen';
import ToolsScreen from './NavigationScreen/ToolsScreen';
import AmazonScreen from './NavigationScreen/AmazonScreen';

//Screen names
const homeName = "Home";
const toolsName = "Tools";
const amazonName = "Amazon";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown:false,
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

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 4, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
          
        <Tab.Screen name={toolsName} component={ToolsScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={amazonName} component={AmazonScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;