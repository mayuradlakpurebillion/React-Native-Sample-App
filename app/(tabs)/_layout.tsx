import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
// import { Ionicons } from '@expo/vector-icons';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          android: {
            // tabBarStyle: {
              backgroundColor: '#d9d9d9', // Set Background Color
              borderTopWidth: 0,          // Optional: Remove top border
              height: 60,                 // Set a consistent height
            // },
          },
          ios: {
            position: 'absolute', // Use transparent background for iOS blur effect
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =>  <MaterialCommunityIcons name="home-outline" size={28} color={"#9a9a9a"} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="book-open-outline" size={28} color="#8a8a8a" />,
        }}
      />
      {/* <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="checklist-outline" size={28} color="#9a9a9a" />,
        }}
      /> */}
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Attendance',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clipboard-check-outline" size={28} color="#9a9a9a" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color }) =>   <Ionicons name="document-text" size={30} color="#9a9a9a" />,
        }}
      />
    </Tabs>
  );
}
