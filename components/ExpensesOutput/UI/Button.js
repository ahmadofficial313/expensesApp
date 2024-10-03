import { View,Text,Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
function Button({children, onPress, mode, style}){
    return(
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
              <View style={[styles.buton, mode ==='flat' && styles.flat]}>
                <Text style={[styles.buttonText, mode ==='flat' && styles.flatText]}>
                    {children}
                </Text>
              </View>
            </Pressable>
        </View>
    )
}
export default Button;
const styles=StyleSheet.create({
    buton:{
        borderRadius:4,
        padding:8,
        backgroundColor:GlobalStyles.colors.primary500
    },
    flat:{
        backgroundColor:'transparent',
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    flatText:{
        color:GlobalStyles.colors.primary200
    },
    pressed:{
        backgroundColor:GlobalStyles.colors.primary100,
        borderRadius:4,
        opacity:0.75
    }
})