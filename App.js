/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Estilos = {
  principal: {
    flex:1,
    backgroundColor: 'cornflowerblue'
  },
  topo: {
    flex:1,
    backgroundColor: 'brown'
  },
  conteudo: {
    flex:1,
    backgroundColor: 'yellowgreen'
  },
  rodape: {
    flex:1,
    backgroundColor: 'orangered'
  }
};

export default class App extends Component {
  render() {
    const { principal, topo, conteudo, rodape } = Estilos;

    return (
      <View style={ principal }>
        <Text style={ topo }>Topo</Text>
        <Text style={ conteudo }>Conteúdo</Text>
        <Text style={ rodape }>Rodape</Text>
      </View>
    );
  }
}