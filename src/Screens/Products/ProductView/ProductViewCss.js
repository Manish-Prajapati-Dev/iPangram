import { StyleSheet,  Dimensions } from "react-native"

const {width,height}=Dimensions.get('window')

export const Styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:'#FFF',
    },
    textStyle: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold'
    },
    componentStyle: {
        backgroundColor:'#FFF',
        width: width * .45,
        height: height * .3,
        margin: 5,
        overflow: 'hidden',
        borderRadius: 5,
        borderColor: '#f1f2f6',
        borderWidth: 0.1,
        elevation:5,
        shadowColor:'rgba(0,0,0,0.5)'
    }
})