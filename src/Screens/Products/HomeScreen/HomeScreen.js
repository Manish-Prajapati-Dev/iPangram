import { View, StatusBar, ScrollView, ActivityIndicator, RefreshControl, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import FlatListCom from '../../../Components/MyComponents/flatList/FlatListCom'
import { Styles } from './HomeScreenCss'

export default function HomeScreen({ navigation }) {

    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        apiCall()
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }

    const apiCall = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products")
            if (res) {
                let response = await res.json()
                setData((response.products))
                setLoading(false)
            }
            else {
                console.log("Error in api", res)
            }
        }
        catch (e) {
            console.log("Error", e)
            Alert.alert("Error", e)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        apiCall()
    }, [])

    const displayCategory = () => {
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        return uniqueCategories.map((item) => {
            const dd = data.filter((i) => { return (i.category === item) })
            return (<View>
                <FlatListCom
                    data={dd}
                    heading={item}
                    clickSeeAll={() => navigation.navigate("ProductView", {
                        item: dd
                    })}
                />
            </View>
            )
        })
    }

    return (
        <View style={Styles.mainContainer} >
            <StatusBar backgroundColor='#30336b' barStyle='light-content' />
            {!refreshing && <Header title="Products" rightIconName="shopping-cart" onPressRight={() => navigation.navigate('CartView')} />} 
            {loading ?
                <ActivityIndicator style={Styles.indicatorStyle} size='large' />
                :
                <ScrollView
                    contentContainerStyle={{ paddingVertical: StatusBar.currentHeight }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()}
                        style={{zIndex:9999}}
                        />}
                >
                    {displayCategory()}
                </ScrollView>
            }
        </View>
    )
}