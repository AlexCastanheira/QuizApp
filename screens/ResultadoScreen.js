import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ResultadoScreen({ route, navigation }) {
    const { nome, pontuacao } = route.params;


    const resultado = pontuacao >= 3 ? 'Vencedor' : 'Perdeu';

    const reiniciarQuiz = () => {
        navigation.navigate('Cadastro')
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>{resultado}, {nome}!</Text>
            <Text>Sua pontuação: {pontuacao} de 5</Text>
            <Button title="Tentar novamente" onPress={reiniciarQuiz} />
        </View>
    );
}
