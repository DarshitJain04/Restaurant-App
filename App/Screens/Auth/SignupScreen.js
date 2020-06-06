import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default SignupScreen;
