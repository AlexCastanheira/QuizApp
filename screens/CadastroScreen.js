import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={{ padding: 20 }}>
            <Text>Nome:</Text>
            <TextInput onChangeText={setNome} value={nome} style={{ borderBottomWidth: 1 }} />

            <Text>Email:</Text>
            <TextInput onChangeText={setEmail} value={email} keyboardType="email-address" style={{ borderBottomWidth: 1 }} />

            <Button
                title="Iniciar Quiz"
                onPress={() => navigation.navigate('Quiz', { nome, email })}
                disabled={!nome || !email}
            />
        </View>
    );
}
