import React from "react";
import { StyleSheet, View } from "react-native";
import { DangerZone } from "expo";
import amination1 from "./animation1.json";
import amination2 from "./animation2.json";

const { Lottie } = DangerZone;

const App = () => (
  <View style={styles.animationContainer}>
    <Lottie
      style={styles.animation}
      source={amination1}
      autoPlay
      loop
      resizeMode="cover"
    />
  </View>
);

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  animation: {
    width: 400,
    height: 400
  }
});

export default App;
