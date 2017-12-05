/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { escolhaUsuario: '' }
  }

  jokenpo(escolhaUsuario){
    this.setState({ escolhaUsuario : escolhaUsuario });
     //alert(escolhaUsuario);
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title="pedra" onPress={ () => { this.jokenpo('pedra') }}></Button>
        <Button title="papel" onPress={ () => { this.jokenpo('papel') }}></Button>
        <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura') }}></Button>
      </View>
    );
  }
}
