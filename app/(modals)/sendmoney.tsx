import SendAmount from '@/components/sendMoney/SendAmount'
import TransferHeader from '@/components/sendMoney/TransferHeader'
import Colors from '@/constants/Colors'
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

const sendMoney = () => {

  const [amount, setAmount] = useState("0");
  const [index, setIndex] = useState(0);

  const onAmountChange = (item: string, index: number) => {
    setAmount(prev => {
      if (item === '10') {
        
        if (prev.length === 1) {
          setIndex(0)
          return "0"
        }
        setIndex(index - 1)
        
        return prev.slice(0, prev.length - 1 )
      }
      setIndex(index + 1)
  

      if(index >= 8) {
        setIndex(0)
      }
      
      return index != 8 ? prev + item : prev.slice(0, prev.length - 8 )
    })
  }

  return (
    <View style={styles.container}>
        <TransferHeader />
        <SendAmount amount={amount} onChange={onAmountChange} index={index}/>
    </View>
  )
}

export default sendMoney

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        height: '100%'
    },
})