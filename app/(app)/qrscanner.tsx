import {CameraType, CameraView, useCameraPermissions} from 'expo-camera';
import {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions} from 'react-native';
import {LogOut, Scan, SwitchCamera} from "lucide-react-native";
import {BlurView} from "expo-blur";
import * as Animatable from 'react-native-animatable';
import {useRouter} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";

const ScreenHeight = Dimensions.get("window").height;

export default function Qrscanner() {
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState<CameraType>('back');
    const router = useRouter()

    if (!permission) {
        return <View/>;
    }

    if (!permission.granted) {
        return (
            <LinearGradient
                colors={['#462ab2', '#1e124c']}
                className="flex flex-1 items-center justify-center">
                <View className="flex justify-center items-center h-[200px] w-[350px] overflow-hidden rounded-[20px]">
                    <BlurView intensity={30} className="h-[200px] w-[350px]">
                        <View className="flex justify-center items-center w-full h-full">
                            <Text className="text-white text-[20px]">Нужно разрешение</Text>
                            <Text className="text-white text-[20px]">для получения доступа к камере</Text>
                        </View>
                    </BlurView>
                </View>
                <TouchableOpacity onPress={requestPermission} className="mt-[10px] h-[50px] w-[350px] overflow-hidden rounded-[20px]">
                    <BlurView intensity={30} className="flex items-center justify-center h-[50px]">
                        <Text className="text-white text-[18px]">Получить доступ</Text>
                    </BlurView>
                </TouchableOpacity>
            </LinearGradient>
        );
    }

    const handleBarCodeScanned = (scanResult: { data: string }) => {
        Alert.alert("QR Code Scanned", `Data: ${scanResult.data}`);
    };

    function switchFacing() {
        if (facing === "front") {
            setFacing("back")
        } else {
            setFacing("front")
        }
    }

    return (
        <View className="flex flex-col flex-1 w-full h-full justify-center items-center">
            <CameraView
                className="flex justify-center items-center"
                style={styles.camera}
                facing={facing}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={handleBarCodeScanned}
            >
                <View className="flex items-center justify-center overflow-hidden w-[200px] h-[50px]"
                      style={{marginTop: ScreenHeight / 5, padding: 10, borderRadius: 20}}>
                    <BlurView
                        intensity={80}
                        tint="dark"
                        className="flex items-center justify-center"
                        style={{padding: 10, width: 320, height: 60}}>
                        <Text className="text-white text-[16px]">Отсканируйте QR-код</Text>
                    </BlurView>
                </View>
                <View
                    className="flex flex-1">
                    <Animatable.View
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite">
                        <Scan color="#ffffff" strokeWidth={.25} size={350}/>
                    </Animatable.View>
                </View>

                <View style={styles.buttonContainer}>
                    <View className="flex items-center justify-center overflow-hidden w-[80px] h-[80px]"
                          style={{marginTop: ScreenHeight / 5, padding: 10, borderRadius: 100}}>
                        <BlurView
                            intensity={80}
                            tint="dark"
                            className="flex items-center justify-center mb-[-10px]"
                            style={{padding: 10, width: 110, height: 100}}>
                            <TouchableOpacity
                                onPress={switchFacing}
                                className="flex items-center justify-center">
                                <SwitchCamera className="mr-[2px] mb-[10px]" color="#ffffff" size={60}
                                              strokeWidth={0.75}/>
                            </TouchableOpacity>
                        </BlurView>
                    </View>
                    <View className="flex items-center justify-center overflow-hidden w-[80px] h-[80px]"
                          style={{marginTop: ScreenHeight / 5, padding: 10, borderRadius: 100}}>
                        <BlurView
                            intensity={80}
                            tint="dark"
                            className="flex items-center justify-center mb-[-10px]"
                            style={{padding: 10, width: 110, height: 100}}>
                            <TouchableOpacity
                                onPress={() => router.push('/')}
                                className="flex items-center justify-center">
                                <LogOut className="mb-[10px] ml-[5px]" color="#ffffff" size={50} strokeWidth={0.75}/>
                            </TouchableOpacity>
                        </BlurView>
                    </View>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    message: {
        fontSize: 20,
        color: "white",
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "100%",
        backgroundColor: 'transparent',
        marginBottom: 80
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    blurView: {
        marginTop: 10,
        padding: 10,
    },
});
