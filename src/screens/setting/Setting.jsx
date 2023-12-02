import React, { useContext } from "react";
import styles from "./setting.style";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AuthenticationAPI from "../../context/authContext";

const Setting = () => {
  const { user, setUser } = useContext(AuthenticationAPI);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>THÔNG TIN CÁ NHÂN</Text>
        <View style={styles.header}>
          <Image style={styles.avatar} source={require("../../../assets/images/logo.png")} />
        </View>
        <View style={styles.body}>
          <View style={styles.item}>
            <Ionicons name="person" size={28} color="#4285F4" />
            <Text style={styles.label}>Họ tên:</Text>
            <Text style={styles.value}>{user.fullName}</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name="today" size={28} color="red" />
            <Text style={styles.label}>Ngày sinh:</Text>
            <Text style={styles.value}>{user.birthday}</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name="mail" size={28} color="green" />
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name="location-sharp" size={28} color="#F4B400" />
            <Text style={styles.label}>Địa chỉ:</Text>
            <Text style={styles.value}>{user.address}</Text>
          </View>
          <View style={styles.item}>
            <Ionicons name="call" size={28} color="gray" />
            <Text style={styles.label}>Số điện thoại:</Text>
            <Text style={styles.value}>{user.phoneNumber}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.btnGroup}>
            <View style={styles.btnSubGroup}>
              <Ionicons name="information-circle" size={28} color="blue" />
              <Text style={styles.btnText}>Thay đổi thông tin cá nhân</Text>
            </View>
            <Ionicons name="chevron-forward" size={28} color="#4285F4" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGroup}>
            <View style={styles.btnSubGroup}>
              <Ionicons name="key" size={28} color="brown" />
              <Text style={styles.btnText}>Thay đổi mật khẩu</Text>
            </View>
            <Ionicons name="chevron-forward" size={28} color="#4285F4" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogout}>
            <Text style={styles.btnTextLogout}>ĐĂNG XUẤT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;
