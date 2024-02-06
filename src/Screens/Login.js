import React, { useState } from 'react';
import Input from '../Components/Input';
import {
  View,
  Text,
  Keyboard,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
import Header from '../Components/Header';
import Button from '../Components/MyComponents/Button';
import Colors from '../Assets/Config/Colors';

const { width, height } = Dimensions.get('window')

export default function Login({ navigation, props }) {

  const [isLoading, setIsLoading] = React.useState(false)

  const [inputs, setInputs] = React.useState({
    userEmail: '',
    userPassword: '',
  });

  const validate = (inputs) => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.userEmail) {
      alert('Please input email id', 'userEmail');
      isValid = false;
    }
    if (!inputs.userPassword) {
      alert('Please input Password', 'userPassword');
      isValid = false;
    }
    if (isValid) {
      let body = { userEmail: inputs.userEmail, userPassword: inputs.userPassword }
      if(body.userEmail === "manish@ipangram.com" && body.userPassword === '123456')
      {
        alert("Login success fully")
      }
      else{
        alert("Login failed")
      }
    }
  };

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <StatusBar backgroundColor='#30336b' barStyle='light-content' />
      <Header
        title="Login"
      />
      <ImageBackground source={require('../Assets/images/wall.webp')} blurRadius={5}>
      <ScrollView contentContainerStyle={{ justifyContent:'center',alignItems:'center',flex:1 }} >
        <View style={{
          alignSelf: 'center', height: height * .45, width: width * .9, backgroundColor: '#FFF', elevation: 15, borderRadius: 20, shadowColor: 'rgba(0,0,0,0.2)',
          justifyContent: 'center',
          padding: 20, margin: width * .2 / 4
        }} >
          <Input
            inputText={true}
            onChangeText={text => handleOnChange(text, 'userEmail')}
            iconName="card-account-details-star-outline"
            label="Email Id"
            placeholder="Enter your Email Id"
          />
          <View style={{ marginVertical: 5 }} />
          <Input
            inputText={true}
            password
            keyboardType="defult"
            onChangeText={text => handleOnChange(text, 'userPassword')}
            iconName="key"
            label="Password"
            placeholder="Enter your Password"
          />
          <View style={{ marginVertical: 5 }} />
          <Button
            text={isLoading ? "" : "Login"}
            textColor={Colors.white}
            bordered={Colors.darkslategrey}
            backColor={Colors.darkslategrey}
            onPress={() => validate(inputs)}
            color="red"
            loading={isLoading ? true : false}
          />
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity >
              <Text style={{ color: Colors.BLueButton, fontWeight: 'bold' }}>
                Forget password
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.BLueButton,
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Show products without sign in ?
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Products')} >
              <Text
                style={{
                  color: Colors.BLueButton,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}
