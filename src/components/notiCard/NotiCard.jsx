import React from "react";
import styles from "./notiCard.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

const NotiCard = () => {
  return (
    <View style={styles.cardBox}>
      <Ionicons name="close" size={28} color="#DB4437" style={styles.cardIcon} />
      <View style={styles.cardGroup}>
        <Text style={styles.cardItem}>
          Người gửi: <Text style={styles.cardContent}>Admin</Text>
        </Text>
        <Text style={styles.cardItem}>
          Thời gian gửi: <Text style={styles.cardContent}>12/12/2023</Text>
        </Text>
        <Text style={styles.cardItem}>
          Nội dung: <Text style={styles.cardContent}>Lưu lượng nước vượt ngưỡng cho phép</Text>
        </Text>
      </View>
    </View>
  );
};

export default NotiCard;
