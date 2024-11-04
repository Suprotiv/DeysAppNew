import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Book = {
  title: string;
  author: string;
  originalPrice: number;
  discountPrice: number;
  image: any; // Adjust as per your assets type if needed
};

const books: Book[] = [
  {
    title: "Parakapale Rajarani",
    author: "Asutosh Mukhapadhyay",
    originalPrice: 600,
    discountPrice: 450,
    image: require("../../assets/favicon.png"),
  },
  {
    title: "Chalachitra Manus Ebang",
    author: "Ritwik Kumar Ghatak",
    originalPrice: 450,
    discountPrice: 337.5,
    image: require("../../assets/favicon.png"),
  },
  {
    title: "Parakapale Rajarani",
    author: "Asutosh Mukhapadhyay",
    originalPrice: 600,
    discountPrice: 450,
    image: require("../../assets/favicon.png"),
  },
  // Add more books here
];
type RecommendedBooksProps = {
  title: string;
};

const BooksList: React.FC<RecommendedBooksProps> = ({ title }) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Image source={item.image} style={styles.bookImage} />
            <Text style={styles.discountLabel}>25% off</Text>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>Author: {item.author}</Text>
            <Text style={styles.bookPrice}>
              <Text style={styles.originalPrice}>₹ {item.originalPrice}</Text> ₹{" "}
              {item.discountPrice}
            </Text>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
  bookContainer: {
    width: 140,
    marginRight: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  bookImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  discountLabel: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#c21807",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    borderRadius: 5,
  },
  bookTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
    height: 50,
  },
  bookAuthor: {
    color: "#888",
    fontSize: 12,
    height: 50,
  },
  bookPrice: {
    fontWeight: "600",
    color: "#c21807",
    marginBottom: 8,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  addToCartButton: {
    backgroundColor: "#ff6f00",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default BooksList;
