import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import xboxLogo from '@/constants/images'



const Transactions = () => {
  return (
    <View style={styles.mainContainer}> 
        <View style={styles.container}>
            <Image src={'https://2.bp.blogspot.com/-J1jk8eLr6wc/XE4sZO6NaJI/AAAAAAAAHR8/OGM6hcWtzb84D5J58XWkZ0APtK5vOhIRwCK4BGAYYCw/s1600/Xbox%2Blogo%2B.png'} resizeMode='cover' style={styles.img}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Microsoft Store</Text>
                <Text style={styles.date}>June 22</Text>
            </View>
        </View>
        <Text style={styles.price}>-$65.50</Text>
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    container: {
        flexDirection: 'row',
    },
    img: {
        height: 50,
        width: 50
    },
    textContainer: {
        marginVertical: 10,
        marginHorizontal: 10

    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontFamily: "gil-b"
    },
    date: {
        color: '#fff',
        fontFamily: 'gil',
        fontSize: 14,
        marginVertical: 5
    },
    price: {
        marginVertical: 20,
        color: 'red',
        fontSize: 16,
        fontFamily: 'gil-b'
    }
})