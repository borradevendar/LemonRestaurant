import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Contentu from "./components/Contentu";
import Footeru from "./components/Footeru";
import MenuItems from "./components/MenuItems";
import SectionListu from "./components/SectionListu";
import Input from "./components/Input";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack= createNativeStackNavigator()
export default function App(){
  return(
      <View style={styles.view}>
        <Header/>
        <NavigationContainer  >
        <Stack.Navigator initialRouteName="Input" screenOptions={{contentStyle:{backgroundColor:'#333333'}}} >
          <Stack.Screen name='Input' component={Input}/>
          <Stack.Screen name='content' component={Contentu}/>
          <Stack.Screen name='MenuItems' component={MenuItems}/>
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    
  );
}

const styles= StyleSheet.create({
  view:{flex:1, flexDirection:'column', backgroundColor:'#333333'}
});