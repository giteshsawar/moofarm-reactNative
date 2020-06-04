import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import PhoneInput from "react-native-phone-input";

import { screenWidth, screenHeight } from "../../utils/common";

import GreenBackground from "../../assets/images/green-background.jpg";
import MobileIcon from "../../assets/images/smartphone.png";

export default function GetOTP() {
  const phone = useRef();
  const myCountryPicker = useRef();
  // const [pickerData, setInputValue] = useState("");

  const onPressFlag = () => {
    myCountryPicker.open();
  };

  return (
    <View style={styles.container}>
      <View style={styles.curvedContainer}>
        <ImageBackground
          style={styles.imageBackground}
          source={GreenBackground}
        >
          <View style={styles.subContainer}>
            <Image source={MobileIcon} style={styles.image} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headingText}>Phone number verification</Text>
        <Text style={styles.subText}>
          Please enter your mobile number to receive One Time Password
        </Text>
        <ImageBackground
          source={GreenBackground}
          style={{
            height: 4,
            backgroundColor: "green",
            width: screenWidth / 4,
            left: screenWidth / 2.65,
            paddingTop: 10,
            alignSelf: "stretch",
          }}
        />
        <View style={styles.inputContainer}>
          <Text
            style={{
              fontSize: 22,
              paddingLeft: screenWidth / 98,
              fontWeight: "600",
            }}
          >
            +91
          </Text>
          <PhoneInput
            ref={phone}
            onPressFlag={onPressFlag}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: screenWidth,
    overflow: "hidden",
  },
  imageBackground: {
    width: screenWidth * 2,
    height: screenHeight / 2,
    zIndex: -1,
    elevation: -1,
  },
  image: {
    width: 80,
    height: 80,
    top: screenHeight / 8,
    right: screenWidth / 2,
    bottom: 0,
  },
  curvedContainer: {
    overflow: "hidden",
    borderBottomStartRadius: screenWidth * 2,
    borderBottomRightRadius: screenWidth * 2,
    right: screenWidth / 2,
    top: -screenHeight / 4,
  },
  subContainer: {
    width: screenWidth * 2,
    left: screenWidth / 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: screenWidth,
    top: -screenHeight / 6,
    flex: 1,
    alignItems: "center",
  },
  headingText: {
    fontSize: 24,
    lineHeight: 32,
  },
  subText: {
    padding: 20,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  inputContainer: {
    width: screenWidth,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: screenWidth / 14,
    margin: screenWidth / 98,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
});
