import React, { useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { screenWidth } from "../../utils/common";

export default function PhoneInput(props) {
  const { inputValues, setInputValue, toggleInputError, errorInputs } = props;
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const focusInput = (name) => {
    switch (name) {
      case 1:
        return secondInput.current.focus();
      case 2:
        return thirdInput.current.focus();
      case 3:
        return fourthInput.current.focus();
      default:
        return firstInput.current.focus();
    }
  };

  const inputKeyPressed = (e, name) => {
    let keyCode = e.nativeEvent.key.toLowerCase();
    const value = inputValues[name] || "";
    console.log("input key pressed", name, value, keyCode);
    if (keyCode === "backspace" || keyCode === "enter") {
      if (!value.length) {
        focusInput(Number(name) - 2);
      }
      keyCode = "";
    } else {
      setTimeout(() => {
        focusInput(Number(name));
        errorInputs[name] = false;
        toggleInputError(errorInputs);
      }, 200);
    }

    inputValues[name] = keyCode;
    setInputValue(inputValues);
  };

  console.log('all errro inputs', errorInputs);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.textInput, errorInputs["1"] ? styles.errorInput : null]}
        onKeyPress={(e) => inputKeyPressed(e, "1")}
        value={inputValues["1"]}
        maxLength={1}
        ref={firstInput}
        name="1"
      />
      <TextInput
        style={[styles.textInput, errorInputs["2"] ? styles.errorInput : null]}
        onKeyPress={(e) => inputKeyPressed(e, "2")}
        value={inputValues["2"]}
        maxLength={1}
        ref={secondInput}
        name="2"
      />
      <TextInput
        style={[styles.textInput, errorInputs["3"] ? styles.errorInput : null]}
        onKeyPress={(e) => inputKeyPressed(e, "3")}
        value={inputValues["3"]}
        maxLength={1}
        ref={thirdInput}
        name="3"
      />
      <TextInput
        style={[styles.textInput, errorInputs["4"] ? styles.errorInput : null]}
        value={inputValues["4"]}
        maxLength={1}
        onKeyPress={(e) => inputKeyPressed(e, "4")}
        ref={fourthInput}
        name="4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: screenWidth,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    borderColor: "gray",
    margin: 10,
    fontSize: 22,
    fontWeight: "600",
    width: 60,
    height: 60,
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    paddingVertical: 20,
    borderRadius: 8
  },
  errorInput: {
      borderColor: "red"
  }
});
