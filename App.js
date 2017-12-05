/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = 'Enfrente os problemas e leve a melhor!';
  frases[1] = 'Dê mais atenção ao que você tem de bom na sua vida';
  frases[2] = 'Para chegar ao topo, o que importa é começar!';
  frases[3] = 'De nada adianta ter sonhos, se você não se empenhar em correr atrás';
  frases[4] = 'Não deixe nada nem ninguém estragar o seu bom humor';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
}

export default class App extends Component {
  render() {

    const { principal, botao, textoBotao } = Estilos;

    return (
      <View style={ principal }>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
          <Text style={textoBotao}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}