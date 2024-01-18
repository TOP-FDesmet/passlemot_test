import React, {} from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  Image, 
  Pressable, 
  Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      {/* appbar */}
      <AppBar />

      {/* page content */}
      <View style={styles.pageContent}>

      </View>

      {/* menu nav */}
      <MenuNav />

    </View>
  );
};

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',}}>
        
        {/* menu burger */}
        <Pressable onPress={() => Alert.alert('Menu')}>
          <Image source={require('./img/menu-scale.png')} />
        </Pressable>
        
        <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>Title</Text>
        
        {/* profil */}
        <Pressable onPress={() => Alert.alert('Profil')}>
          <Image style={{
            borderRadius: 50, 
            borderWidth: 2, 
            borderColor: 'white'}} source={require('./img/avatar.png')} />
        </Pressable>
      </View>
    </View>
  );
};

const MenuNav = () => {
  return (
    <View style={styles.menuNav}>
      <Pressable onPress={() => Alert.alert('Home')}>
          <Image source={require('./img/home-simple-door.png')} />
      </Pressable>
      <Pressable onPress={() => Alert.alert('Favoris')}>
          <Image source={require('./img/heart.png')} />
      </Pressable>
      <Pressable onPress={() => Alert.alert('Daily')}>
          <Image source={require('./img/journal.png')} />
      </Pressable>
    </View>
  );
};

// stylesheet
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: 'lightblue',
  },
  appBar: {
    justifyContent: 'center',
    flexGrow: 0,
    width: '100%',
    height: 90,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  pageContent: {
    flexGrow: 1,
    width: '100%',
  },
  menuNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 0,
    width: '100%',
    height: 78,
    backgroundColor: 'white',
    borderTopStartRadius: 39,
    borderTopRightRadius: 39,
  },
});

export default App;