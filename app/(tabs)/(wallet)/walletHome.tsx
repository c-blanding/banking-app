import { UserProfile } from '@clerk/clerk-react'
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Colors from '@/constants/Colors'
import profile from '@/constants/images'
import { useUser } from '@clerk/clerk-expo'
import WalletHeader from '@/components/wallet/WalletHeader'
import BalanceInfo from '@/components/wallet/BalanceInfo'
import BottomSheet from '@gorhom/bottom-sheet'
import { useMemo, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import BottomSheetInfo from '@/components/wallet/BottomSheetInfo'

const Page = () => {

    const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const snapPoints = useMemo(() => ['50%', '70%', '90%'], [])

  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  return (

        <SafeAreaView style={styles.container}>
            <WalletHeader user={user} />
            <BalanceInfo balance={965.44}/>
            <BottomSheet 
              snapPoints={snapPoints}
              backgroundStyle={{backgroundColor: '#292A2F'}}
              handleIndicatorStyle={{backgroundColor: Colors.secondary}}
              >
              <BottomSheetInfo />
            </BottomSheet>
        </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        height: '100%'
    },
    bottomSheetContainer: {
      backgroundColor: Colors.secondary
    } 

  
   
   

}) 

export default Page