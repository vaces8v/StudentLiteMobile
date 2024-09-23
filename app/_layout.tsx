import {Stack, SplashScreen} from "expo-router";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import {DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {StatusBar} from "expo-status-bar";
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const insets = useSafeAreaInsets()
    const [fontsLoaded] = useFonts({
        PoppinsMedium: require('../assets/fonts/PoppinsMedium.ttf'),
        PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
    })
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider value={DefaultTheme}>
            <SafeAreaProvider>
                <StatusBar style="light"/>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: '#462ab2',
                        }
                    }}>
                    <Stack.Screen name="login" options={{
                        contentStyle: {
                            backgroundColor: '#462ab2',
                            paddingTop: insets.top + 10
                        }
                    }}/>
                    <Stack.Screen name="email" options={{
                        contentStyle: {
                            backgroundColor: '#462ab2',
                            paddingTop: insets.top + 10
                        }
                    }}/>
                </Stack>
            </SafeAreaProvider>
        </ThemeProvider>
    )
}