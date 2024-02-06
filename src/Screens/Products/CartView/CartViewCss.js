import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

export const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    textStyle: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold'
    },
    componentStyle: {
        backgroundColor: '#FFF',
        width: width * .9,
        height: height * .2,
        margin: 15,
        overflow: 'hidden',
        borderRadius: 15,
        borderColor: '#f1f2f6',
        borderWidth: 0.1,
        elevation: 10,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
})