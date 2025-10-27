import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TicketCard from '../components/TicketCard'; 

// --- (PERUBAHAN 1: Datanya gue tambahin jadi 4) ---
const ticketData = [
  {
    id: 1,
    fromCode: 'NL',
    fromCity: 'Rotterdam',
    toCode: 'IDN',
    toCity: 'Labuan Bajo',
    departureTime: '5:30PM',
    departureDate: 'Mon, 23 Jun',
    arrivalTime: '3:30AM',
    arrivalDate: 'Tue, 24 Jun',
    price: 1700,
  },
  {
    id: 2,
    fromCode: 'NL',
    fromCity: 'Rotterdam',
    toCode: 'IDN',
    toCity: 'Labuan Bajo',
    departureTime: '5:30PM',
    departureDate: 'Mon, 23 Jun',
    arrivalTime: '3:30AM',
    arrivalDate: 'Tue, 24 Jun',
    price: 1700,
  },
  {
    id: 3,
    fromCode: 'NL',
    fromCity: 'Rotterdam',
    toCode: 'IDN',
    toCity: 'Labuan Bajo',
    departureTime: '5:30PM',
    departureDate: 'Mon, 23 Jun',
    arrivalTime: '3:30AM',
    arrivalDate: 'Tue, 24 Jun',
    price: 1700,
  },
  // --- INI TAMBAHAN KARTU KE-4 ---
  {
    id: 4,
    fromCode: 'NL',
    fromCity: 'Rotterdam',
    toCode: 'IDN',
    toCity: 'Labuan Bajo',
    departureTime: '5:30PM',
    departureDate: 'Mon, 23 Jun',
    arrivalTime: '3:30AM',
    arrivalDate: 'Tue, 24 Jun',
    price: 1700,
  },
];
// --- AKHIR PERUBAHAN ---

// Data for filter pills
const filterPills = ['Hotel', 'Aircraft', 'Villa', 'Attraction'];

// Data untuk kalender (mockup)
const calendarDays = [
  { day: 'S', date: '22' },
  { day: 'M', date: '23', active: true },
  { day: 'T', date: '24' },
  { day: 'W', date: '25' },
  { day: 'T', date: '26' },
  { day: 'F', date: '27' },
  { day: 'S', date: '28' },
];

export default function TicketScreen() {
  const [activeFilter, setActiveFilter] = useState('Aircraft');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* --- Header --- */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#1E1E1E" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tickets</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="#1E1E1E" />
          </TouchableOpacity>
        </View>

        {/* --- Location Dropdown --- */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>Current locations</Text>
          <TouchableOpacity style={styles.locationButton}>
            <Text style={styles.locationValue}>Netherlands</Text>
            <Ionicons name="chevron-down" size={20} color="#1E1E1E" />
          </TouchableOpacity>
        </View>

        {/* --- Filter Pills --- */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsContainer}>
          {filterPills.map((pill) => (
            <TouchableOpacity
              key={pill}
              style={[
                styles.pill,
                activeFilter === pill
                  ? styles.pillActive
                  : styles.pillInactive,
              ]}
              onPress={() => setActiveFilter(pill)}>
              <Text
                style={
                  activeFilter === pill
                    ? styles.pillActiveText
                    : styles.pillInactiveText
                }>
                {pill}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* --- Calendar Mockup --- */}
        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarTitle}>June, 2025</Text>
            <Ionicons name="calendar-outline" size={20} color="#6B7C8F" />
          </View>
          <View style={styles.calendarGrid}>
            {calendarDays.map((item) => (
              <View key={item.date} style={styles.dayWrapper}>
                <Text style={styles.dayLabel}>{item.day}</Text>
                <TouchableOpacity
                  style={[
                    styles.dateWrapper,
                    item.active && styles.dateActive,
                  ]}>
                  <Text
                    style={[
                      styles.dateText,
                      item.active && styles.dateTextActive,
                    ]}>
                    {item.date}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* --- Ticket Count --- */}
        <Text style={styles.ticketCount}>
          {ticketData.length} Tickets Found
        </Text>

        {/* --- Ticket List (Scrollable from Frame 220) --- */}
        <View style={styles.ticketListContainer}>
          {ticketData.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6', // Latar belakang off-white
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  locationContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  locationLabel: {
    fontSize: 14,
    color: '#6B7C8F',
    marginBottom: 4,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  pillsContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
    height: 40,
  },
  pill: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillActive: {
    backgroundColor: '#FF7754', // Oranye
  },
  pillActiveText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  pillInactive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  pillInactiveText: {
    color: '#6B7C8F',
    fontWeight: '500',
  },
  calendarContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  calendarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayWrapper: {
    alignItems: 'center',
    width: '14%', // Bagi 7 hari
  },
  dayLabel: {
    fontSize: 12,
    color: '#6B7C8F',
    marginBottom: 8,
  },
  dateWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  dateActive: {
    backgroundColor: '#FF7754',
  },
  dateTextActive: {
    color: '#FFFFFF',
  },
  ticketCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  ticketListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Padding di bawah list
  },
});