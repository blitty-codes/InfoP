import { StyleSheet } from 'react-native';

const filmCardStyle = StyleSheet.create({
  container: {
    borderWidth: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    width: "min-content",
    backgroundColor: "silver",
  },
  tinyLogo: {
    margin: "auto",
    width: 200,
    height: 250,
  },
  allText: {
    margin: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  description: {
    padding: 10,
  },
  decor: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  starStyle: {
    width: "fit-content",
    position: "absolute",
    right: 2,
  },
});

export default filmCardStyle;
