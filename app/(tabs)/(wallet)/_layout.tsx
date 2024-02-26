import { Ionicons } from '@expo/vector-icons'
import { Stack, router, useRouter } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Layout = () => {

  const router = useRouter()

  return (
   <Stack>
    <Stack.Screen name='walletHome' options={{headerShown: false,  
    }} />
   </Stack>
  )
}

export default Layout 