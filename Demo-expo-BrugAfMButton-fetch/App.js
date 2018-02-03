import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {value: ""};
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={{fontSize:25}}>Debug Demo</Text>
        <Button title ="call add"  onPress={()=>this.get()}/>
        <Text>{this.state.value}</Text>
      </View>
    );
  }
   get=()=> {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((res) => {
        this.setState({value:res.title});
       
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
