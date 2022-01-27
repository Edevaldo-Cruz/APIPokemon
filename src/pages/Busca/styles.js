import { StyleSheet } from "react-native";
import typeColors from "./typeColors";

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
  nameNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  nameText: {
    fontFamily: "PoppinsBold",
    color: "#FFF",
    fontSize: 24,
    lineHeight: 32,
  },
  number: {
    fontFamily: "PoppinsBold",
    color: "#FFF",
    fontSize: 15,
    lineHeight: 32,
  },
  containerPokeball: {
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
    marginTop: -45,
    paddingRight: 20,
  },
  pokeball: {
    width: 208,
    height: 208,
  },
  containerPokemon: {
    alignItems: "center",
    width: "100%",
  },
  imgPokemon: {
    width: 250,
    height: 250,
    marginBottom: 20,
    zIndex: 1,
  },
  containerAbout: {
    width: 352,
    height: 390,
    backgroundColor: "#FFF",
    marginHorizontal: 4,
    marginTop: -80,
    borderRadius: 8,
  },
  type: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 56,
    alignItems: "center",
  },

  title: {
    width: "100%",
    textAlign: "center",
    marginTop: 16,
    fontFamily: "PoppinsBold",
    color: "#112233",
    fontSize: 15,
    lineHeight: 18,
  },
  containerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginHorizontal: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWeigth: {
    width: 20,
    height: 20,
  },
  iconHeight: {
    width: 10,
    height: 20,
  },
  textAbout: {
    fontFamily: "PoppinsRegular",
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 8,
  },
  text: {
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },
  move: {
    fontFamily: "PoppinsRegular",
    lineHeight: 20,
    textAlign: "center",
  },
  line: {
    borderRightWidth: 2,
    borderRightColor: "#999",
    height: 48,
    opacity: 0.5,
  },
  containerStats: {
    flexDirection: "row",
    alignItems: "center",
  },

  lineStats: {
    borderRightWidth: 1,
    borderRightColor: "#999",
    height: 22,
    marginHorizontal: 8,
  },
  centeredView: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
export { styles };
