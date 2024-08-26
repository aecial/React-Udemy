import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
function GoalInput({
  goalInputHandler,
  enteredGoalText,
  addGoalHandler,
  openModal,
}) {
  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
          disabled={enteredGoalText === ""}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
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

export default GoalInput;
