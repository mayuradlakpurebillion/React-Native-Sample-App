import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import ReportsScreen from './screens/ReportsScreen';

// Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Library') {
              iconName = 'book-outline';
            } else if (route.name === 'Attendance') {
              iconName = 'clipboard-outline';
            } else if (route.name === 'Reports') {
              iconName = 'document-text-outline';
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: '#6A3EA1', // Active tab color
          tabBarInactiveTintColor: '#7A7A7A', // Inactive tab color
          tabBarStyle: {
            backgroundColor: '#EDEDED', // Light gray background
            height: 60,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 6,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
