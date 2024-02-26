import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const WalletHeader = ({ user }) => {
  return (
    <View style={styles.header}> 
        <Text style={styles.text}>
            My Wallet
        </Text>
        <TouchableOpacity>
            <Image 
            src={user.imageUrl} 
            resizeMode='cover' 
            style={styles.img}/>
        </TouchableOpacity>
    </View>
  )
}

export default WalletHeader

const styles = StyleSheet.create({
    img:{
        width: 45,
        height: 45,
        borderRadius: 200
      },
    text: {
        fontFamily: 'gil-b',
        fontSize: 24,
        color: '#fff'
       },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10
       },
    })