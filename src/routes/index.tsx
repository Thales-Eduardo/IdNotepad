import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { Create } from '../pages/Create';
import { Home } from '../pages/Home';
import { Check } from '../pages/Check';
import { Immediate } from '../pages/Immediate';
import { Urgent } from '../pages/Urgent';

const Tab = createBottomTabNavigator();

export const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f8f8f8',
        tabBarInactiveTintColor: '#f8f8f8',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 4,
          backgroundColor: '#37353F',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Immediate"
        component={Immediate}
        options={{
          tabBarLabel: 'Immediate',
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? 'rocket' : 'rocket-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name={focused ? 'pluscircle' : 'pluscircleo'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Urgent"
        component={Urgent}
        options={{
          tabBarLabel: 'Urgent',
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'bell-ring' : 'bell-ring-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Check"
        component={Check}
        options={{
          tabBarLabel: 'Check',
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name={focused ? 'checkcircle' : 'checkcircleo'}
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
