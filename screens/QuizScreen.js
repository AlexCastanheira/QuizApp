import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const perguntas = [
    {
        pergunta: 'Qual banda brasileira lançou o álbum "Clima" em 1993?',
        opcoes: ['Legião Urbana', 'O Terno', 'Os Mutantes'],
        correta: 0,
    },
    {
        pergunta: 'Quem é o vocalista da banda "Titãs"?',
        opcoes: ['Nando Reis', 'Tony Bellotto', 'Marcelo Fromer'],
        correta: 1,
    },
    {
        pergunta: 'Quem foi o cantor principal da banda "Engenheiros do Hawaii"?',
        opcoes: ['Marcelo Falcão', 'Fábio Lessa', 'Humberto Gessinger'],
        correta: 2,
    },
    {
        pergunta: 'Qual a banda que lançou o álbum "O Planeta dos Macacos" em 1997?',
        opcoes: ['Paralamas do Sucesso', 'Skank', 'Os Mutantes'],
        correta: 1,
    },
    {
        pergunta: 'Quem foi o guitarrista da banda "Legião Urbana"?',
        opcoes: ['Dado Villa-Lobos', 'Fábio Lessa', 'Lúcio Maia'],
        correta: 0,
    },
];

export default function QuizScreen({ navigation, route }) {
    const [indice, setIndice] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);

    const responder = (opcao) => {
        if (opcao === perguntas[indice].correta) setPontuacao(pontuacao + 1);

        if (indice + 1 < perguntas.length) {
            setIndice(indice + 1);
        } else {
            navigation.navigate('Resultado', { ...route.params, pontuacao });
        }
    };

    const atual = perguntas[indice];

    return (
        <View style={{ padding: 20 }}>
            <Text>{atual.pergunta}</Text>
            {atual.opcoes.map((opcao, i) => (
                <Button key={i} title={opcao} onPress={() => responder(i)} />
            ))}
        </View>
    );
}
