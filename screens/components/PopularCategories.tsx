import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

type Category = {
  title: string;
  image: any; // Adjust as per your assets type if needed
};

const categories: Category[] = [
  { title: "Adventure", image: require("../../assets/favicon.png") },
  {
    title: "Chalachitra Or Cinematography",
    image: require("../../assets/favicon.png"),
  },
  { title: "Galpa Or Stories", image: require("../../assets/favicon.png") },
  { title: "Itihas Or History", image: require("../../assets/favicon.png") },
  { title: "Itihas Or History", image: require("../../assets/favicon.png") },
  { title: "Itihas Or History", image: require("../../assets/favicon.png") },
];

const PopularCategories: React.FC = () => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.sectionTitle}>Popular Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 10,
  },
  categoryContainer: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#c21807",
  },
  categoryText: {
    marginTop: 8,
    width: 60,
    color: "#c21807",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default PopularCategories;
