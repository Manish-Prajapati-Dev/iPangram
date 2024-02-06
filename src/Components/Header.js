import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './StyleHeader';
import BACK from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';

const Header = props => {

  const { cart } = useSelector(state => state)
  const [cartData, setCartData] = useState(0)

  React.useMemo(() => {
    if (cart !== undefined) {
      setCartData(Object.keys(cart).length)
    }
  }, [cart])

  return (
    <View style={styles.MainView}>
      <View style={styles.view}>
        <View style={styles.subView}>
          <TouchableOpacity onPress={props.onPressLeft}>
            <View style={styles.backArrow}>
              <BACK name={props.leftIconName} size={25} color="#FFF" />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>{props.title}</Text>
        </View>
        <TouchableOpacity style={{ marginHorizontal: 30, alignItems: 'center', justifyContent: 'center',position:'relative' }} onPress={props.onPressRight}>
          <View >
            <Cart name={props.rightIconName} size={25} color="#FFF" />
            {props.rightIconName && <Text style={{ backgroundColor: '#fff', color: '#000', fontFamily: 'Poppins-SemiBold', fontSize: 12, position: 'absolute', zIndex: 9999,bottom:12,right:-20,padding:5,borderRadius:50,width:25,height:25,textAlign:'center'}} >{cartData}</Text>}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
