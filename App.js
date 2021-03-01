import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { StyleSheet } from "react-native"
import HomeScreen from "./screens/HomeScreen"
import About from "./screens/About"
import Salutation from "./screens/Salutation"
import Lessons from "./screens/Lessons"
import Numbers from "./screens/NumbersLesson"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Apprenant"
          component={HomeScreen}
          options={{
            title: "Apprenant",
            headerStyle: {
              backgroundColor: "#059669",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: "#059669",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Salutation"
          component={Salutation}
          options={{
            headerStyle: {
              backgroundColor: "#059669",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Lessons"
          component={Lessons}
          options={{
            headerStyle: {
              backgroundColor: "#059669",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Numbers"
          component={Numbers}
          options={{
            headerStyle: {
              backgroundColor: "#059669",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline"
            } else if (route.name === "About") {
              iconName = focused ? "ios-list-box" : "ios-list"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
