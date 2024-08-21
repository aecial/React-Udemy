import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Title from "./components/Title";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

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
      <Title text={"Goal Tracker"} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        enteredGoalText={enteredGoalText}
      />
      <View>
        <FlatList
          data={goals}
          renderItem={(item) => {
            return (
              <GoalItem item={item} removeGoalHandler={removeGoalHandler} />
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
});
