import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const KeyPad = ({onChange, index}) => {
  
  return (
    <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('1', index)} >
            <Text style={styles.rowText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('2', index)}>
            <Text style={styles.rowText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('3', index)}>
            <Text style={styles.rowText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('4', index)}>
            <Text style={styles.rowText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('5', index)}>
            <Text style={styles.rowText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('6', index)}>
            <Text style={styles.rowText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('7', index)}>
            <Text style={styles.rowText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('8', index)}>
            <Text style={styles.rowText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('9', index)}>
            <Text style={styles.rowText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, {justifyContent: "center", alignItems:'flex-end'}]}>
          <View style={styles.btn}>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => onChange('0', index)}>
            <Text style={styles.rowText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {alignSelf: "flex-end"}]} onPress={() => onChange('10', index)}>
            <Ionicons name='chevron-back' size={60} color={'#fff'}/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default KeyPad

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  rowText: {
    fontFamily: 'gil-b',
    color: '#fff',
    fontSize: 60
  },
  btn: {
    width: '33%',
    alignItems: 'center'
  }
})