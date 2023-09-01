import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/LoginSignup/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignup/LoginScreen';
import SignupScreen from './src/screens/LoginSignup/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Placeorder from './src/screens/Placeorder';
import TrackOrder from './src/screens/TrackOrder';
import UserProfile from './src/screens/UserProfile';
import UserCart from './src/screens/UserCart';
import Productpage from './src/screens/Productpage';




const App = () => {
  const Stack =  createNativeStackNavigator();
  return (

    <NavigationContainer>


<Stack.Navigator initialRouteName='Welcome'>
       <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{headerShown:false}}/>
       <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}} />
      <Stack.Screen name="Signup"  component={SignupScreen}  options={{headerShown:false}} />
      <Stack.Screen name="homescreen"  component={HomeScreen}  options={{headerShown:false}} />
      <Stack.Screen name="home" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen name="userprofile" component={UserProfile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="productpage" component={Productpage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="cart" component={UserCart}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="placeorder" component={Placeorder}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="trackorders" component={TrackOrder}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    



    </NavigationContainer>


)}

const styles = StyleSheet.create({
  container:{
    // flex:1,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   // color:'#fff'
  },
})
export default App

