import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import Colors from '../Assets/Config/Colors';
import ICON from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './InputCss';

const Input = ({
  label,
  iconName,
  widthD,
  heightD,
  password,
  placeholder,
  inputText,
  disable,
  maxLength,
  ...props
}) => {

  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <View
        style={{
          ...style.inputContainer,
          borderWidth: 1,
          alignItems: 'center',
          borderRadius: 15,
          width: widthD,
          height: heightD
        }}>
        <ICON
          name={iconName}
          style={{
            color:'#000',
            fontSize: 22,
            marginRight: 10,
          }}
        />
        {inputText ? (
          <TextInput
            autoCorrect={false}
            placeholder={placeholder}
            maxLength={maxLength}
            placeholderTextColor="grey"
            disableFullscreenUI={disable}
            secureTextEntry={hidePassword}
            style={{ color: Colors.darkblue, flex: 1,fontFamily:'Poppins-Regular' }}
            {...props}
          />
        ) : null}
        {password && (
          <ICON
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{ color: Colors.darkblue, fontSize: 22 }}
          />
        )}
      </View>
    </View>
  );
};

export default Input;
