import { StyleSheet, Text, View, ScrollView } from 'react-native'; // [cite: 100]
import { SafeAreaView } from 'react-native-safe-area-context'; // [cite: 31, 38]
import ProfileCard from './components/ProfileCard'; // [cite: 92]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Kaydırılabilir liste yapısı [cite: 101] */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>My Profile App</Text>
        
        {/* Üç farklı profil örneği [cite: 93, 94] */}
        <ProfileCard 
          name="Ada Lovelace" 
          role="Mathematician" 
          imageSource={require('./assets/ada.png')} 
        />
        
        <ProfileCard 
          name="Grace Hopper" 
          role="Computer Scientist" 
          imageSource={require('./assets/grace.png')} 
        />
        
        <ProfileCard 
          name="Hedy Lamarr" 
          role="Inventor" 
          imageSource={require('./assets/hedy.png')} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // [cite: 49]
    backgroundColor: '#f0f2f5', // [cite: 50]
  },
  scrollContent: {
    padding: 20, // [cite: 51]
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});