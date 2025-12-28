import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ name, role, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
    // Shadow ayarları [cite: 80]
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Daire olması için [cite: 74]
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold', // [cite: 76]
  },
  role: {
    fontSize: 16,
    color: 'gray', // [cite: 77]
  },
});

export default ProfileCard;