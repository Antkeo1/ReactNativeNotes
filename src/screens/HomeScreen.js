import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";
import ListScreen from "./ListScreen";

// Props come from app component
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Homescreen</Text>
      {/* Button element */}
      <Button
        // sends us to ComponentsScreen
        onPress={() => navigation.navigate("Components")}
        title="Go to components Demo"
      />

      <Button
        style={styles.margins}
        title="Go to list demo"
        onPress={() => navigation.navigate("List")}
      />

      <Button
        style={styles.margins}
        title="Go to image demo"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        style={styles.margins}
        title="Go to counter demo"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        style={styles.margins}
        title="Go to color demo"
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        style={styles.margins}
        title="Go to square demo"
        onPress={() => navigation.navigate("Square")}
      />

      {/*<TouchableOpacity
        //sends us to listScreen
        onPress={() => navigation.navigate("List")}
      >
        <Text>Go to list Demo</Text>
      </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  margins: {
    marginVertical: 50,
  },
});

export default HomeScreen;
