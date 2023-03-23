import * as React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const PruebaScreen = () => {
  return (
    <View>
      <Text> Falso Home </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={({navigation}) => ({
          title: "Home",
          headerTitleAlign: 'center'
      })}
      />
    </Stack.Navigator>
  </NavigationContainer>
)};

export default App;