import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import { defaultStyles } from '../../constants/Styles'
import useWarmUpBrowser from '../../hooks/useWarmUpBrowser'
import { useSignIn } from '@clerk/clerk-expo'
import { router } from 'expo-router'

const Login = () => {
  useWarmUpBrowser()

  const { signIn, setActive, isLoaded } = useSignIn();
 
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
 
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      router.push('/(tabs)/(wallet)/walletHome')
    } catch (err: any) {
      console.log(err);
    }
  };



  return (
    <View style={styles.container}>
        <TextInput 
        autoCapitalize='none' 
        placeholder='Email' 
        placeholderTextColor="gray"
        style={[defaultStyles.inputField, {marginTop: 140}]}
        value={emailAddress}
        onChangeText={(emailAddress) => {setEmailAddress(emailAddress)}} 
      />
        <TextInput 
        autoCapitalize='none' 
        placeholder='Password' 
        placeholderTextColor="gray"
        style={[defaultStyles.inputField, {marginTop: 15}]}
        value={password}
        onChangeText={(password) => {setPassword(password)}} 
        secureTextEntry
      />

      <TouchableOpacity style={[defaultStyles.btn, {marginTop: 20}]} onPress={() => onSignInPress()}>
        <Text style={defaultStyles.btnText}> Sign In </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[defaultStyles.btn, {marginTop: 10}]}>
        <Text style={defaultStyles.btnText}> Sign Up </Text>
      </TouchableOpacity>

   </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: 'center'
  }
})