import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <ScrollView style={{marginTop: 30}}>

    <Card />


    <View style={styles.card}>
      <Text style={styles.titulo}>Jozi</Text>
      <Text style={styles.paragrafo} >Isto é um parágrafo</Text>
      <Text >Isto é um parágrafo</Text>
      <Text style={styles.paragrafo}>Isto é um parágrafo</Text>
      <Button title='Detalhes'></Button>
    </View>
    <View style={styles.card}>
    <Text style={styles.titulo}>Jozi</Text>
    <Text >Isto é um parágrafo</Text>
    </View>
    <View style={styles.card}>
    <Text style={styles.titulo}>Jozi</Text>
    <Text >Isto é um parágrafo</Text>
    <Text >Isto é um parágrafo</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  card: {
    borderColor: 'red',
    borderStyle:'solid',
    borderWidth: 2, 
    marginBottom: 20,
  }, 

  titulo: {
    color: 'red',
    fontSize: 30,
    padding: 20, 
    marginBottom: 20, 
    borderColor: 'blue',
    borderStyle:'solid',
    borderWidth: 2, 
    textAlign: 'center',
    backgroundColor: 'black'
  },

  paragrafo: {
    fontSize: 20, 
  },

  
});
