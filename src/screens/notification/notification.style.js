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

  //   Card
  cardBox: {
    borderWidth: 1,
    borderColor: "#4285F4",
    borderRadius: 8,
    width: "90%",
    left: "5%",
    backgroundColor: "#FFFFFF",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    position: "relative",
  },
  cardIcon: {
    position: "absolute",
    right: 6,
    top: 6,
    padding: 4,
  },
  cardGroup: {
    padding: 12,
  },
  cardItem: {
    marginVertical: 4,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  cardContent: {
    fontWeight: "400",
  },
});
