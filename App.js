import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

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
  const removeGoalHandler = (goal) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((singleGoal) => singleGoal !== goal);
    });
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
        <FlatList
          data={goals}
          renderItem={(item) => {
            return (
              <View
                style={styles.rowContainer}
                key={`${item.index}-${item.item}`}
              >
                <Text key={item.index}>{item.item}</Text>
                <Button
                  key={item.item}
                  style={styles.buttonRow}
                  onPress={() => removeGoalHandler(item.item)}
                  title={`Delete ${item.item}`}
                ></Button>
              </View>
            );
          }}
        />
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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  buttonRow: {
    width: 20,
    backgroundColor: "red",
    color: "white",
  },
});
