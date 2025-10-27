import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

// Komponen
import DestinationHeader from '../components/DestinationHeader';
import ReviewCard from '../components/ReviewCard';
import RecommendationCard from '../components/RecommendationCard';
import PriceSection from '../components/PriceSection';

// --- Data dummy rekomendasi (disesuaikan path-nya) ---
const recommendations = [
  {
    id: 1,
    title: 'Phinisi Luxury Private Trip',
    desc: 'Complimentary pick-up from Labuan Bajo Airport or surrounding hotels',
    price: '$3,000 / night',
    rating: 4.8,
    image: require('../../assets/LabuanBajo.png'),
  },
  {
    id: 2,
    title: 'Katamaran Hotel & Resort Komodo',
    desc: 'Labuan Bajo, West Manggarai, East Nusa Tenggara',
    price: '$300 / night',
    rating: 4.9,
    image: require('../../assets/Venezia.png'),
  },
  {
    id: 3,
    title: 'AYANA Komodo Waecicu Beach',
    desc: 'Labuan Bajo, West Manggarai, East Nusa Tenggara',
    price: '$400 / night',
    rating: 4.9,
    image: require('../../assets/Amsterdam.png'),
  },
];

// --- Data dummy review (menyesuaikan desain Figma) ---
const reviews = [
  {
    id: 1,
    user: 'By Rifqi starboy',
    review:
      'Wow amazing yahh, best experience in my life very very worth it i like it!\nVery good very well',
    avatar: require('../../assets/Avatar.png'),
  },
  {
    id: 2,
    user: 'By Rifqi starboy',
    // --- PERUBAHAN 1: Tambahin data avatar di sini ---
    avatar: require('../../assets/Avatar.png'), // Ganti ini pake avatar kedua lo
  },
];

export default function DetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [quantity, setQuantity] = useState(1);

  const { title, country, imageUrl, rating, price, description } = route.params;
  const pricePerTrip = price;

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <DestinationHeader
          image={imageUrl}
          location={title}
          rating={rating}
          description={description || ''}
          onBack={() => navigation.goBack()}
        />

        {/* Konten */}
        <View style={styles.content}>
          {/* Baris Negara & Bendera */}
          <View style={styles.countryRow}>
            <View style={styles.flagContainer}>
              <View style={styles.flagRed} />
              <View style={styles.flagWhite} />
            </View>
            <Text style={styles.countryText}>{country}</Text>
          </View>

          {/* Judul */}
          <Text style={styles.title}>Discover the Beauty of {title}</Text>

          {/* Review utama */}
          <ReviewCard
            user={reviews[0].user}
            review={reviews[0].review}
            avatar={reviews[0].avatar}
          />

          {/* Review kedua (faded) */}
          <View style={styles.fadedReviewFrame}>
            {/* --- PERUBAHAN 2: Ganti <View> jadi <Image> --- */}
            {reviews[1].avatar && (
              <Image
                source={reviews[1].avatar}
                style={styles.fadedAvatarImage} // Pake style baru
              />
            )}
            <Text style={styles.fadedName}>{reviews[1].user}</Text>
          </View>

          {/* Tombol View All */}
          <View style={styles.viewAllContainer}>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* Rekomendasi */}
          {/* --- PERUBAHAN 1: HILANGIN "LABUAN" DARI {title} --- */}
          <Text style={styles.sectionTitle}>
            Recommendation in {title.split(' ').pop()}
          </Text>
          {/* --- AKHIR PERUBAHAN 1 --- */}


          {recommendations.map((item) => (
            <RecommendationCard
              key={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bagian harga bawah */}
      <View style={styles.priceSectionContainer}>
        <PriceSection
          quantity={quantity}
          price={pricePerTrip}
          onAdd={() => setQuantity(quantity + 1)}
          onMinus={() => quantity > 1 && setQuantity(quantity - 1)}
        />
      </View>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  scrollContent: {
    paddingBottom: 160,
  },
  content: {
    backgroundColor: '#FAF9F6',
    marginTop: -30,
    padding: 20,
    paddingTop: 30,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  flagContainer: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#ccc',
    overflow: 'hidden',
    borderRadius: 10,
  },
  flagRed: { flex: 1, backgroundColor: '#FF0000' },
  flagWhite: { flex: 1, backgroundColor: '#FFFFFF' },
  countryText: { fontSize: 14, color: '#6B7C8F' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1E1E1E',
  },
  fadedReviewFrame: {
    backgroundColor: 'rgba(229, 228, 222, 0.5)',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fadedAvatarImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#A5D6A7',
  },
  fadedName: {
    fontWeight: '600',
    fontSize: 13,
    color: '#333',
  },
  viewAllContainer: {
    width: '100%',
    alignItems: 'center',
    // --- PERUBAHAN 2: BIKIN GAP LEBIH DEKET ---
    marginTop: 5,
    marginBottom: 10,
    // --- AKHIR PERUBAHAN 2 ---
  },
  viewAllButton: {
    backgroundColor: '#E5E4DE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 9999,
  },
  viewAllText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    color: '#1E1E1E',
  },
  priceSectionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});