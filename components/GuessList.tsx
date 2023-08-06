import {
  StyleSheet,
  FlatList,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import GuessItem from "./UI/GuessItem";

export default function GuessList({ guessList }) {
  return (
    <View style={styles.guessListContainer}>
      <FlatList
        data={guessList}
        renderItem={(itemData) => {
          return (
            <TouchableWithoutFeedback onPress={()=>{}}>
              <GuessItem
                nthGuess={guessList.length-itemData.index}
                currGuess={itemData.item}
              />
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={(item) => item}
        contentContainerStyle={{flexGrow: 1}}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  guessListContainer: {
    height: 300,
  },
});
