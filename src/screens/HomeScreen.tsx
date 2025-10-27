import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import DestinationCard from '../components/DestinationCard';
import destinations from '../data/Destinations';
// --- Impor ikon dari CLI ---
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header (Ikon hati ukurannya disesuaikan) */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingSmall}>Hi,</Text>
            <Text style={styles.greetingLarge}>Haikal</Text>
          </View>
          <TouchableOpacity style={styles.profileBtn}>
            <Ionicons name="heart-outline" size={26} color="#1E1E1E" /> {/* Ukuran ikon hati */}
            <View style={styles.profileDot} />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <TouchableOpacity style={styles.banner}>
          <Text style={styles.bannerTitle}>Plan Your{'\n'}Summer!</Text>
          <View style={styles.bannerIcon}>
            <Ionicons name="arrow-forward" size={20} color="#FF7754" />
          </View>
        </TouchableOpacity>

        {/* --- PERUBAHAN SEARCH BAR --- */}
        <View style={styles.searchContainer}>
          {/* Wrapper untuk Input & Ikon Search */}
          <View style={styles.searchInputWrapper}>
            <Ionicons name="search" size={24} color="#6B7C8F" />
            <TextInput
              placeholder="Search destination..."
              placeholderTextColor="#6B7C8F"
              style={styles.searchInput}
            />
          </View>
          {/* Tombol Filter Terpisah */}
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={22} color="#FFFFFF" /> {/* Ganti ikon jika perlu */}
          </TouchableOpacity>
        </View>
        {/* --- AKHIR PERUBAHAN --- */}

        {/* Popular Destination Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* List Kartu Vertikal */}
        <View style={styles.cardListContainer}>
          {destinations.slice(0, 3).map((item) => (
            <DestinationCard
              key={item.id}
              // ...props lainnya...
              image={item.image} // Pastikan image dari require()
              location={item.location}
              name={item.name}
              price={item.price}
              rating={item.rating}
              onPress={() =>
                navigation.navigate('Detail', {
                  id: item.id.toString(),
                  title: item.name,
                  country: item.location,
                  imageUrl: item.image, // Kirim hasil require()
                  rating: item.rating,
                  price: item.price,
                  description: item.description,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  greetingSmall: { color: '#6B7C8F', fontSize: 18,},
  greetingLarge: { color: '#1E1E1E', fontSize: 24, fontWeight: 'bold',},
  profileBtn: {
    position: 'relative',
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2,
  },
  profileDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#28A745', position: 'absolute', top: 6, right: 6, borderWidth: 2, borderColor: '#FFFFFF', },
  banner: { backgroundColor: '#FF7043', borderRadius: 20, padding: 24, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 141, },
  bannerTitle: { color: '#fff', fontSize: 40, fontWeight: '183', lineHeight: 34, },
  bannerIcon: { backgroundColor: '#ffffff5e', width: 48, height:109, borderRadius: 10, alignItems: 'center', justifyContent: 'center',},
  // --- STYLE BARU SEARCH BAR ---
  searchContainer: {
    flexDirection: 'row', // Sejajarkan input wrapper dan tombol filter
    alignItems: 'center',
    marginTop: 20,
    gap: 10, // Jarak antara input wrapper dan tombol filter
  },
  searchInputWrapper: {
    flex: 1, // Ambil sisa ruang
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAE8D3', // Background putih untuk input
    borderRadius: 30, // Radius sesuai Figma
    paddingHorizontal: 12,
    paddingVertical: 8, // Sesuaikan padding vertikal
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    color: '#1E1E1E',
  },
  filterBtn: {
    backgroundColor: '#131E2E', // Warna biru gelap/hitam
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2,
  },
  // --- AKHIR STYLE BARU ---
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1E1E1E', },
  viewAll: { color: '#FF7754', fontWeight: '600', },
  cardListContainer: { marginTop: 10, },
});