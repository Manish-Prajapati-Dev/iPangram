import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Styles } from './FlatListCss'
import Icon from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native'
import StarIC from "react-native-vector-icons/AntDesign"

const {width,height}=Dimensions.get('window')

function RenderItem({ item }) {

    let navigation = useNavigation()

    const handleFullView = (value) => {
        navigation.navigate('ProductFullView', { item: value.item })
    }

    return (
        <View key={item.id} style={Styles.componentStyle} >
            <TouchableOpacity activeOpacity={0.5} onPress={() => handleFullView(item)} >
                <Image source={{ uri: item.item.images[0] }} style={{ width: width * .3, height: height * .2, resizeMode: 'contain', borderRadius: 10, borderColor: '#f1f2f6', borderWidth: 0.2 }} />
            </TouchableOpacity>
            <View style={Styles.brandingText} >
                <Text style={Styles.componentText} >{item.item.brand.length > 15 ? `${item.item.brand.slice(0, 15)}...` : item.item.brand}
                </Text>
            </View>
            <View style={Styles.brandingText} >
                <Text style={Styles.componentText} >$ {item.item.price}/-</Text>
                <Text style={Styles.componentText} ><StarIC name="star" size={15} color="#f9ca24" />{item.item.rating} </Text>
            </View>
        </View>
    )
}

export default function FlatListCom({ data, clickSeeAll, heading }) {
    
    return (
        <View style={Styles.mainContainer} >
            <View style={Styles.heading}>
                <Text style={Styles.headingTitle} >{heading}</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={clickSeeAll} >
                    <View style={Styles.seeAll} >
                        <Text style={Styles.seeAllText} >See all</Text>
                        <Icon name={"keyboard-arrow-right"} size={15} color="#414141" />
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <RenderItem item={item} />}
                horizontal
            />
        </View>
    )
}