import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroScreen from './screens/CadastroScreen';
import QuizScreen from './screens/QuizScreen';
import ResultadoScreen from './screens/ResultadoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Resultado" component={ResultadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
