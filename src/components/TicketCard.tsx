import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; // (1) Impor 'Image'
// import Ionicons from 'react-native-vector-icons/Ionicons'; // (2) Hapus/Komen Ionicons

// --- (3) Impor gambar pesawat lo ---
// (Gue asumsikan path-nya ngikutin yg lama, yaitu di 'assets')
import planeIcon from '../../assets/icon/plane.png'; 
// --- Akhir Impor ---

type TicketProps = {
  ticket: {
    id: number;
    fromCode: string;
    fromCity: string;
    toCode: string;
    toCity: string;
    departureTime: string;
    departureDate: string;
    arrivalTime: string;
    arrivalDate: string;
    price: number;
  };
};

const TicketCard: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarText}>AIRLINES</Text>
        <View style={styles.airlineIcon}>
          {/* --- (4) Ganti Ionicons jadi Image --- */}
          <Image source={planeIcon} style={styles.sidebarIcon} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.flightInfo}>
          <View style={styles.location}>
            <Text style={styles.code}>{ticket.fromCode}</Text>
            <Text style={styles.city}>{ticket.fromCity}</Text>
          </View>
          {/* --- (5) Ganti Ionicons jadi Image --- */}
          <Image source={planeIcon} style={styles.contentIcon} />
          <View style={[styles.location, { alignItems: 'flex-end' }]}>
            <Text style={styles.code}>{ticket.toCode}</Text>
            <Text style={styles.city}>{ticket.toCity}</Text>
          </View>
        </View>

        <View style={styles.timeInfo}>
          <View style={styles.timeDetail}>
            <Text style={styles.time}>{ticket.departureTime}</Text>
            <Text style={styles.date}>{ticket.departureDate}</Text>
          </View>
          <View style={[styles.timeDetail, { alignItems: 'flex-end' }]}>
            <Text style={styles.time}>{ticket.arrivalTime}</Text>
            <Text style={styles.date}>{ticket.arrivalDate}</Text>
          </View>
        </View>

        <View style={styles.priceInfo}>
          <Text style={styles.price}>
            ${ticket.price.toLocaleString('en-US')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  sidebar: {
    backgroundColor: '#FF7754', // Oranye
    width: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  sidebarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    transform: [{ rotate: '-90deg' }],
    width: 70,
    textAlign: 'center',
  },
  airlineIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#131E2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    gap: 2,
  },
  code: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  city: {
    fontSize: 12,
    color: '#6B7C8F',
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeDetail: {
    gap: 2,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  date: {
    fontSize: 12,
    color: '#6B7C8F',
  },
  priceInfo: {
    // Gak perlu flex, cuma nampilin teks
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },

  // --- (6) Tambahin style buat gambar baru ---
  sidebarIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: '#FFFFFF', 
  },
  contentIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});