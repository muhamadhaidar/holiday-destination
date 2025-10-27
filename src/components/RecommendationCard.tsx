import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface RecommendationCardProps {
  title: string;
  desc: string;
  rating: number;
  price: string;
  image: ImageSourcePropType;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  desc,
  rating,
  price,
  image,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color="#FFFFFF" /> {/* Warna ikon putih */}
            <Text style={styles.desc} numberOfLines={2}>{desc}</Text>
          </View>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#FFD700" /> {/* Warna bintang kuning */}
            <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecommendationCard;

// Style dari GitHub lamamu (biru gelap)
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#131E2E', // <<< BACKGROUND BIRU GELAP
    borderRadius: 23, // <<< RADIUS BESAR
    elevation: 5,
    marginTop: 20,
    padding: 8, // <<< PADDING KECIL
  },
  imageWrapper: {
    width: 120, // <<< UKURAN GAMBAR
    height: 120,
    borderRadius: 18, // <<< RADIUS GAMBAR
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF', // <<< WARNA PUTIH
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
  },
  desc: {
    fontSize: 13,
    color: '#FFFFFF', // <<< WARNA PUTIH
    flex: 1,
  },
  bottomContent: {
    marginTop: 10,
    flexDirection: 'row', // <<< SEJAJAR KEMBALI
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    fontSize: 15,
    color: '#FFFFFF', // <<< WARNA PUTIH
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF', // <<< WARNA PUTIH
    // marginTop: 4, // Hapus margin top karena sudah sejajar
  },
});