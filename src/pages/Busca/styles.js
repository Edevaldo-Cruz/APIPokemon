import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerimg: {
    backgroundColor: "#09204A",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
  },
  logo: {
    marginTop: 50,
    width: "50%",
    height: "35%",
  },

  containerBusca: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderRadius: 16,
    height: 60,
    marginTop: 2,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    marginBottom: 20,
    fontSize: 18,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    borderRadius: 16,
    backgroundColor: "#111",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  button__text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  card: {
    width: 360,
    height: 640,
    backgroundColor: "#F9CF30",
    borderRadius: 12,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 8,
    paddingHorizontal: 28,
  },
  nameNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 24,
  },
  nameText: {
    color: "#FFF",
    fontSize: 24,
    lineHeight: 32,
  },
});
export { styles };
