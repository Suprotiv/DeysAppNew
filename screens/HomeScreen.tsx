import React from "react";
import { ScrollView } from "react-native";
import PopularCategories from "./components/PopularCategories";
import BooksList from "./components/BooksList";
import NavBar from "./components/NavBar";
import AssuranceSection from "./components/AssuranceSection";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavBar />
      <Banner />
      <PopularCategories />
      <BooksList title="Recommended Books" />
      <BooksList title="Featured  Books" />

      <BooksList title="New Release" />
      <BooksList title="Best Selling" />
      <AssuranceSection />
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;
