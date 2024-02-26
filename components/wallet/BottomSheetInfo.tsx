import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Transactions from './Transactions'
import { ScrollView } from 'react-native-gesture-handler'

const BottomSheetInfo = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Transactions</Text>
        <ScrollView>
          <Transactions />
          <Transactions />
          <Transactions />
          <Transactions />
        </ScrollView>
    </View>
  )
}

export default BottomSheetInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'gil-b',
        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 20
    }
})
