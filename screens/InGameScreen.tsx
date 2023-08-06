import { useEffect, useState } from "react";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import { Colors } from "../constants/Colors";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import GuessList from "../components/GuessList";

function getRandomNumberInRange(min: number, max: number, exclude: number) {
  const rdn = Math.floor(Math.random() * (max - min)) + min;

  // Prevent the first number is correct
  if (rdn === exclude) {
    return getRandomNumberInRange(min, max, exclude);
  } else {
    return rdn;
  }
}

let min = 1;
let max = 1000000;

export default function InGameScreen(props) {
  const initNumber = getRandomNumberInRange(1, 1000000, props.userNumber);

  const [guessNumber, setGuessNumber] = useState(initNumber);

  useEffect(() => {
    if (guessNumber === props.userNumber) {
      min = 1;
      max = 1000000;
      props.onGameOver();
    }
    props.onAddGuess(guessNumber);
  }, [guessNumber]);

  /**
   * Generate the next guess number in bound
   * @param moreOrLess if the current guessNumber is too high or too low
   * it can be "more" or "less"
   */
  const nextGuessHandler = (moreOrLess: String) => {
    if (
      (moreOrLess === "more" && props.userNumber < guessNumber) ||
      (moreOrLess === "less" && props.userNumber > guessNumber)
    ) {
      Alert.alert("WTF!!!", `Don't lie to this poor AI`, [
        { text: "Okay", style: "default" },
      ]);
      return;
    }

    if (moreOrLess === "more") {
      min = guessNumber + 1;
    } else {
      max = guessNumber;
    }
    const nextGuess = getRandomNumberInRange(min, max, guessNumber);
    setGuessNumber(nextGuess);
  };

  return (
    <View style={styles.gameContainer}>
      <Card>
        <Title text={`Opponent's Guess`} fontSize={40} />
        <Text style={styles.guessNumber}>{guessNumber}</Text>
        <View style={styles.btns}>
          <PrimaryButton
            text="Less"
            color="white"
            backgroundColor={Colors.primary}
            action={() => {
              nextGuessHandler("less");
            }}
          />
          <PrimaryButton
            text="More"
            color="white"
            backgroundColor={Colors.primary}
            action={() => {
              nextGuessHandler("more");
            }}
          />
        </View>
      </Card>

      <Card>
        <GuessList guessList={props.guessList} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    gap: 50,
  },
  guessNumber: {
    borderWidth: 2,
    borderRadius: 8,

    color: Colors.primary,

    padding: 25,

    borderColor: Colors.primary,
    textAlign: "center",

    fontSize: 40,
    fontFamily: "handjet-bold",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

});
