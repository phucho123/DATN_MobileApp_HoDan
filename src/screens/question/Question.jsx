import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Question = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Ionicons name="mic-outline" size={120} color="#4285F4" />
        <Text style={{ fontSize: 20 }}>Nhấn để nói</Text>
      </View>
    </SafeAreaView>
  );
};

export default Question;
