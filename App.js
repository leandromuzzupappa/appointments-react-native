import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

import Cita from './src/components/Cita/Cita';
import Formulario from './src/components/Formulario/Formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Oreos', sintomas: 'No duerme'},
    {id: '3', paciente: 'Native', propietario: 'Lenny', sintomas: 'No canta'},
  ]);

  const deletePacient = (id) => {
    setCitas( citasActuales => {
      return citasActuales.filter(cita => cita.id !== id)
    } )
  }

  return (
    <>
      <View style={styles.container}>

        <Text style={styles.title}>Administrador de citas</Text>


        <Formulario />

        <Text style={styles.title}>
          {
            citas.length > 0 
              ? 'Tus citas'
              : 'No hay citas, agrega una'
          }
        </Text>

        <FlatList
          data={citas}
          renderItem={({item}) => <Cita cita={item} deletePacient={deletePacient} />}
          keyExtractor={citas => citas.id}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aa076b',
    flex: 1
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})

export default App;
