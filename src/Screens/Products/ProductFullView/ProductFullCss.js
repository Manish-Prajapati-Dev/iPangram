import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('window')

export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFF',
        flex: 1
    },
    textStyle: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    detailContainer: { padding: 10 },
    detailTextStyle: { flexDirection: 'row', justifyContent: 'space-between', width: width * .9 },
    imageConatiner: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        resizeMode: 'contain',
        overflow: 'hidden',
        margin: 'auto'
    },
    mT10:
    {
        marginTop: 5,
        marginBottom: 5
    }
})