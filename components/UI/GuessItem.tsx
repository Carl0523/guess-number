import { View, Text, StyleSheet } from "react-native";
import { Colors } from '../../constants/Colors';

export default function GuessItem({ nthGuess, currGuess }) {
  return (
    <View style={styles.guessItem}>
      <Text style={styles.guessItemNumber}>#{nthGuess}</Text>
      <Text style={styles.guessItemNumber}>{currGuess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessItem: {
    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 12,
    overflow: "hidden",

    marginVertical: 10,
    padding: 15,

    backgroundColor: Colors.primary,
  },
  guessItemNumber : {
    fontSize: 28,
    fontFamily: 'handjet-bold',
    color: "white",
  }
});
