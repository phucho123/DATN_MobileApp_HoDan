import React, { useContext } from "react";
import styles from "./home.style";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AuthenticationAPI from "../../context/authContext";
import ChartComp from "../../components/chart/ChartComp";

const Home = () => {
  const { user, setUser } = useContext(AuthenticationAPI);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.infoGroup}>
            <Text style={styles.infoItem}>
              Họ và tên: <Text style={styles.fullName}>{user.fullName}</Text>
            </Text>
            <Text style={styles.infoItem}>
              Địa chỉ: <Text style={styles.address}>{user.address}</Text>
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.heading}>
              <View
                style={{
                  backgroundColor: "#9EC2FF",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 4,
                }}
              >
                <Ionicons name="water" size={32} color="#4285F4" />
              </View>
              <Text style={styles.headingText}>Tình trạng nước</Text>
            </View>
            <View style={styles.flowRateGroup}>
              <View style={styles.flowRateItem}>
                <Image
                  source={require("../../../assets/images/flowrate.png")}
                  style={{ height: 80, width: 80, alignSelf: "center" }}
                />
                <Text style={styles.flowRateTitle}>Lưu lượng tức thời</Text>
                <Text style={styles.flowRateValue}>1000</Text>
                <Text style={styles.flowRateUnit}>m³</Text>
              </View>
              <View style={styles.flowRateItem}>
                <Image
                  source={require("../../../assets/images/totalRate.png")}
                  style={{ height: 80, width: 80, alignSelf: "center" }}
                />
                <Text style={styles.flowRateTitle}>Tổng lưu lượng</Text>
                <Text style={styles.flowRateValue}>1000</Text>
                <Text style={styles.flowRateUnit}>m³</Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.heading}>
              <View
                style={{
                  backgroundColor: "#9EC2FF",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 4,
                }}
              >
                <Ionicons name="bar-chart" size={32} color="#4285F4" />
              </View>
              <Text style={styles.headingText}>Thống kê</Text>
            </View>
            <View style={{ width: "100%" }}>
              <ChartComp title={"Biểu đồ lưu lượng tức thời"} colorFrom={"#4285F4"} colorTo={"#C7DCFE"} />
              <ChartComp title={"Biểu đồ tổng lưu lượng"} colorFrom={"#4285F4"} colorTo={"#C7DCFE"} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
