import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
function GoalInput({
  goalInputHandler,
  enteredGoalText,
  addGoalHandler,
  openModal,
  closeModal,
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
        <View style={styles.buttonContainer}>
          <Button
            title="Add Goal"
            onPress={addGoalHandler}
            disabled={enteredGoalText === ""}
          />
          <Button title="Cancel" onPress={closeModal} color={"gray"} />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",

    gap: 10,
    padding: 8,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "center",
    gap: 16,
  },
});

export default GoalInput;
