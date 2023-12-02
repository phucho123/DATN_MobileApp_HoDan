import React from "react";
import styles from "./notification.style";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import NotiCard from "../../components/notiCard/NotiCard";

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>THÔNG BÁO</Text>
        {/* CARD */}
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
