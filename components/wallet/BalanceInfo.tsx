import { Feather, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BalanceInfo = ({balance}) => {

    const router = useRouter()

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Available Balance</Text>
            <Text style={styles.money}>${balance}</Text>
        </View>
        <View style={styles.btnContainer}>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btn}>
                <Ionicons name='md-link-outline' size={30} style={{color: '#FFF'}}/>  
                </TouchableOpacity>
                <Text style={styles.btnText}>Linked Cards</Text>
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btn} onPress={() => {router.push('/(modals)/sendmoney')}}>
                <Feather name="arrow-up-right" size={30} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.btnText}>Send money</Text>
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btn}>
                <Ionicons name='md-add-outline' size={30} style={{color: '#FFF'}}/>  
                </TouchableOpacity>
                <Text style={styles.btnText}>Add money</Text>
            </View>
               
        </View>
    </View>
  )
}

export default BalanceInfo

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        color: '#fff',
        fontFamily: 'gil',
        fontSize: 16,
        marginTop: 50,
        textAlign: 'center'
    },
    money: {
        marginTop: 20,
        color: '#fff',
        fontFamily: 'gil-b',
        fontSize: 60,
    },
    btnContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        gap: 65
    },
    btn: {
        backgroundColor: '#292A2F',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        borderRadius:40
    },
    btnText: {
        color: '#fff',
        fontFamily: 'gil',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10
    },
    btnGroup: {
        alignItems: 'center'
    }

})