import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: enteredGoal }
    ])
    setEnteredGoal('');
    console.log(enteredGoal)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Course Goal"} style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}></TextInput>
        <Button title={"ADD"} onPress={addGoalHandler}/>
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.key}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1
  },
});
