import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Congo from './assets/imagem/floresta-congo.png';
import Taiga from './assets/imagem/floresta-taiga.png';
import Amazonica from './assets/imagem/floresta-amazonica.png';

export default function App() {
  return (
    <View style = {estilos.container}>
      <StatusBar style= 'light'/>

      <Text style = {estilos.titulo}>Floresta Pelo Mundo</Text>

      <Image source = {Congo}
      style = {estilos.img}/>
      <Text style = {estilos.margem}>Floresta do Congo (África)</Text>
      
      <Image source = {Taiga}
      style = {estilos.img}/>
      <Text style = {estilos.margem}>Floresta Taiga (Hemisfério Norte)</Text>

      <Image source = {Amazonica}
      style = {estilos.img}/>
      <Text style = {estilos.margem}>Floresta Amazônica (América do Sul)</Text>
    
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(180,250,180)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    borderRadius: 10,
    width: 300,
    height: 100,
  },

  titulo: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    backgroundColor: 'green',
    borderRadius: 5,
    color: 'rgb(0,250,0)',
    padding: 5,
  },

  margem: {
    color: 'green',
    marginBottom: 20,
    fontWeight: 'bold',
  },

});
