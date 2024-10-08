import {LinearGradient} from "expo-linear-gradient";
import Schedule from "../../shared/Schedule/Schedule";

export default function App() {
    return (
        <LinearGradient className="flex-1" colors={['#462ab2', '#1e124c']}>
            <Schedule/>
        </LinearGradient>
    )
}