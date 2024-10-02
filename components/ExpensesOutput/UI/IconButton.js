import { View,Pressable, StyleSheet } from "react-native"
import {Ionicons} from '@expo/vector-icons'
function IconButton({color,size,onPress,name}){
    return(
         <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons color={color} size={size} name={name} />
            </View>
         </Pressable>
    )
}

export default IconButton
const styles=StyleSheet.create({

    buttonContainer:{
        margin:6,
        padding:8,
        borderRadius:24
    },
    pressed:{
        opacity:0.73
    }
})