import { Tabs, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Colors from "../../constants/Colors"
import { StyleSheet } from "react-native"
import { useUser } from "@clerk/clerk-expo"

const Layout = () => {

 
  
  return (
    <>
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 25,
        right: 20,
        elevation: 0,
        backgroundColor: Colors.secondary,
        borderRadius: 200,
        height: 85,
        borderTopColor: Colors.secondary,
      }
    }}>
      <Tabs.Screen name="index"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="trending-up" color={color} size={size} style={styles.icon}/>
        }} />
      <Tabs.Screen name="(wallet)"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="wallet-outline" color={color} size={size} style={styles.icon}/>
        }} />
      <Tabs.Screen name="settings"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} style={styles.icon}/>

        }} />

    </Tabs>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({
  icon: {
   marginVertical: 10,
  }
})