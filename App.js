import React from 'react';
import {CryptoDetail, Transaction} from './app/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';

import Tabs from './app/navigation/tabs';
import LoginScreen from './app/screens/Login';
import ChatView from './app/screens/ChatView';

const Stack = createStackNavigator();

const App = () => {
  // React.useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="ChatV" component={ChatView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
