import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface ReviewCardProps {
  user: string;
  review: string;
  avatar?: ImageSourcePropType;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, review, avatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        {avatar && <Image source={avatar} style={styles.avatar} />}
        <Text style={styles.name}>{user}</Text>
      </View>
      <Text style={styles.text}>{review}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10, // Kurangi margin bawah agar lebih rapat
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15, // <<< PASTIKAN BULAT
    marginRight: 10,
    // --- PERUBAHAN DI SINI ---
    borderWidth: 2,
    borderColor: '#A5D6A7', // Border/Stroke hijau
    // --- AKHIR PERUBAHAN ---
  },
  name: {
    fontWeight: '600',
    fontSize: 13,
    color: '#333',
  },
  text: {
    color: '#555',
    fontSize: 12,
    lineHeight: 12,
  },
});