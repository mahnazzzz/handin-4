import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image style={{height:50,width:50}} source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Image source={require('./billede.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
    'AwesomeProject',
    () => IScrolledDownAndWhatHappenedNextShockedMe);