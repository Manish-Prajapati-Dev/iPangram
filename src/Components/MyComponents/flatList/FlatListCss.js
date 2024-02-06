import {StyleSheet} from "react-native"

export const Styles = StyleSheet.create({
    mainContainer:{
        paddingTop:10
    },
    heading:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
    },
    seeAll:{
        flexDirection:'row',
        alignItems:'center',
    },
    seeAllText:{
        color:'#414141',
        fontSize:12,
        fontFamily:'Popping-Regular'
    },
    headingTitle:{
        color:'#000',
        fontSize:16,
        fontFamily:'Poppins-Regular',
        marginTop:8,
        textTransform:'capitalize'
    },
    componentStyle:{
        padding:5,
        marginLeft:5,
        backgroundColor:'#FFF',
        borderRadius:5,
        margin:15,
        elevation:5,
        shadowColor:'rgba(0,0,0,0.5)'
    },
    componentText:{
        color:'#000',
        fontFamily:'Poppins-Regular',
    },
    brandingText:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})