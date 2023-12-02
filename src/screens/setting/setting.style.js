import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4285F4",
    marginBottom: 8,
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#4285F4",
    borderRadius: 60,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: 5,
  },
  body: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 2,
    flex: 1,
  },
  value: {
    fontSize: 18,
    flex: 2,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 6,
    marginTop: -22,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 8,
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4285F4",
  },
  btnSubGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    marginLeft: 2,
  },
  btnLogout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 14,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#DB4437",
  },
  btnTextLogout: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
