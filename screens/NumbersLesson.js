import React, { useState } from "react"
import { TouchableOpacity, StyleSheet, Button, View, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { numbers } from "../data/numbers"

const NumbersLesson = ({ navigation }) => {
  const [items, setItems] = useState(numbers)

  return (
    <>
      <ScrollView>
        <View>
          <Text style={styles.numbersHeader}>Leçon 2 - Numbers</Text>
        </View>

        <View style={styles.numbersContainer}>
          {items.map((item) => {
            const { id, title, translation } = item

            return (
              <View key={id} style={styles.numbersInner}>
                <Text>{title}</Text>
                <Text>{translation}</Text>
              </View>
            )
          })}
        </View>

        <TouchableOpacity
          onPress={() => navigation.popToTop()}
          style={styles.button}
        >
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default NumbersLesson

const styles = StyleSheet.create({
  numbersHeader: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#065F46",
    paddingTop: 10,
    paddingBottom: 5,
  },
  numbersContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 80,
  },
  numbersInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#6EE7B7",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#F87171",
    borderRadius: 50,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 21,
    paddingRight: 21,
    elevation: 6,
  },
  plusButton: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
})
