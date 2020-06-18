import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
          <Text>{props.title}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "#CCC",
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        margin: 10
        }
})


export default GoalItem