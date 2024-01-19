import * as React from 'react';
import { 
  View,
  StyleSheet, 
  Text, 
  Image, 
  Pressable, 
  Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation }) => ({
            header: () => (
              <View style={styles.appBar}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'}}>
                  
                  {/* menu burger */}
                  <Pressable onPress={() => Alert.alert('Menu')}>
                    <Image source={require('./img/menu-scale.png')} />
                  </Pressable>
                  
                  <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>Home</Text>
                  
                  {/* profil */}
                  <Pressable onPress={() => navigation.navigate('Profil', {name: 'Jane'})}>
                    <Image style={{
                      borderRadius: 50,
                      borderWidth: 2, 
                      borderColor: 'white'}} source={require('./img/avatar.png')} />
                  </Pressable>
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name='Profil'
          component={ProfilScreen}
          options={({ navigation }) => ({
            header: () => (
              <View style={styles.appBar}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'}}>
                  
                  {/* back button */}
                  <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('./img/arrow-left.png')} />
                  </Pressable>
                  
                  <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>Mon compte</Text>
                  
                  {/* profil */}
                  <Pressable>
                    <Image style={{
                      borderRadius: 50,
                      borderWidth: 2, 
                      borderColor: 'white',
                      opacity: 0,}} source={require('./img/avatar.png')} />
                  </Pressable>
                </View>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

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
  )
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>

      {/* page content */}
      <View style={styles.pageContent}>
  
      </View>
  
      {/* menu nav */}
      <MenuNav />
  
    </View>
  )
}
  
const ProfilScreen = () => {
  return (
    <View style={styles.container}>

      {/* page content */}
      <View style={styles.pageContent}>
        
      </View>
  
      {/* menu nav */}
      <MenuNav />
  
    </View>
  )
}

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
})

export default App