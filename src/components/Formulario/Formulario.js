import { SC } from './styles'

import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const Formulario = () => {
     return(
        <>
            <View style={SC.formulario}>
                <Text style={SC.label}>Formulario</Text>
                <TextInput 
                    style={SC.input}
                />
            </View>
        </>
     )
}

export default Formulario;