import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>

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

export default GoalItem;