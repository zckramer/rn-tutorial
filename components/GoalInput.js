import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }
    
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder={"Course Goal"} 
                    style={styles.input} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}>    
                </TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            color="red"
                            title="CANCEL" 
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title={"ADD"} 
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    input: {
        padding: 10,   
        margin: 10,
      width: "80%",
      borderColor: "black",
      borderWidth: 1
    },
    buttonContainer: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        width: "60%"
    },
    button: {
        width: "40%",
        borderWidth: 1,
        borderColor: "lightgray"
    }
})

export default GoalInput;