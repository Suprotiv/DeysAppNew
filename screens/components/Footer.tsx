// Footer.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ড</Text>
      <Text style={styles.text}>
        পঞ্চাশ বছর বাংলা প্রকাশনার ক্ষেত্রে কম কথা নয়। এক ছাদের তলায় নিজেদের
        প্রকাশিত প্রায় পাঁচ হাজার টাইটেল। সব লেখক একজায়গায় একমাত্র দে’জ
        পাবলিশিং-এর বইঘর।
      </Text>
      <Text style={styles.text}>
        কী নেই প্রকাশিত বইয়ের তালিকায়—গল্প-উপন্যাস-প্রবন্ধ থেকে ছােটদের বই,
        কাজের বই—আরও কত কী!
      </Text>
      <Text style={styles.text}>
        দে'জ প্রকাশিত বই ছাড়াও ওয়েবসাইটে পাওয়া যাচ্ছে আরও নানা প্রকাশকের হরেকরকম
        বিষয়ের বই যা পাঠকদের মুগ্ধ করবে।
      </Text>
      <Text style={styles.website}>www.deyspublishing.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A62821",
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 10,
  },
  website: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default Footer;
