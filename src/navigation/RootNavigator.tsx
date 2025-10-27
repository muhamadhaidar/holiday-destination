import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import DetailScreen from '../screens/DetailScreen';
import type { ImageSourcePropType } from 'react-native';

// --- (1) TAMBAHKAN IMPORT BUAT LOGIN SCREEN ---
import LoginScreen from '../screens/LoginScreen'; // Pastiin path ini bener

export type RootStackParamList = {
  // --- (2) TAMBAHKAN 'Login' DI SINI ---
  Login: undefined;
  MainTabs: undefined;
  Detail: {
    id: string;
    title: string;
    country: string;
    imageUrl: ImageSourcePropType;
    rating: number;
    price: number;
    description?: string;
    coordinates?: { lat: number; lng: number };
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    // --- (3) TAMBAHKAN 'initialRouteName' BIAR 'Login' JADI YANG PERTAMA ---
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      
      {/* --- (4) DAFTARIN 'LoginScreen' DI SINI --- */}
      <Stack.Screen name="Login" component={LoginScreen} />
      
      {/* Ini screen lo yang lama */}
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}