import {Redirect, Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Menu} from "@/shared/Menu/Menu";

export default function AppLayout() {
  const insets = useSafeAreaInsets()
  const token = 'sadas';

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
          <Stack.Screen name="weather" options={{
            contentStyle: {
              backgroundColor: "transparent",
              paddingTop: insets.top
            }
          }} />
          <Stack.Screen name="profile" options={{
            contentStyle: {
              backgroundColor: "transparent",
              paddingTop: insets.top
            }
          }} />
        </Stack>
        <Menu/>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
