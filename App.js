import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import Title from "./components/Title";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((prev) => [...prev, enteredGoalText]);
    setEnteredGoalText("");
    setOpenModal(false);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const removeGoalHandler = (goal) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((singleGoal) => singleGoal !== goal);
    });
  };
  return (
    <View style={styles.appContainer}>
      <Title text={"Goal Tracker"} />
      <Button
        color="#2C5C4F"
        title="Add Goal"
        onPress={() => setOpenModal(true)}
      />
      <GoalInput
        openModal={openModal}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        enteredGoalText={enteredGoalText}
        closeModal={closeModal}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(item) => {
            return (
              <GoalItem item={item} removeGoalHandler={removeGoalHandler} />
            );
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    marginTop: 16,
  },
});
