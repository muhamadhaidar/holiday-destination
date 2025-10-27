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
// --- IMPORT BARU UNTUK GRADASI ---
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  id: number;
  name: string;
  location: string;
  image: ImageSourcePropType; // Tipe untuk 'require()'
  rating: number;
  price: number;
  onPress: () => void;
  style?: object; // Tambahan: Biar bisa override style (misal: height, margin)
};

export default function DestinationCard({
  name,
  location,
  image,
  rating,
  price,
  onPress,
  style, // Tambahan
}: Props) {
  return (
    // --- PERUBAHAN: 'style' dari props digabung ---
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.9}>
      <ImageBackground
        source={image} 
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        {/* --- PERUBAHAN: HAPUS 'overlay' View --- */}
        {/* <View style={StyleSheet.absoluteFillObject} style={styles.overlay} /> */}

        {/* --- TAMBAHAN: Gradasi Bawah Sesuai Figma --- */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']} // Dari transparan ke hitam
          style={styles.gradient}
        />

        {/* --- KANAN ATAS: HATI --- */}
        <View style={styles.heartIcon}>
          {/* --- PERUBAHAN: 'heart' (filled) --- */}
          <Ionicons name="heart" size={18} color="#FFFFFF" />
        </View>

        {/* --- Kontainer Bawah (Kode lo udah bener) --- */}
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
              {/* --- PERUBAHAN: Bintang 'star' (filled) dan warna Putih --- */}
              <Ionicons name="star" size={14} color="#FFFFFF" />
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
            <Text style={styles.priceText}>
              ${price.toLocaleString()}
              <Text style={styles.pricePer}>/pax</Text>
            </Text>
          </View>
        </View>

      </ImageBackground>
    </TouchableOpacity>
  );
}

// --- STYLESHEET (SUDAH DISESUAIKAN) ---
const styles = StyleSheet.create({
  card: {
    // Ini style dari 'image_f23baf.jpg' (list)
    // Kartu 'Labuan Bajo' lebih tinggi, jadi 'height' harusnya dinamis
    // Kita hapus fixed height, dan biarkan gambar yg menentukan
    height: 340, // <-- Tinggi 'Labuan Bajo' card. Hapus/ubah ini kalo mau dinamis
    marginHorizontal: 20,
    marginBottom: 20,
    // ---
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    backgroundColor: '#000', // Untuk fallback/shadow
  },
  imageBackground: {
    flex: 1,
    padding: 20, // <-- Ubah padding jadi 20 (biar pas kayak figma)
    justifyContent: 'flex-end', // Dorong konten ke bawah
  },
  imageStyle: {
    borderRadius: 24,
  },
  // --- PERUBAHAN: 'overlay' dihapus, ganti 'gradient' ---
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%', // Gradasi menutupi 60% dari bawah
    borderRadius: 24, // Ikutin lengkungan card
  },
  heartIcon: {
    // --- PERUBAHAN: Style Hati ---
    position: 'absolute',
    top: 20,  // <-- Jarak dari atas (Figma)
    right: 20, // <-- Jarak dari kanan (Figma)
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Background hitam transparan
    width: 36,  // <-- Lingkaran
    height: 36, // <-- Lingkaran
    borderRadius: 18, // <-- Setengah width/height
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', 
    // zIndex: 1, // Pastikan di atas gradasi (udah otomatis krn urutan render)
  },
  bottomLeftContainer: {
    flex: 1, 
    marginRight: 8,
    gap: 6, // <-- Jarak antara 'location' dan 'title'
  },
  bottomRightContainer: {
    alignItems: 'flex-end', 
    gap: 6, // <-- Jarak antara 'rating' dan 'price'
  },
  ratingContainer: {
    // --- PERUBAHAN: Hapus background ---
    flexDirection: 'row',
    alignItems: 'center',
    // Hapus background, padding, borderRadius
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
    fontSize: 18, // <-- PERUBAHAN: Sesuai Figma
    // marginTop: 4, // Hapus, kita pakai 'gap' di parent
  },
  pricePer: {
    fontSize: 14, // <-- PERUBAHAN: Sesuai Figma
    fontWeight: 'normal',
    color: '#E0E0E0', // Sedikit redup
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
    // marginTop: 6, // Hapus, kita pakai 'gap' di parent
  },
});