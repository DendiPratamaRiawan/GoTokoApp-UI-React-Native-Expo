// ============================================
// TUGAS PROJECT : PERANGKAT MOBILE I
// Nama          : Dendi Pratama Riawan
// Github        : https://github.com/DendiPratamaRiawan
// Linkedin      : www.linkedin.com/in/dendipratamar
// UNIVERSITAS FALETEHAN
// ============================================

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: ({color}) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='explore' options={{
        title: 'Explore',
        tabBarIcon: ({color}) => (
          <Ionicons name='search-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='notifications' options={{
        title: 'Notification',
        tabBarIcon: ({color}) => (
          <Ionicons name='notifications-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='cart' options={{
        title: 'Cart',
        tabBarBadge: 3,
        tabBarIcon: ({color}) => (
          <Ionicons name='cart-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        tabBarIcon: ({color}) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }} />
    </Tabs>
  );
}
