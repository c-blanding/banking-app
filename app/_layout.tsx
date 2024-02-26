import { ClerkProvider, useAuth, useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity, useColorScheme, StyleSheet } from 'react-native';

const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'gil' : require('../assets/fonts/Gilroy-Light.ttf'),
    'gil-b' : require('../assets/fonts/Gilroy-Extrabold.ttf')
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  
  
  return (
    <ClerkProvider publishableKey={CLERK_KEY!}>
      <RootLayoutNav />
    </ClerkProvider>
  ) 
}

function RootLayoutNav() {
 
  const router = useRouter();
  const colorScheme = useColorScheme();

  const {isLoaded, isSignedIn} = useAuth();

   useEffect(() => {
    
    if (isLoaded && !isSignedIn) {
        router.push('/(modals)/login')
    }
  
  }, [isLoaded]) 
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modals)/login"
          options={{
            presentation: 'modal',
            title: "Log in or Sign Up",
            headerTitleStyle: {
              fontFamily: "gil-b"
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name='close-outline' size={28} />
              </TouchableOpacity>
            )
          }} />
          <Stack.Screen name='(modals)/sendmoney'
           options={{headerShown: true, headerTransparent: true, headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='md-chevron-back-outline' size={28} color={'#fff'}/>
            </TouchableOpacity>
          )
        }}
 />
      </Stack>
  
  );
}


