import React, { useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { screenWidth } from "../../utils/common";

export default function PhoneInput(props) {
  const { inputValues, setInputValue, toggleInputError, errorInputs } = props;
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const seventhInput = useRef();
  const eightInput = useRef();
  const nineInput = useRef();
  const tenInput = useRef();

  const focusInput = (name) => {
    switch (name) {
      case 1:
        return secondInput.current.focus();
      case 2:
        return thirdInput.current.focus();
      case 3:
        return fourthInput.current.focus();
      case 4:
        return fifthInput.current.focus();
      case 5:
        return sixthInput.current.focus();
      case 6:
        return seventhInput.current.focus();
      case 7:
        return eightInput.current.focus();
      case 8:
        return nineInput.current.focus();
      case 9:
        return tenInput.current.focus();
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
      <Text
        style={{
          fontSize: 22,
          paddingLeft: screenWidth / 98,
          fontWeight: "600",
        }}
      >
        +91
      </Text>
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
      <TextInput
        style={[styles.textInput, errorInputs["5"] ? styles.errorInput : null]}
        value={inputValues["5"]}
        maxLength={1}
        onKeyPress={(e) => inputKeyPressed(e, "5")}
        ref={fifthInput}
        name="5"
      />
      <TextInput
        style={[styles.textInput, errorInputs["6"] ? styles.errorInput : null]}
        value={inputValues["6"]}
        maxLength={1}
        onKeyPress={(e) => inputKeyPressed(e, "6")}
        ref={sixthInput}
        name="6"
      />
      <TextInput
        style={[styles.textInput, errorInputs["7"] ? styles.errorInput : null]}
        value={inputValues["7"]}
        maxLength={1}
        onKeyPress={(e) => inputKeyPressed(e, "7")}
        ref={seventhInput}
        name="7"
      />
      <TextInput
        style={[styles.textInput, errorInputs["8"] ? styles.errorInput : null]}
        value={inputValues["8"]}
        maxLength={1}
        onKeyPress={(e) => inputKeyPressed(e, "8")}
        ref={eightInput}
        name="8"
      />
      <TextInput
        style={[styles.textInput, errorInputs["9"] ? styles.errorInput : null]}
        value={inputValues["9"]}
        maxLength={1}
        onKeyPress={(e) => inputKeyPressed(e, "9")}
        ref={nineInput}
        name="9"
      />
      <TextInput
        style={[styles.textInput, errorInputs["10"] ? styles.errorInput : null]}
        value={inputValues["10"]}
        maxLength={1}
        onKeyPress={(e) => inputKeyPressed(e, "10")}
        ref={tenInput}
        name="10"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: screenWidth - screenWidth/98,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    width: screenWidth / 14,
    margin: screenWidth / 99,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  errorInput: {
      borderBottomColor: "red"
  }
});
