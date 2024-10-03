import { Pressable,View,Text,StyleSheet, TextBase } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import getFormatDate from '../../util/Date'
import { useNavigation } from "@react-navigation/native";
function ExpenseItem({id,description,date,amount}){
    const navigation=useNavigation()
    function ExpenseHandler(){
        navigation.navigate('ManageExpenses',{
            expenseId:id
        })
    }
    return(
        <Pressable onPress={ExpenseHandler} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.ExpenseItem}>
                <View>
                    <Text style={[styles.description,styles.TextBase]}>{description}</Text>
                    <Text style={styles.TextBase}>{date ? getFormatDate(date) : 'No date'}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem

const styles=StyleSheet.create({
    ExpenseItem:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{height:1,width:1},
        shadowOpacity:0.4
    },
    TextBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontWeight:'bold',
        marginBottom:4,
        fontSize:16
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        minWidth:80

    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    },
    pressed:{
        opacity:0.75
    }
})