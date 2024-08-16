import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((prev) => [...prev, enteredGoalText]);
    setEnteredGoalText("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View>
        {goals && goals.length > 0 ? (
          goals.map((goal, index) => <Text key={index}>{goal}</Text>)
        ) : (
          <Text>List of Goals....</Text>
        )}
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
