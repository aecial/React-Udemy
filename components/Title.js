import { StyleSheet, Text } from "react-native";
function Title({ text }) {
  return <Text style={styles.appTitle}>{text}</Text>;
}
const styles = StyleSheet.create({
  appTitle: {
    fontSize: 24,
    textAlign: "center",
  },
});
export default Title;
