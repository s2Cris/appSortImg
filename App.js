import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';

// Cria a pilha de navegação
const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: '~~Presentes do Universo~~' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

}