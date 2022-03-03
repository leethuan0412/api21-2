import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const watch = (props) => {
  const { navigation } = props;
  

  return (
    <SafeAreaView>
        <Text> video</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default watch;