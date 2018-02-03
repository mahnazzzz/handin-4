import React, { Component } from 'react';
import { Button, Modal,Platform, Text,StyleSheet, TouchableHighlight, View, TextInput } from 'react-native';
import { MapView, Constants,  Location, Permissions } from 'expo';

export default class ModalExample extends Component {
  
  constructor(props)
  {
      super(props);
      this.state = {name: '', radius: '', modalVisible: false, location: null,
      errorMessage: null, region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },markers :[]}

      this.onRegionChange = this.onRegionChange.bind(this);
      this.onLogIn = this.onLogIn.bind(this);
   
  }
  onRegionChange(region) { //den gør at man ikke hopper tilbage igen
    this.setState({ region });
  }

  onLogIn(){ // "https://3924a9cc.ngrok.io/api/friends/register/" adressen var før til at appen kunne bruge mine local
  var location = this.state.location; 
  fetch("https://big-dollar.glitch.me/api/friends/register/"+ this.state.radius, {method :'post', headers:{
    'Content-Type': 'application/json'
  }, body: JSON.stringify({
    "userName": this.state.name, 
    "loc": {
      "type": "Point", 
       "coordinates": [location.coords.longitude,location.coords.latitude ]
    }

  }) } )
  .then((response) => response.json())
  .then((responseJson) => {
   console.log("json", responseJson)
   var markers = this.state.markers;
   console.log(markers);
   for(var i = 0; i< responseJson.length; i++){
     markers.push({latlng: {latitude:responseJson[i].loc.coordinates[1], longitude: responseJson[i].loc.coordinates[0]},title:responseJson[i].userName})
   }
   this.setState({markers})
  });
}
  


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location, region :{ latitude : location.coords.latitude, longitude: location.coords.longitude, latitudeDelta:0.0922,
      longitudeDelta: 0.0421
    },markers: [{latlng: {latitude:location.coords.latitude, longitude: location.coords.longitude},title:"jeg er her"}] });

   

    
  };


  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }
 

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    console.log("location", this.state.region);
    return (
      
      <View style={{marginTop: 22,flex :10}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
          <TextInput 
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = 'input your name' value = {this.state.name}
          onChangeText={(text) => this.setState({name: text})}
          />
          <TextInput placeholder= "Enter your redius adress here"
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = 'input your radius' value = {this.state.radius}
          onChangeText={(text) => this.setState({radius : text})}
          />

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
              this.onLogIn();
            }}>
              <Text >log in with location</Text>
            </TouchableHighlight>

          </View>
         </View>
         

        </Modal>

        <MapView
        style={{ flex: 1 }}
        region={ this.state.region}
        onRegionChange={this.onRegionChange}
        >

        {this.state.markers.map(marker => (
          <MapView.Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
        </MapView>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          
          <Text style={{fontSize:20, color: 'blue'}} >LOGIN</Text>
        </TouchableHighlight>
      
      </View>

      
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
