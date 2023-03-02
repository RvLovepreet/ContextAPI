import {SafeAreaView} from 'react-native';
import React, {useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createContext} from 'react';
import ContextAPI from './screens/ContextAPI';
import {ChildComponent} from './screens/ChildComponent';
import {Theme1} from './screens/Theme1';

const Stack = createNativeStackNavigator();
export const myContext = createContext('');
export const myContext2 = createContext('');
export default function App() {
  const [firstName, setFirstName] = useState('Lovepreet');
  const [lastName, setLastName] = useState('Singh');
  return (
    <myContext.Provider value={firstName}>
      <myContext2.Provider value={lastName}>
       
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="home" component={ContextAPI} />
              <Stack.Screen name="childComponent" component={ChildComponent} />
            </Stack.Navigator>
          </NavigationContainer>
       
      </myContext2.Provider>
    </myContext.Provider>
  );
}
