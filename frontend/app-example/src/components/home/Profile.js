import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  const facebook = <FontAwesome name="facebook" size={30} color="black" />;
  const twitter = <FontAwesome name="twitter" size={30} color="black" />;
  const instagram = <FontAwesome name="instagram" size={30} color="black" />;
  const kwai = <FontAwesome name="camera" size={30} color="black" />;
  const discord = <FontAwesome name="android" size={30} color="black" />;


  const handleOpenURL = async (url) => {
    // Verifica si el enlace se puede abrir
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Abre el enlace
      await Linking.openURL(url);
    } else {
      console.log(`No se puede abrir el enlace: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Portada */}
      <Image
        source={{ uri: 'https://www.elcomercio.com/wp-content/uploads/2022/11/3-25.jpg' }} // Reemplaza con la URL de tu imagen de portada
        style={styles.coverImage}
      />
      
      {/* Foto de perfil */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/432267096_1782755705541966_4390879707893576229_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGW__vm1hIzAPOCICIKWPPd3PiZjQF65wfc-JmNAXrnB2p1um-kaakuN2XkD61Wi-FBeo0fuHS5CZ3nDjtJASSi&_nc_ohc=OIlAN6zphp0AX-VXIDM&_nc_ht=scontent.fuio13-1.fna&oh=00_AfDvyRoFPrtM43MljO27g2KoMIWaI7els2VirHRRIH_fQw&oe=65F3E6A2' }} // Reemplaza con la URL de tu imagen de perfil
          style={styles.profileImage}
        />
      </View>

      {/* Nombre del usuario */}
      <Text style={styles.userName}>Erick Gordillo Moreno</Text>

      {/* Redes sociales */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleOpenURL('https://www.facebook.com')}>
          {facebook}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleOpenURL('https://www.twitter.com')}>
          {twitter}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleOpenURL('https://www.instagram.com')}>
          {instagram}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleOpenURL('https://www.kwai.com')}>
          {kwai}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleOpenURL('https://www.discord.com')}>
          {discord}
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileImageContainer: {
    position: 'absolute',
    top: 150,
    left: '25%',
    marginLeft: 0, // Half of the profile image width
    borderRadius: 50, // Half of the profile image width/height
    overflow: 'hidden',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'white',
    elevation: 100, // For Android shadow
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userName: {
    marginTop: 300,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  socialButton: {
    backgroundColor: '#ffffff', 
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export default ProfileScreen;