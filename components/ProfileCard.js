import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'; // TouchableOpacity ve Alert eklendi [cite: 112]

const ProfileCard = ({ name, role, imageSource }) => {
  // Kart tıklandığında çalışacak fonksiyon [cite: 114]
  const handlePress = () => {
    Alert.alert("Profile Tapped", `You tapped on ${name}'s profile.`); // [cite: 114]
  };

  return (
    // Tüm içeriği TouchableOpacity ile sarıyoruz [cite: 113, 115]
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // [cite: 71]
    padding: 20, // [cite: 71]
    borderRadius: 15, // [cite: 71]
    alignItems: 'center', // [cite: 71]
    marginVertical: 10, // [cite: 72]
    // Platforma özel gölge ayarları [cite: 79, 80]
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android için [cite: 80]
  },
  avatar: {
    width: 100, // [cite: 74]
    height: 100, // [cite: 74]
    borderRadius: 50, // Daire yapmak için genişliğin yarısı [cite: 74]
    marginBottom: 10, // [cite: 75]
  },
  name: {
    fontSize: 20, // [cite: 76]
    fontWeight: 'bold', // [cite: 76]
  },
  role: {
    fontSize: 14, // [cite: 77]
    color: 'gray', // [cite: 77]
  },
});

export default ProfileCard;