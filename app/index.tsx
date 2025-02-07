import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "expo-router";
import LoginScreen from "./Components/LoginScreen";

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
    </SafeAreaView>
  );
}