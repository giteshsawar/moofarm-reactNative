import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { screenWidth, screenHeight } from "../../utils/common";

import OTPInput from "../OTPInput";

import GreenBackground from "../../assets/images/green-background.jpg";
import EmailIcon from "../../assets/images/email.png";

export default class GetOTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: {},
      errorInputs: {},
    };
  }

  setInputValue = (inputs) => {
    this.setState({ inputValues: inputs });
  };

  toggleInputError = (errors) => {
    this.setState({ errorInputs: errors });
  };

  SubmitPhone = () => {
    const { inputValues, errorInputs } = this.state;
    console.log("phoen no. submit", inputValues);
    for (let i = 1, x = 4; i <= x; i++) {
      const num = i.toString();
      console.log("dgiit submit", !inputValues[num], num);
      if (!inputValues[num]) {
        errorInputs[num] = true;
        this.toggleInputError(errorInputs);
      }
    }
  };

  goBack = () => {
    this.props.navigation.push("home");
  };

  resend = () => {};

  render() {
    const { inputValues, errorInputs } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.curvedContainer}>
          <ImageBackground
            style={styles.imageBackground}
            source={GreenBackground}
          >
            <View style={styles.subContainer}>
              <Image source={EmailIcon} style={styles.image} />
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
          <OTPInput
            inputValues={inputValues}
            setInputValue={this.setInputValue}
            errorInputs={errorInputs}
            toggleInputError={this.toggleInputError}
          />
          <LinearGradient
            colors={["#56A548", "#69B844"]}
            style={styles.touchBtn}
          >
            <TouchableOpacity onPress={this.SubmitPhone}>
              <Text style={styles.submitBtn}>confirm</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.changeNumber}>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.changeBtn}>change number</Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity onPress={this.resend}><Text style={styles.resendOTP}>Resend OTP</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
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
  touchBtn: {
    shadowColor: "#470000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    paddingVertical: 20,
    width: screenWidth - screenWidth / 14,
    marginTop: 20,
    borderRadius: 40,
  },
  submitBtn: {
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  changeNumber: {
    flex: 1,
    width: screenWidth,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  changeBtn: {
    color: "black",
    textTransform: "capitalize",
    fontSize: 18,
  },
  resendOTP: {
    color: "green",
    fontSize: 18,
    fontWeight: '600'
  },
});
