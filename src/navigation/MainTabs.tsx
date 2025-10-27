import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TicketScreen from '../screens/TicketScreen';

// --- (1) Impor SEMUA 6 gambar (2 untuk setiap tab) ---
// (Pastikan path dan nama file ini sudah benar)
import homeActive from '../../assets/icon/HomeButton A.png';     // Gambar 'Home' saat Aktif
import homeInactive from '../../assets/icon/HomeButton DA.png';   // Gambar 'Home' saat Tidak Aktif
import ticketActive from '../../assets/icon/TicketButton A.png';   // Gambar 'Ticket' saat Aktif
import ticketInactive from '../../assets/icon/TicketButton DA.png';// Gambar 'Ticket' saat Tidak Aktif
import profileActive from '../../assets/icon/ProfilButton A.png';   // Gambar 'Profile' saat Aktif
import profileInactive from '../../assets/icon/ProfilButton DA.png';// Gambar 'Profile' saat Tidak Aktif
// --- Akhir impor gambar ---

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        // --- (PERUBAHAN DI SINI) ---
        // 1. tabBarItemStyle HAPUS (kita akan atur posisi langsung di tabBarIcon)
        // 2. tabBarStyle: Hapus semua padding vertikal
        tabBarStyle: {
          backgroundColor: '#131E2E',
          borderTopWidth: 0,
          height: 70,
          // paddingBottom: 0, // Dihapus
          // paddingTop: 0,    // Dihapus
          // Atau bisa juga tidak diisi, defaultnya 0
        },
        // --- (AKHIR PERUBAHAN TABSyle) ---
        
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let bgColor = focused ? '#01428da9' : 'transparent'; // Background pil

          if (route.name === 'Home') {
            iconSource = focused ? homeActive : homeInactive;
          } else if (route.name === 'Ticket') {
            iconSource = focused ? ticketActive : ticketInactive;
          } else if (route.name === 'Profile') {
            iconSource = focused ? profileActive : profileInactive;
          }

          // --- (PERUBAHAN DI SINI: Styling View container ikon) ---
          return (
            <View style={[
              styles.tabIconContainer, 
              { 
                backgroundColor: bgColor,
                // Ini penting: buat container ikon selalu di tengah vertikal di dalam tab bar
                position: 'absolute', // Menempatkan secara absolut
                top: (70 - 48) / 2,   // (Tinggi Nav Bar - Tinggi Pil) / 2 = (70 - 48) / 2 = 11px
                                      // Tinggi pil = 40 (ikon) + 8 (pV) + 8 (pV) = 56px, jadi 70-56 = 14/2 = 7px
                                      // ATAU, jika kita gunakan tinggi pil 48px dari sebelumnya: (70-48)/2 = 11px
                                      // Mari kita coba langsung 7px untuk pil (56px) atau 11px untuk pil (48px)
                                      // Karena di styles.tabIconContainer ada paddingVertical: 8, maka tinggi pil adalah 40 + 8 + 8 = 56.
                                      // Jadi top: (70 - 56) / 2 = 7px
                top: 7, 
              }
            ]}>
              <Image
                source={iconSource}
                style={styles.iconImage}
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

// --- STYLES (Basic code kamu) ---
const styles = StyleSheet.create({
  tabIconContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8, // <-- Ini tetap ada, jadi tinggi pil = 56px
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // Kita tidak pakai height fixed di sini karena paddingVertical sudah mengatur tinggi
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  }
});