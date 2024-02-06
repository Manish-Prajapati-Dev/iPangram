import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { Styles } from './CartViewCss'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Components/MyComponents/Button'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

export default function CartView() {
    const dispatch = useDispatch()

    const navigation = useNavigation()

    const { cart } = useSelector(state => state)
    const [cartData, setCartData] = React.useState([])
    const [noData, setNoData] = useState(true)

    React.useMemo(() => {
        if (cart !== undefined) {
            setCartData([...Object.values(cart)])
            if (Object.keys(cart).length > 0) {
                setNoData(false)
            }
            else {
                setNoData(true)
            }
        }
    }, [cart])

    const handleRemoveItem = (val) => {
        dispatch({ type: 'REMOVE_CART', payload: val.id })
    }

    return (
        <View style={Styles.mainContainer} >
            {noData ?
                <View style={{ ...Styles.componentStyle, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
                    <Text style={Styles.textStyle} >No data found</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Button
                            text={"Go Back"}
                            btnWidth={width * .4}
                            textColor={'#000'}
                            bordered={'#f1f2f6'}
                            backColor={'#FFF'}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </View>
                :
                <FlatList
                    data={cartData}
                    keyExtractor={(i) => i.id}
                    contentContainerStyle={{ alignSelf: 'center' }}
                    renderItem={(item) => {
                        const image = item.item.images[0]
                        return (
                            <View style={Styles.componentStyle}>
                                <TouchableOpacity activeOpacity={0.8}>
                                    <View style={{ width: width, flexDirection: 'row' }}>
                                        <View>
                                            <Image source={{ uri: image }} width={width * .4} height='100%' style={{ resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }} >
                                            <View style={{ margin: 5 }} >
                                                <Text style={Styles.textStyle}>Brand: {item.item.brand}</Text>
                                                <Text style={Styles.textStyle}>Price: ${item.item.price}/-</Text>
                                            </View>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Button
                                                    text={"Remove"}
                                                    btnWidth={width * .4}
                                                    textColor={'#FFF'}
                                                    bordered={'#d35400'}
                                                    backColor={'#d35400'}
                                                    onPress={() => handleRemoveItem(item.item)}
                                                    loading={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />}
        </View>
    )
}
