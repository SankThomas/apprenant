import React from "react"
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={[styles.container, { backgroundColor: "#059669" }]}>
        <StatusBar barStyle="light-content" backgroundColor="#059669" />
        <View style={styles.home}>
          <Text style={styles.mainText}>
            <Text style={styles.span1}>Apr</Text>
            <Text style={styles.span2}>ena</Text>
            <Text style={styles.span3}>nt!</Text>
          </Text>
          <Button
            title="About this app"
            onPress={() => navigation.navigate("About")}
          >
            Button
          </Button>

          <View style={styles.learningButton}>
            <Button
              title="Start learning"
              onPress={() => navigation.navigate("Lessons")}
            ></Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10b981",
  },
  mainText: {
    color: "#333",
    fontSize: 46,
    fontWeight: "bold",
    marginBottom: 20,
  },
  span1: {
    color: "#EF4444",
  },
  span2: {
    color: "white",
  },
  span3: {
    color: "#1E3A8A",
  },
  learningButton: {
    marginTop: 10,
  },
})
