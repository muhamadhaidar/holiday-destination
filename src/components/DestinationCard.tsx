import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
// --- PERUBAHAN CLI MURNI ---
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  id: number;
  name: string;
  location: string;
  image: ImageSourcePropType; // Tipe untuk 'require()'
  rating: number;
  price: number;
  onPress: () => void;
};

export default function DestinationCard({
  name,
  location,
  image,
  rating,
  price,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <ImageBackground
        source={image} // Langsung pakai 'image'
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={StyleSheet.absoluteFillObject} style={styles.overlay} />

        {/* --- KANAN ATAS: HANYA HATI --- */}
        <View style={styles.heartIcon}>
          <Ionicons name="heart-outline" size={18} color="#FFFFFF" />
        </View>

        {/* --- PERUBAHAN UTAMA: Kontainer Bawah --- */}
        <View style={styles.bottomContainer}>
          {/* Info Kiri Bawah */}
          <View style={styles.bottomLeftContainer}>
            <View style={styles.locationContainer}>
              <Ionicons name="location-sharp" size={14} color="#FFFFFF" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
            <Text style={styles.titleText}>{name}</Text>
          </View>

          {/* Info Kanan Bawah (Rating & Harga) */}
          <View style={styles.bottomRightContainer}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
            <Text style={styles.priceText}>
              ${price.toLocaleString()}
              {/* --- PERUBAHAN TEKS: Sesuai Figma --- */}
              <Text style={styles.pricePer}>/pax</Text>
            </Text>
          </View>
        </View>
        {/* --- AKHIR PERUBAHAN --- */}
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 225, // Sesuai Figma
    width: '100%',
    marginVertical: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  imageBackground: {
    flex: 1,
    padding: 16,
    // --- PERUBAHAN: Dorong semua konten ke bawah ---
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 24,
  },
  heartIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 8,
    borderRadius: 20,
  },
  // --- STYLE BARU ---
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', // Ratakan bagian bawah
  },
  bottomLeftContainer: {
    flex: 1, // Agar bisa 'shrink' jika teks kanan panjang
    marginRight: 8,
  },
  bottomRightContainer: {
    alignItems: 'flex-end', // Ratakan ke kanan
  },
  // --- AKHIR STYLE BARU ---
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
  },
  priceText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 4,
  },
  pricePer: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 4,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 6,
  },
});