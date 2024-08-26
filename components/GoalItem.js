import { StyleSheet, View, Text, Button, Pressable } from "react-native";
const GoalItem = ({ removeGoalHandler, item }) => {
  return (
    <Pressable
      android_ripple={{ color: "#2C5C4F" }}
      onPress={() => removeGoalHandler(item.item)}
    >
      <View style={styles.rowContainer} key={`${item.index}-${item.item}`}>
        <Text style={styles.bodyText} key={item.index}>
          {item.item}
        </Text>
        {/* <Button
          key={item.item}
          style={styles.buttonRow}
          onPress={() => removeGoalHandler(item.item)}
          title={`Delete ${item.item}`}
        ></Button> */}
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: "#2C5C4F",
    borderRadius: 8,
  },
  bodyText: {
    color: "#F5E9E0",
    fontSize: 24,
    padding: 4,
  },
  buttonRow: {
    width: 20,
    backgroundColor: "red",
    color: "white",
  },
});
export default GoalItem;
