import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NavBar: React.FC = () => {
  return (
    <View style={{ padding: 16, backgroundColor: "#ffe4e1", marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 24, color: "#c21807", fontWeight: "bold" }}>
          Dey's Publishing
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginRight: 25 }}>
            <FontAwesome name="shopping-cart" size={30} color="#c21807" />
            <Text
              style={{
                position: "absolute",
                right: -5,
                top: -5,
                backgroundColor: "red",
                color: "white",
                padding: 2,
                borderRadius: 10,
                fontSize: 10,
              }}
            >
              0
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="sign-in" size={24} color="#c21807" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      >
        <TextInput
          placeholder="Search for books, author, publishers..."
          style={{ flex: 1, padding: 10 }}
        />
        <FontAwesome name="search" size={20} color="#c21807" />
      </View>
    </View>
  );
};

export default NavBar;
