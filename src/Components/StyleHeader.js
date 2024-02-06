import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    MainView:
    {
        flex: 1,
        zIndex:99
    },
    view: {
        backgroundColor: '#30336b',
        width: width,
        height: height * .07,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subView: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily:'Poppins-Regular'
    },
})