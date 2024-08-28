import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/lion.png")}
        />
        <TextInput
          style={styles.textInput}
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
    backgroundColor: "#2C5C4F",
    gap: 10,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: "auto",
  },
  textInput: {
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    color: "white",
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "center",
    gap: 16,
    color: "white",
  },
});

export default GoalInput;
