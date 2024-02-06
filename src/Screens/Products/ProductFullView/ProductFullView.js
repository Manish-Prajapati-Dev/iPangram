import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Styles } from "./ProductFullCss"
import StarIC from 'react-native-vector-icons/AntDesign'
import Colors from '../../../Assets/Config/Colors'
import Button from '../../../Components/MyComponents/Button';
import Header from '../../../Components/Header'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const { width, height } = Dimensions.get('window')

export default function FullProductView({ route, }) {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [isBuyLoading, setIsBuyLoading] = useState(false)
    const [data, setData] = useState({})
    const [cartValue, setCartValue] = useState(false)

    const { item } = route.params
    console.log("item>", item)
    const image = item.images

    const handleImage = () => {
        return (
            image.map((itemImage) => {
                return (
                    <Image source={{ uri: itemImage }} width={width} height={height * .55} style={Styles.imageConatiner} />
                )
            })
        )
    }

    const handleAddCart = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            dispatch({ type: 'ADD_CART', payload: [data.id, data] })
        }, 1000)
    }

    const handleBuyNow = () => {
        setIsBuyLoading(true)
        setTimeout(() => {
            setIsBuyLoading(false)
            dispatch({ type: 'ADD_CART', payload: [data.id, data] })
            navigation.navigate("CartView")
        }, 1000)
    }

    React.useMemo(() => {
        setData(item)
    }, [item])

    const { cart } = useSelector(state => state)

    React.useMemo(() => {
        if (cart !== undefined) {
            setCartValue(Object.keys(cart).includes("" + item.id))
        }
    }, [cart])

    return (
        <View style={Styles.mainContainer}>
            <Header title={`${item.brand}`} onPressLeft={() => navigation.goBack()} leftIconName="chevron-back" rightIconName="shopping-cart" onPressRight={() => navigation.navigate('CartView')} />
            <ScrollView>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    {handleImage()}
                </ScrollView>
                <View style={Styles.detailContainer} >
                    <View style={Styles.mT10} />
                    <View style={Styles.detailTextStyle} >
                        <Text style={Styles.textStyle}>Title: {item.title}</Text>
                    </View>
                    <View style={Styles.mT10} />
                    <View style={Styles.detailTextStyle} >
                        <Text style={Styles.textStyle}>Price: {item.price}</Text>
                        <Text style={Styles.textStyle}>Discount: {item.discountPercentage}</Text>
                    </View>
                    <View style={Styles.mT10} />
                    <View style={Styles.detailTextStyle} >
                        <Text style={Styles.textStyle}>Stock: {item.stock}</Text>
                        <Text style={Styles.textStyle}>Rating: <StarIC name="star" size={17} color="#f9ca24" /> {item.rating}</Text>
                    </View>
                    <View style={Styles.mT10} />
                    <View style={Styles.detailTextStyle} >
                        <Text style={Styles.textStyle}>Description: {item.description}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }} >
                    {!cartValue && <Button
                        text={isBuyLoading ? '' : "Buy now"}
                        btnWidth={width * .45}
                        textColor={Colors.white}
                        bordered={'#8e44ad'}
                        backColor={'#8e44ad'}
                        onPress={() => handleBuyNow()}
                        loading={isBuyLoading ? true : false}
                    />}
                    <Button
                        text={isLoading ? '' : cartValue ? 'Check cart' : "Add cart"}
                        btnWidth={width * .45}
                        textColor={Colors.white}
                        bordered={'#2c3e50'}
                        backColor={'#2c3e50'}
                        onPress={!cartValue ? () => handleAddCart() : ()=>navigation.navigate("CartView")}
                        loading={isLoading ? true : false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}