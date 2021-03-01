import React, { useState } from "react"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import { TouchableOpacity, StyleSheet, Button, View, Text } from "react-native"
import data from "../data/data"

const LearnScreen = ({ navigation }) => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data)

  return (
    <ScrollView>
      <View style={styles.backButton}>
        <TouchableOpacity
          style={styles.backButton1}
          onPress={() => navigation.navigate("Numbers")}
        >
          <Text style={styles.backButtonText}>Suivant</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.learnHeader}>Leçon 1 - Salutation</Text>
      </View>

      <View>
        <View style={styles.list}>
          {items.map((item) => {
            const { id, title } = item

            return (
              <Text key={id} style={styles.listInner}>
                {title}
              </Text>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default LearnScreen

const styles = StyleSheet.create({
  learnHeader: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#065F46",
    paddingTop: 5,
  },
  list: {
    display: "flex",
    paddingTop: 10,
    paddingBottom: 60,
  },
  listInner: {
    margin: 10,
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  backButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  backButton1: {
    backgroundColor: "#F87171",
    padding: 10,
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 5,
    elevation: 6,
  },
  backButtonText: {
    textTransform: "uppercase",
    color: "#fff",
  },
})
