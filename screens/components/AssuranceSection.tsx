// AssuranceSection.tsx

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AssuranceSection = () => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Dey's Assurance</Text>
        <View style={styles.item}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Authentic Products</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Easy Return</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Verified Sellers</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Doorstep Delivery</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow
    marginHorizontal: 16, // for Android shadow
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default AssuranceSection;
