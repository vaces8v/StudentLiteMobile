import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function QRCodeLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light"/>
        <Stack screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'none',
          }
        }}>
          <Stack.Screen name="qrscanner" options={{
            contentStyle: {
              backgroundColor: 'transparent',
              padding: 0,
            }
          }} />
        </Stack>
    </SafeAreaProvider>
  )
}
