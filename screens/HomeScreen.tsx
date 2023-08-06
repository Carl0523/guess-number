import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import { Colors } from "../constants/Colors";

export default function HomeScreen({ onChosenNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputHandler = (userInput) => {
    setEnteredNumber(userInput);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const submitHandler = () => {
    Keyboard.dismiss();

    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 1) {
      Alert.alert("Warning", "Please enter a valid number between 1 - 999999", [
        { text: "Comfirm", style: "cancel", onPress: resetHandler },
      ]);
      return;
    }

    onChosenNumber(chosenNumber);
  };

  return (
      <Card>
        <Title text="Guess the Number" fontSize={40} />

        {/* 1. Text Input box for entering number */}
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={6}
          value={enteredNumber}
          onChangeText={inputHandler}
        />

        {/* 2. Buttons for reset and submit */}
        <View style={styles.btns}>
          <PrimaryButton
            text="Reset"
            color="white"
            backgroundColor="#FF3B30"
            action={resetHandler}
          />
          <PrimaryButton
            text="Submit"
            color="white"
            backgroundColor={Colors.primary}
            action={submitHandler}
          />
        </View>
      </Card>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  numberInput: {
    fontSize: 28,
    fontFamily: "handjet-regular",

    textAlign: "center",

    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.primary,
    backgroundColor: "rgb(245, 245, 245)",
  },
  btns: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
