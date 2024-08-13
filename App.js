import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Your Goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    // borderColor: "red",
    // borderWidth: 1,
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
