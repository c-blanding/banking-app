import { Fontisto } from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'

const TransferHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Transfer</Text>
            <View style={styles.profileHeader}>
                <View style={styles.mainContainer}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Image src='https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain' resizeMode='cover' style={styles.img}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>Robert Harris</Text>
                            <Text style={styles.bank}>Chase Bank</Text>
                        </View>
                    </View>
                    <View style={styles.cardInfo}>
                        <Fontisto name='visa' color={'white'} size={16} style={{marginBottom: 8, alignSelf: 'flex-end'}}/>
                        <Text style={styles.bank}>0332 3234 4423</Text>
                    </View>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default TransferHeader

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
    },
    mainContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },

    textContainer: {
        marginLeft: 10
    },
    profileHeader: {
        width: "80%",
        backgroundColor: '#292A2F',
        borderRadius: 100,
        height: 80,
        justifyContent: 'center'
    },
    cardInfo: {
        marginRight: 20,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'gil-b',
        marginBottom: 10
    },
    name: {
        color: '#fff',
        fontFamily: 'gil-b',
        marginBottom: 7
    },
    bank: {
        color: '#fff',
        fontFamily: 'gil'
    },

    img: {
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 100
    }
})