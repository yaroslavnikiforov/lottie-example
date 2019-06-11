import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import amination1 from "./animation1.json";
import amination2 from "./animation2.json";

const App = () => (
  <View style={styles.animationContainer}>
    <LottieView
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
