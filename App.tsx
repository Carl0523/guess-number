import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Colors } from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";
import InGameScreen from "./screens/InGameScreen";
import GameResult from "./screens/GameResult";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [numRounds, setNumRounds] = useState([]);

  const [fontsLoaded] = useFonts({
    "handjet-regular": require("./assets/fonts/Handjet-Regular.ttf"),
    "handjet-bold": require("./assets/fonts/Handjet-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const chosenNumberHandler = (number) => {
    setChosenNumber(number);
  };
  const gameOverHandler = () => {
    setIsGameOver(true);
  };
  const addGuessNumber = (currGuess) => {
    setNumRounds((prevList) => {
      return [currGuess, ...prevList];
    });
  };
  const gameRestartHandler = () => {
    setIsGameOver(false);
    setChosenNumber(null);
    setNumRounds([]);
  };

  let currScreen = <HomeScreen onChosenNumber={chosenNumberHandler} />;

  if (chosenNumber) {
    currScreen = (
      <InGameScreen
        userNumber={chosenNumber}
        onGameOver={gameOverHandler}
        onAddGuess={addGuessNumber}
        guessList={numRounds}
      />
    );
  }
  if (isGameOver) {
    currScreen = (
      <GameResult
        onGameRestart={gameRestartHandler}
        userNumber={chosenNumber}
        numRounds={numRounds.length}
      />
    );
  }

  return !isGameOver && !chosenNumber ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={Colors.background} style={styles.appContainer}>
        <SafeAreaView style={styles.appContainer}>{currScreen}</SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  ) : (
    <LinearGradient colors={Colors.background} style={styles.appContainer}>
      <SafeAreaView style={styles.appContainer}>{currScreen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
