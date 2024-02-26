import Colors from '@/constants/Colors'
import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import KeyPad from './KeyPad'

const categories = [
    {name: 'Movies'},
    {name: 'Groceries'},
    {name: 'Resturaunts'},
    {name: 'Gas'},
    {name: 'Other'}
]

interface Props  {
    amount: string;
    onChange: any,
    index: number
}

const SendAmount = ({amount, onChange, index}: Props) => {

    const scrollRef = useRef<ScrollView>(null);
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const selectCategory = (index: number) => {
      const selected = itemsRef.current[index];
      setActiveIndex(index);
      selected?.measure((x) => {
        scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
      });

      
    };

    const convertToDollars = (currentAmount: string) => {
        let num = parseInt(currentAmount)
        const newAmount = num / 100
        
        const newString = newAmount.toLocaleString('en-US', { style: "currency", currency: "USD"})
        
        if (currentAmount.length >= 10) {
            console.log(num);
            console.log(currentAmount);
            
            return num.toLocaleString('en-US', { style: "currency", currency: "USD"})
        }
        
        return newString
    }
  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center'}}> 
            <Text style={styles.text}>Amount</Text>
             <Text style={styles.price}>{convertToDollars(amount)}</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
                    <TouchableOpacity key={index}
                    onPress={() => selectCategory(index)} 
                    ref={(el) => itemsRef.current[index] = el}
                    style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}>
                      <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
        </ScrollView>
            <TextInput style={styles.input} placeholder='Write Comment...' maxLength={30}/>
        <KeyPad onChange={onChange} index={index}/>
        <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Send {convertToDollars(amount)}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SendAmount

const styles = StyleSheet.create({
    container: {
        marginVertical: 50
    },
    text: {
        color: '#fff',
        fontFamily: 'gil',
        fontSize: 24
    },
    price: {
        marginVertical: 20,
        color: '#fff',
        fontFamily: 'gil-b',
        fontSize: 70
    },
    categoriesBtn: {
        backgroundColor: Colors.grey,
        borderRadius: 20,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginRight: 10
    },
    categoriesBtnActive: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginRight: 10
    },
    categoryText: {
        color: '#fff'
    },
    categoryTextActive: {
        color: '#fff'
    },
    input: {
        marginVertical: 10,
        backgroundColor: Colors.grey,
        height: 60,
        borderRadius: 20,
        textAlign: 'center',
        color: '#fff'
    }, 
    submitBtn: {

        backgroundColor: Colors.primary,
        borderRadius: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        alignSelf: 'center'
    },
    submitText: {
        color: '#fff',
        fontFamily: 'gil-b',
        fontSize: 20
    }
})

