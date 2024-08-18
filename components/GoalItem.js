import { StyleSheet, View, Text, Button } from "react-native";
const GoalItem = ({ removeGoalHandler, item }) => {
  return (
    <View style={styles.rowContainer} key={`${item.index}-${item.item}`}>
      <Text key={item.index}>{item.item}</Text>
      <Button
        key={item.item}
        style={styles.buttonRow}
        onPress={() => removeGoalHandler(item.item)}
        title={`Delete ${item.item}`}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default GoalItem;
