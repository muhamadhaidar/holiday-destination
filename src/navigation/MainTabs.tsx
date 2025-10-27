import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TicketScreen from '../screens/TicketScreen';

// --- (1) Impor SEMUA 6 gambar (2 untuk setiap tab) ---
// (Pastikan path dan nama file ini sudah benar)
import homeActive from '../../assets/icon/HomeButton A.png';     // Gambar 'Home' saat Aktif
import homeInactive from '../../assets/icon/HomeButton DA.png';  // Gambar 'Home' saat Tidak Aktif
import ticketActive from '../../assets/icon/TicketButton A.png';   // Gambar 'Ticket' saat Aktif
import ticketInactive from '../../assets/icon/TicketButton DA.png';// Gambar 'Ticket' saat Tidak Aktif
import profileActive from '../../assets/icon/ProfilButton A.png';  // Gambar 'Profile' saat Aktif
import profileInactive from '../../assets/icon/ProfilButton DA.png';// Gambar 'Profile' saat Tidak Aktif
// --- Akhir impor gambar ---

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#131E2E',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarIcon: ({ focused }) => {
          let iconSource;
          
          let bgColor = focused ? '#01428da9' : 'transparent'; // Background pil tetap sama

          // --- (3) Logika baru: Pilih gambar berdasarkan status 'focused' ---
          if (route.name === 'Home') {
            iconSource = focused ? homeActive : homeInactive;
          } else if (route.name === 'Ticket') {
            iconSource = focused ? ticketActive : ticketInactive;
          } else if (route.name === 'Profile') {
            iconSource = focused ? profileActive : profileInactive;
          }
          // --- Akhir logika baru ---

          // View untuk background "pil"
          return (
            <View style={[styles.tabIconContainer, { backgroundColor: bgColor }]}>
              {/* --- (4) Hapus 'tintColor' dari style --- */}
              <Image
                source={iconSource}
                style={styles.iconImage} // Style polos, tanpa tint
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain', // Pastikan gambar pas
  }
});

