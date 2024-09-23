import {StyleSheet} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {Menu} from "@/shared/Menu/Menu";
import Schedule from "../../shared/Schedule/Schedule";

export default function App() {
  return (
    <LinearGradient colors={['#462ab2', '#1e124c']} style={styles.container}>
      <Schedule/>
      <Menu/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})