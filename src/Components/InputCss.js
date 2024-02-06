import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../Assets/Config/Colors';
const { width,height } = Dimensions.get("window");

export default StyleSheet.create({
    label: {
      marginTop: 5,
      fontSize: 15,
      fontFamily:'Poppins-Regular',
      color: Colors.black,
    },
    inputContainer: {
      height: 55,
      backgroundColor: Colors.white,
      flexDirection: 'row',
      paddingHorizontal: 15,
      borderWidth:1,
      borderColor:Colors.white,
      elevation:4
    },
  });
  