import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PriceSectionProps {
  quantity: number;
  price: number;
  onAdd: () => void;
  onMinus: () => void;
  style?: ViewStyle;
}

const PriceSection: React.FC<PriceSectionProps> = ({
  quantity,
  price,
  onAdd,
  onMinus,
  style,
}) => {
  const total = price * quantity;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.topRow}>
        <View style={styles.qtyContainer}>
          {/* Tombol Minus Oranye */}
          <TouchableOpacity onPress={onMinus} style={styles.qtyButtonMinus}>
            <Ionicons name="remove" size={20} color="#FFFFFF" /> {/* Ikon putih */}
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          {/* Tombol Plus Putih */}
          <TouchableOpacity onPress={onAdd} style={styles.qtyButtonAdd}>
            <Ionicons name="add" size={20} color="#131E2E" /> {/* Ikon biru gelap */}
          </TouchableOpacity>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          {/* Format harga $10.000 */}
          <Text style={styles.totalValue}>
            ${total.toLocaleString('de-DE')}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceSection;

// Style dari GitHub lamamu
const styles = StyleSheet.create({
  container: {
    // --- PERUBAHAN (Sesuai Figma) ---
    backgroundColor: '#131e2e86',
    paddingHorizontal: 20,
    paddingTop: 15, // Disesuaikan
    paddingBottom: 30, // Disesuaikan
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  // Tombol Plus (Putih)
  qtyButtonAdd: {
    backgroundColor: '#FFFFFF', // <<< PUTIH
    width: 24,
    height: 24,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Tombol Minus (Oranye)
  qtyButtonMinus: {
    backgroundColor: '#F97316', // <<< ORANYE
    width: 24,
    height: 24,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF', // <<< PUTIH
  },
  totalContainer: {
    alignItems: 'flex-end',
  },
  totalLabel: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  totalValue: {
    color: '#FFFFFF', // <<< PUTIH
    fontSize: 24,
    fontWeight: '700',
  },
  bookButton: {
    // --- PERUBAHAN (Sesuai Figma & Request) ---
    backgroundColor: '#FF7753', // Warna oranye Figma
    borderRadius: 9999, // Tetap bulat
    alignItems: 'center',
    justifyContent: 'center', // Pusatkan teks
    width: 383, // Sesuai request
    height: 44, // Sesuai request
    alignSelf: 'center', // Pastikan di tengah
    // paddingVertical: 16, // Dihapus, diganti height
    // --- AKHIR PERUBAHAN ---
  },
  bookText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});