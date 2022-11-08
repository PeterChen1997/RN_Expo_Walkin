import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const [currentGoal, setCurrentGoal] = useState("123");
    const [goals, setGoals] = useState([]);

    const handleChange = (value) => {
        setCurrentGoal(value);
    };

    const handleGoalAdd = () => {
        console.log(currentGoal);
        setGoals([...goals, currentGoal]);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Please input your goal"
                        onChangeText={handleChange}
                        style={styles.input}
                    />
                    <Button title={"add"} onPress={handleGoalAdd}></Button>
                </View>

                <View style={styles.goalsContainer}>
                    {goals.map((goal) => (
                        <View style={styles.goal}>
                            <Text>{goal}</Text>
                        </View>
                    ))}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        width: "70%",
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
    },
    goal: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderColor: "gray",
        borderWidth: 1,
        width: "90%",
    },
    goalsContainer: {
        alignItems: "center",
        width: "100%",
    },
});
