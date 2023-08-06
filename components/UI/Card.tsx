import {Colors} from '../../constants/Colors';
import { StyleSheet, View } from "react-native";

export default function Card({ children, style={} }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 16,
    padding: "5%",

    // Shadow for android
    elevation: 8,

    // Shadow for ios
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});
