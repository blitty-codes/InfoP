import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../../config/style-conf';

export default StyleSheet.create({
  container: {
    display: "flex",
    color: COLOR_PRIMARY,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 200,
    marginTop: 150,
    marginLeft: 5,
    padding: 5,
    borderColor: COLOR_PRIMARY,
    borderWidth: 1,
    margin: 20,
  },
});
