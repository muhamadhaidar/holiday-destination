const Destinations = [
  {
    id: 1,
    name: 'Labuan Bajo',
    location: 'Indonesia',
    // --- PERUBAHAN DATA SESUAI FIGMA ---
    price: 4000,
    rating: 5.0,
    // --- PERUBAHAN PATH GAMBAR ---
    image: require('../../assets/LabuanBajo.png'),
    description: 'From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling! Explore hidden islands, swim with manta rays, and create memories that last a lifetime',
  },
  {
    id: 2,
    name: 'Venezia',
    location: 'Italia',
    // --- PERUBAHAN DATA SESUAI FIGMA ---
    price: 1000,
    rating: 4.7,
    // --- PERUBAHAN PATH GAMBAR ---
    image: require('../../assets/Venezia.png'),
  },
  {
    id: 3,
    name: 'Amsterdam',
    // --- PERUBAHAN DATA SESUAI FIGMA ---
    location: 'Netherlands', // (ejaan diperbaiki)
    price: 1100,
    rating: 4.5,
    // --- PERUBAHAN PATH GAMBAR ---
    image: require('../../assets/Amsterdam.png'),
  },
];

export default Destinations;