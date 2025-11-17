import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  // Estados
  const [textoFrase, setTextoFrase] = useState('~~~~~ *Seu presente aqui* ~~~~~');

  const [img, setImg] = useState(require('../assets/universo.png'));

  const [quebrado, setQuebrado] = useState(false);

  const imagens = [ 
    require('../assets/amor.png'),
    require('../assets/caminhos.png'),
    require('../assets/dinheiro.png'),
    require('../assets/qcy.png'),
    require('../assets/transcen.png')
  ];

  const frases = [
    '~Amor Incondicional~',
    '~Caminhos Abertos~',
    '~Dinheiro do Tio Patinhas~',
    '~Fone QCY~',
    '~Transcendência da Matéria~'
  ];

  function Sortear() {

    if (quebrado) return;
    const i = Math.floor(Math.random() * imagens.length);
    setQuebrado(true);

    setTextoFrase(frases[i]);
    setImg((imagens[i]));
    
  }

  function resetPresente() {
    setTextoFrase('~~~~~ *Seu presente aqui* ~~~~~');
    setImg(require('../assets/universo.png'));
    setQuebrado(false);
  }

  return (

    <View style={estilos.container}>

      <Image source={img} style={estilos.img} />

      <Text style={estilos.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={estilos.botao} onPress={Sortear}>
        <Text style={estilos.btnTexto}>Receber Presente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botao} onPress={resetPresente}>
        <Text style={estilos.btnTexto}>Devolver Presente</Text>
      </TouchableOpacity>

    </View>

  );
}

// Estilos
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#032080ff'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 200,
    height: 45,
    backgroundColor: '#345ee7ff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});