import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#B8B6EE',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Immediate" component={Immediate} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Urgent" component={Urgent} />
      <Tab.Screen name="Check" component={Check} />
    </Tab.Navigator>
  );
};
