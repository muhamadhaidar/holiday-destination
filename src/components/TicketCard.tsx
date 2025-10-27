import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Pastikan path ke icon-icon ini benar sesuai struktur folder kamu
import planeIcon from '../../assets/icon/plane.png'; 
import planeIcon2 from '../../assets/icon/plane2.png'; 

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
        
        {/* (1) Wrapper Teks */}
        <View style={styles.textWrapper}>
          <Text style={styles.sidebarText}>AIRLINES</Text>
        </View>

        {/* (2) Ikon Pesawat */}
        <View style={styles.airlineIcon}>
          <Image source={planeIcon2} style={styles.sidebarIcon} />
        </View>
      </View>

      <View style={styles.content}>
        {/* Info Penerbangan (Kota) */}
        <View style={styles.flightInfo}>
          <View style={styles.location}>
            <Text style={styles.code}>{ticket.fromCode}</Text>
            <Text style={styles.city}>{ticket.fromCity}</Text>
          </View>
          <Image source={planeIcon} style={styles.contentIcon} />
          <View style={[styles.location, { alignItems: 'flex-end' }]}>
            <Text style={styles.code}>{ticket.toCode}</Text>
            <Text style={styles.city}>{ticket.toCity}</Text>
          </View>
        </View>

        {/* Info Waktu (Jam & Tanggal) */}
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

        {/* Info Harga */}
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

// --- STYLES ---
const styles = StyleSheet.create({
  card: {
    // --- Ukuran Fixed ---
    width: 382,
    height: 194,
    // ---
    backgroundColor: '#ffffffff',
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
  // --- (STYLE 1: SIDEBAR) ---
  sidebar: {
    backgroundColor: '#FF7753', 
    width: 50,
    alignItems: 'center', 
    paddingVertical: 40,
  },
 
  // --- (STYLE 2: TEXT WRAPPER) ---
  textWrapper: {
    flex: 1, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    transform: [{ rotate: '-90deg' }], 
  },
 
  // --- (STYLE 3: SIDEBAR TEXT) ---
  sidebarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    width: 100, 
  },

  // --- (STYLE 4: AIRLINE ICON) ---
  airlineIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#131E2E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, 
  },
  
  // --- (STYLE KONTEN UTAMA) ---
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between', // <-- Kunci untuk nyebar 3 blok (atas, tengah, bawah)
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    gap: 0, // <-- Kunci biar teks rapat
  },
  code: {
    fontSize: 36,
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
    gap: 0, // <-- Kunci biar teks rapat
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
    // Nggak perlu style khusus
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  sidebarIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  contentIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#1E1E1E', 
  },
});