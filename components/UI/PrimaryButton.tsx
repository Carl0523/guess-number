import { StyleSheet, View, Text, Pressable } from "react-native";

export default function PrimaryButton({
  text,
  color,
  backgroundColor,
  action,
}) {
  return (
    <Pressable onPress={action} style={({pressed}) => pressed && styles.pressed}>
      <View
        style={{ ...styles.buttonContainer, backgroundColor: backgroundColor }}
      >
        <Text style={{ ...styles.buttonText, color: color }}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'handjet-regular',
  },
  pressed : 
  {
    opacity: 0.75,
  }
});
