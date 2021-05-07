import Constants from 'expo-constants';
import { StyleSheet } from "react-native";

const scrollViewStyle = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollViewContainer: {
    // backgroundColor: "pink",
    marginHorizontal: 20,
  },
})

export default scrollViewStyle;
