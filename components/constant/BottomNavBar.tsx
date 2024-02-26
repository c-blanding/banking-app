import React from 'react'
import { View, StyleSheet } from 'react-native'

const BottomNavBar = () => {
  return (
    <View style={styles.navContainer}>
        <View style={styles.navBar}>

        </View>
    </View>
  )
}

export default BottomNavBar

const styles = StyleSheet.create({
    navContainer: {
      position: 'absolute',
      alignContent: 'center',
      bottom: 20,

    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40
    }
})