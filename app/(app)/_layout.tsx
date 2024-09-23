import {Redirect, Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function AppLayout() {
  const insets = useSafeAreaInsets()
  const token = 'asdasd';

  if (!token) {
    return <Redirect href={'/login'} />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light"/>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'none',
          }
        }}>
          <Stack.Screen name="index" options={{
            contentStyle: {
              backgroundColor: "transparent",
              paddingTop: insets.top
            }
          }} />
          <Stack.Screen name="qrscanner" options={{
            contentStyle: {
              backgroundColor: 'transparent',
              padding: 0,
            }
          }} />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
