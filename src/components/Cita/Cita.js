import React, { useState } from "react";
import { Text, View, TouchableHighlight } from 'react-native';

import { SC } from "./styles";

const Cita = ({cita, deletePacient}) => {

    const handleDelete = (id) => {
        console.log(`Eliminando cita: ${id}`);
        deletePacient(id);
    }

    return (
        <View style={SC.cita}>
            <View>
                <Text style={SC.label}>Paciente: </Text>
                <Text style={SC.text}>{cita.paciente}</Text>
            </View>
            <View>
                <Text style={SC.label}>Propietario: </Text>
                <Text style={SC.text}>{cita.propietario}</Text>
            </View>
            <View>
                <Text style={SC.label}>Sintomas: </Text>
                <Text style={SC.text}>{cita.sintomas}</Text>
            </View>

            <View>
                <TouchableHighlight 
                    style={SC.btnDelete}
                    onPress={() => handleDelete(cita.id)}
                >
                    <Text style={SC.btnDeleteText}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Cita;