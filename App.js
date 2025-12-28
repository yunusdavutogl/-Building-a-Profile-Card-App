import { StyleSheet, Text, View, ScrollView } from 'react-native'; // [cite: 37, 100]
import { SafeAreaView } from 'react-native-safe-area-context'; // [cite: 38]
import ProfileCard from './components/ProfileCard'; // [cite: 92]

export default function App() { // [cite: 39]
  return (
    // SafeAreaView cihazın çentiğine (notch) göre içeriği ayarlar [cite: 35, 41]
    <SafeAreaView style={styles.container}> 
      {/* ScrollView içeriğin ekranı aşması durumunda kaydırılabilmesini sağlar [cite: 100, 101] */}
      <ScrollView> 
        <View style={styles.viewContainer}> 
          {/* Uygulama başlığı [cite: 35, 43, 53] */}
          <Text style={styles.title}>My Profile App</Text> 
          
          {/* Farklı props değerleri ile render edilen üç adet ProfileCard bileşeni [cite: 93, 94] */}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ // [cite: 48]
  container: {
    flex: 1, // [cite: 49]
    backgroundColor: '#f0f2f5', // Açık gri arka plan [cite: 50, 54]
  },
  viewContainer: {
    padding: 20, // İçerik boşluğu [cite: 51]
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});