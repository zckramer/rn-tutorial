import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
        ...currentGoals, 
        { id: Math.random().toString(), value: goalTitle }
      ])
    setIsAddMode(false);
  }

  const cancelAddGoal = () => {
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title={'Add New Goal'} onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelAddGoal}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            title={itemData.item.value} 
            id={itemData.item.id} 
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
