import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter Your Goal" />
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
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    paddingBottom: 24,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: "70%",
    padding: 5,
  },
});
