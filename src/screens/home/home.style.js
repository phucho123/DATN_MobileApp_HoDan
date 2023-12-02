import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
  },
  wrapper: {
    paddingHorizontal: 12,
  },
  infoGroup: {
    backgroundColor: "#E0E8F7",
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },
  infoItem: {
    fontSize: 16,
    fontWeight: "bold",
  },
  fullName: {
    fontWeight: "normal",
  },
  address: {
    fontWeight: "normal",
  },
  section: {
    marginVertical: 4,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginVertical: 8,
  },
  headingText: {
    color: "#4285F4",
    fontSize: 18,
    fontWeight: "bold",
  },
  flowRateGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  flowRateItem: {
    borderWidth: 1,
    borderColor: "#4285F4",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    gap: 8,
    width: "40%",
  },
  flowRateTitle: {
    fontSize: 16,
    fontWeight: "300",
  },
  flowRateValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F4B400",
  },
  flowRateUnit: {
    fontSize: 16,
    fontWeight: "300",
  },
});
