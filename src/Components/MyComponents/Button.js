import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image, ActivityIndicator } from "react-native";
import ICON from "react-native-vector-icons/AntDesign"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Button = ({
  text,
  onPress,
  bordered,
  backgroundImage,
  type,
  position,
  iconName,
  iconSize,
  iconColor,
  backColor,
  textColor,
  textSize,
  btnWidth,
  btnHeight,
  imgWidth,
  imgHeight,
  imgRadius,
  disabled,
  loading
}) => {

  const bgColor = type === "img" ? "transparent" : type === "text" ? "blue" : backColor

  const txtColor = type === "text" ? "#FFF" : textColor

  const containerCommonStyle = {
    backgroundColor: bgColor,
    paddingVertical: 8,
    width: btnWidth,
    height: btnHeight,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row'
  };

  const textCommonStyle = {
    color: txtColor,
    fontSize: textSize,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold'
  };

  const border = {
    borderColor: bordered,
    borderWidth: 2,
  };

  const image = <Image style={{ width: imgWidth, height: imgHeight, borderRadius: imgRadius, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    source={backgroundImage} />

  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} disabled={disabled}>
        <View style={[containerCommonStyle, border]}>
          {type === 'img' ? image
            :
            type === "icon" ? <ICON name={iconName} size={iconSize} color={iconColor} /> : <Text style={[textCommonStyle]}> {text} </Text>}
          {loading ? <ActivityIndicator size="small" color="#FFF" /> : <></>}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Button