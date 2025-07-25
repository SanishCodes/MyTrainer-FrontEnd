import { View, Text, StyleSheet, Animated, ScrollView } from "react-native";
import React, { useState } from "react";
import AnimatedContainer from "./components/AnimatedContainer";
import CameraCard from "./components/CameraCard";
import { Camera } from "expo-camera";
import NavBar from "./components/NavBar";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <AnimatedContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.card}></View>
          {/* Add more content here if needed */}
        </View>
      </ScrollView>
      <NavBar
        style={styles.navBar}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />
    </AnimatedContainer>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Space for the floating NavBar
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100%", // Ensures it takes full screen height
  },

  card: {
    width: "80%",
    height: "20%",
    backgroundColor: "#3fb528",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    // Shadow for Android
    elevation: 8,
  },
  navBar: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
    marginHorizontal: 10,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "rgba(26, 26, 26, 0.9)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    // Floating shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // Floating shadow for Android
    elevation: 8,
  },
});
