import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

type BannerImage = {
  source: any; // Adjust based on the image asset type
};

const bannerImages: BannerImage[] = [
  { source: require("../../assets/favicon.png") },
  { source: require("../../assets/icon.png") },
  { source: require("../../assets/splash.png") },
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentIndex === bannerImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);

      Animated.timing(translateX, {
        toValue: -width * nextIndex,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.bannerContainer}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        {bannerImages.map((image, index) => (
          <View key={index} style={styles.bannerImageContainer}>
            <Image source={image.source} style={styles.bannerImage} />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
    marginVertical: 20,
  },
  animatedContainer: {
    flexDirection: "row",
    width: width * bannerImages.length,
  },
  bannerImageContainer: {
    width,
    height: "100%",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Banner;
