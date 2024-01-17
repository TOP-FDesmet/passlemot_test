import React, {Component} from 'react';
import {ScrollView, Text, View, Image, Button} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-between',
    }}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'lavenderblush',
      }}>
        <Text style={{fontSize: 30, fontWeight: '700', color: 'black'}}>PassLeMot</Text>
      </View>

      <View style={{
        flex: 10,
        padding: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'lemonchiffon',
      }}>
        <ScrollView style={{
          width: '100%',
          borderColor: 'white',
          borderWidth: 3,
        }}>
          <Text style={{fontSize: 96}}>Scroll me plz</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{fontSize: 96}}>If you like</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{fontSize: 96}}>Scrolling down</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{fontSize: 96}}>What's the best</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{fontSize: 96}}>Framework around?</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{fontSize: 80}}>React Native</Text>
        </ScrollView>
      </View>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: 'lightblue',
      }}>
        <Button title='Accueil' />
        <Button title='A propos' />
      </View>
    </View>
  );
};

export default App;