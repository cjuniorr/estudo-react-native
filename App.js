/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.floor(Math.random()*10);
  alert(numero_aleatorio);
}

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Text>Gerador de números radômicos</Text>
        <Button title="Gerar número randômico" onPress = {geraNumeroAleatorio}></Button>
      </View> 
    );
  }
}