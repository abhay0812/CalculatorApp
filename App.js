import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import Displaylove from './components/Displaylove';

class App extends React.Component {

  state = {
    fname: '',
    sname: '',
    result:"loading.."
  }

  submitdata() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key"
            : "02bc07f8c1mshc2aeea49f3aa098p11d04cjsn0e07865c5201"
        }
      })
      .then(data => data.json())
      .then(data1 => {
        console.log(data1)
        this.setState({
          result:data1
        })
      })
  }

  render() {

    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Love Calculator" style={{ alignItems: 'center' }} />
        </Appbar.Header>

        <TextInput
          label="First Name"
          value={this.state.fname}
          onChangeText={text => this.setState({fname:text})}
          style={{ margin: 15, marginTop: 30 }}
        />

        <TextInput
          label="Last Name"
          value={this.state.sname}
          onChangeText={text => this.setState({sname:text})}
          style={{ margin: 15 }}
        />

        <Button icon="" mode="contained" onPress={() => this.submitdata()} style={{ margin: 20 }}>
          Answer
        </Button>

        <Displaylove data={this.state.result}/>

      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
