import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../../config/style-conf';

export default StyleSheet.create({
  container: {
    display: "flex",
    color: MAIN_COLOR,
    marginTop: "50px",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 200,
    marginLeft: 5,
    padding: 5,
    borderColor: MAIN_COLOR,
    borderWidth: 1,
    margin: 20,
  },
});
