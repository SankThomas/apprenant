import React from "react"
import { TouchableOpacity, StyleSheet, Button, View, Text } from "react-native"

const Lessons = ({ navigation }) => {
  return (
    <>
      <View>
        <Text style={styles.lessonsHeader}>All lessons</Text>
      </View>

      <View style={styles.lessonButton}>
        <TouchableOpacity style={styles.lessonButton1}>
          <Text
            style={styles.lessonButtonText}
            onPress={() => navigation.navigate("Salutation")}
          >
            Lesson 1 - Salutation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonButton1}>
          <Text
            style={styles.lessonButtonText}
            onPress={() => navigation.navigate("Numbers")}
          >
            Lesson 2 - Numbers
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Lessons

const styles = StyleSheet.create({
  lessonsHeader: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 10,
  },
  lessonButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lessonButton1: {
    backgroundColor: "#F87171",
    padding: 10,
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 5,
    elevation: 8,
  },
  lessonButtonText: {
    color: "#fff",
    textTransform: "uppercase",
  },
})
