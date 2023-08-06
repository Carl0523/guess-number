import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { Colors } from "../constants/Colors";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";


export default function GameResult({onGameRestart, userNumber, numRounds}) {
  return (
    <View style={styles.resultContainer}>
      <View style={styles.headerContainer}><Title text="Game Over" fontSize={82} /></View>
      <Image
        source={require("../assets/result-cat.png")}
        style={styles.resultImage}
      />
      <Text style={styles.resultSummary}>
        It took it <Text style={styles.resultSummaryHighLight}>{numRounds}</Text> rounds
        to guess the number <Text style={styles.resultSummaryHighLight}>{userNumber}</Text>
      </Text>
      <PrimaryButton
        text="Restart"
        color="white"
        backgroundColor={Colors.primary}
        action={onGameRestart}
      />
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer :{
    // padding: 20,
    // borderWidth: 5,

  },
  resultImage: {
    width: screenWidth < 380 ? 300 : 350,
    height: screenWidth < 380 ? 300 : 350,
  },
  resultSummary: {
    fontSize: 42,
    fontFamily: "handjet-regular",
    marginBottom: 50,
  },
  resultSummaryHighLight: {
    fontFamily: "handjet-bold",
    color: Colors.primary,
  },
});
