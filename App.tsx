import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StandbyScreen } from './src/view/Standby/Standby';
import { LoginScreen } from './src/view/Login/Login';
import { RegisterScreen } from './src/view/Register/Register';
import { HomeScreen } from './src/view/Home/Home';
import { ChatScreen } from './src/view/Chat/Chat';
import { InfoScreen } from './src/view/Info/Info';
import { ProfileScreen } from './src/view/Profile/Profile';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StandbyScreen">
        <Stack.Screen name="StandbyScreen" component={StandbyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
