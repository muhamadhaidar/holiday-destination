import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface DestinationHeaderProps {
  image: ImageSourcePropType;
  location: string; // Title
  rating: number;
  description: string; // TAMBAHKAN DESKRIPSI
  onBack: () => void;
  temperature?: string; // Buat opsional, default 24°C
}

const DestinationHeader: React.FC<DestinationHeaderProps> = ({
  image,
  location,
  rating,
  description, // Terima deskripsi
  onBack,
  temperature = '24°C', // Default temperature
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}>
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={onBack} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Widget Cuaca (selalu tampilkan jika ada temperature) */}
            {temperature && (
              <View style={styles.weatherWidget}>
                <Ionicons name="sunny-outline" size={20} color="white" />
                <Text style={styles.weatherText}>{temperature}</Text>
              </View>
            )}
          </View>

          <View style={styles.bottomContent}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            </View>

            <Text style={styles.title}>{location}</Text>

            {/* --- TAMBAHKAN DESKRIPSI DI SINI --- */}
            <Text style={styles.subtitle} numberOfLines={3}>
              {description}
            </Text>
            {/* --- AKHIR PENAMBAHAN --- */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DestinationHeader;

// Styles disesuaikan dengan image_c9a915.png
const styles = StyleSheet.create({
  container: {
    height: 500, 
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10, // Padding lebih besar
    borderRadius: 20,
  },
  weatherWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Background lebih gelap
    borderRadius: 20, // Bulat
    gap: 8,
    // --- PERUBAHAN 1 ---
    // Hapus paddingVertical & paddingHorizontal
    width: 126, // Ukuran fixed
    height: 48, // Ukuran fixed
    justifyContent: 'center', // Pusatkan konten di dalam ukuran fixed
    // --- AKHIR PERUBAHAN 1 ---
  },
  weatherText: {
    color: '#fff',
    fontSize: 16, // Font cuaca
    fontWeight: '600',
  },
  bottomContent: {
    paddingHorizontal: 20,
    paddingBottom: 50, // Jarak dari bawah
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 10,
    // --- PERUBAHAN 2 ---
    // Hapus paddingHorizontal & paddingVertical
    width: 67, // Ukuran fixed
    height: 28, // Ukuran fixed
    justifyContent: 'center', // Pusatkan konten
    gap: 5, // Ganti marginLeft di teks dengan gap di container
    // --- AKHIR PERUBAHAN 2 ---
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    // marginLeft: 5, // Dihapus, diganti 'gap' di container
  },
  title: {
    color: '#fff',
    // --- PERUBAHAN 3 ---
    fontSize: 36, // Font size diperbesar
    // --- AKHIR PERUBAHAN 3 ---
    fontWeight: '382',
    marginBottom: 8, // Jarak ke subtitle
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    // Style untuk deskripsi di header
    color: 'rgba(255,255,255,0.95)', // Putih terang
    fontSize: 14,
    lineHeight: 15,
    width: '100%', // Lebar subtitle
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});