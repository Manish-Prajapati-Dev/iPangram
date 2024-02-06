import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, ScrollView, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Styles } from './ProductViewCss'
import Header from '../../../Components/Header'
import Button from '../../../Components/MyComponents/Button'

const { width, height } = Dimensions.get('window')

function RenderItem({ item }) {

    const navigation = useNavigation()
    const image = item.item.images[0]

    const handleView = (item) => {
        navigation.navigate("ProductFullView", { item: item })
    }

    return (
        <View style={Styles.componentStyle}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleView(item.item)}>
                <View style={{ width: width * .45, flexDirection: 'column' }}>
                    <View>
                        <Image source={{ uri: image }} width={width * .45} height={height * .15} style={{ resizeMode: 'cover' }} />
                    </View>
                    <View style={{ margin: 5 }} >
                        <Text style={Styles.textStyle}>Brand: {item.item.brand}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <Text style={Styles.textStyle}>Price: ${item.item.price}/-</Text>
                            <Text style={Styles.textStyle}>Stock: {item.item.stock}</Text>
                        </View>
                        <Text style={{ ...Styles.textStyle }}>Description: {item.item.description.slice(0, 20)}...</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default function ProductView({ route }) {

    const { item } = route.params
    const navigation = useNavigation()
    const [products, setProducts] = React.useState([])
    const [isFetching, setFetching] = useState(false);
    const [page, setPage] = useState(1)

    React.useEffect(() => {
        let data = [...item]
        setProducts([...data])
    }, [])

    const handleLoadMore = () => {
        setFetching(false);
        setPage(() => page + 1);
        setTimeout(() => {
            setFetching(true)
        }, 1000)
    }

    return (
        <View style={Styles.mainContainer}>
            <Header title={`Products: ${products[0]?.category}`} rightIconName="shopping-cart" onPressRight={() => navigation.navigate('CartView')} />
            {
                products.length === 0 ?
                    <ActivityIndicator style={{ alignSelf: 'center' }} />
                    :
                    <FlatList
                        data={products}
                        style={{ flexDirection: 'column' }}
                        numColumns={2}
                        contentContainerStyle={{ alignItems: 'flex-start', alignSelf: 'center', paddingVertical: StatusBar.currentHeight }}
                        keyExtractor={(item) => item.id}
                        maxToRenderPerBatch={5}
                        scrollEventThrottle={16}
                        ListFooterComponent={isFetching ?
                            <View style={{ width: width * .9, justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ ...Styles.textStyle, fontSize: 25 }} >No more data</Text>
                            </View>
                            :
                            <View style={{ alignSelf: "center", width: width * .9, }}>
                                <ActivityIndicator size="large" color="#1f1f1f" />
                            </View>
                        }
                        onEndReached={() => handleLoadMore()}
                        onEndReachedThreshold={0}
                        renderItem={(item) => <RenderItem item={item} />}
                    />
            }
        </View>
    )
}
