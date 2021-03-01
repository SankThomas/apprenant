import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"

const About = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.about}>
          <Text>This is version 1.0.0 of Apprenant</Text>
          <View style={styles.aboutDescription}>
            <Text style={styles.aboutDescriptionText}>
              Apprenant is a French Learning App targeting beginners in the
              French language. We use simple learning techniques to ensure
              memory and fun learning for every student.
            </Text>
            <Text style={styles.aboutDescriptionText}>
              Being the first version of the Application, we are adding more and
              more features and lessons. We therefore encourage you to report
              any issues you may experience with the application to
              tsbsankara@gmail.com. Thank you.
            </Text>
          </View>
          <View style={styles.learnButton}>
            <TouchableOpacity style={styles.homeButton1}>
              <Text
                style={styles.homeButtonText}
                onPress={() => navigation.navigate("Lessons")}
              >
                Start Learning Now...
              </Text>
            </TouchableOpacity>
          </View>

          {/* Equivalent to "Back" button */}
          <View style={styles.backButton}>
            <TouchableOpacity style={styles.homeButton1}>
              <Text
                style={styles.homeButtonText}
                onPress={() => navigation.goBack()}
              >
                Retour
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Go back to the first screen in the stack */}
      <View style={styles.homeButton}>
        <TouchableOpacity style={styles.homeButton1}>
          <Text
            style={styles.homeButtonText}
            onPress={() => navigation.popToTop()}
          >
            Accueil
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default About

const styles = StyleSheet.create({
  about: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    paddingTop: 100,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  homeButton1: {
    backgroundColor: "#F87171",
    padding: 10,
    borderRadius: 2,
    elevation: 6,
  },
  homeButtonText: {
    color: "#fff",
    textTransform: "uppercase",
  },
  aboutDescription: {
    padding: 20,
  },
  aboutDescriptionText: {
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
  },
  learnButton: {
    minWidth: 150,
    margin: "auto",
  },
})
