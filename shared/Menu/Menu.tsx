import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity, Text} from "react-native";
import {Avatar} from "react-native-elements";
import HomeSvg from "../../assets/svg/Home";
import MailSvg from "../../assets/svg/Mail";
import WeatherSvg from "../../assets/svg/Weather";
import DrawerIconSvg from "../../assets/svg/DrawerIcon";
import {ChevronDown, QrCode} from 'lucide-react-native';
import {Animated} from "react-native";
import {usePathname, useRouter} from "expo-router";

const ScreenWidth = Dimensions.get("window").width;
const avatarSrc = '';

export function Menu() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const [disabledCurrentPath, setDisabledCurrentPath] = useState<string>('');
    const pathName = usePathname()
    const router = useRouter()

    useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: openMenu ? 1 : 0,
            duration: 190,
            useNativeDriver: true,
        }).start();
    }, [openMenu]);

    useEffect(() => {
        setDisabledCurrentPath(pathName)
    }, [pathName]);

    const animatedStyle = {
        transform: [{scale: scaleAnim}],
    };



    return (
        <View style={styles.navContainer}>
            <TouchableOpacity disabled={disabledCurrentPath === '/' ? true : false} onPress={() => router.push('/')}>
                <HomeSvg/>
            </TouchableOpacity>

            <TouchableOpacity
                disabled={disabledCurrentPath === '/weather' ? true : false}
                onPress={() => router.push('/weather')}>
                <WeatherSvg />
            </TouchableOpacity>

            {avatarSrc ? (
                <TouchableOpacity
                    disabled={disabledCurrentPath === '/profile' ? true : false}
                    onPress={() => router.push('/profile')}
                    style={styles.avatarContainer}>
                    <Avatar
                        size="medium"
                        source={{
                            uri: avatarSrc,
                        }}
                        imageProps={{
                            style: styles.avatarImage,
                        }}
                        icon={{name: 'user', type: 'font-awesome'}}
                    />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    disabled={disabledCurrentPath === '/profile' ? true : false}
                    onPress={() => router.push('/profile')}
                    style={styles.avatarContainerDefault}>
                    <Avatar
                        size="medium"
                        imageProps={{
                            style: styles.avatarDefault,
                        }}
                        icon={{name: 'user', type: 'font-awesome'}}
                    />
                </TouchableOpacity>
            )}
            <MailSvg/>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setOpenMenu(prev => !prev)}>
                <DrawerIconSvg/>
            </TouchableOpacity>

            <Animated.View style={[styles.menuContainer, animatedStyle, {overflow: openMenu ? "visible" : "hidden"}]}>
                <View className="relative ml-[5px] flex flex-col w-full h-full">
                    <Text className="text-white text-[20px] mt-[10px]">Меню</Text>
                    <TouchableOpacity
                        onPress={() => router.push('/qrscanner')}
                        className="gap-[5px] mt-[10px] flex flex-row items-center">
                        <QrCode color="#ffffff" size={32} />
                        <Text className="text-white text-[16px]">ВОЙТИ ПО КОДУ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="absolute top-[5px] right-[10px]"
                        onPress={() => setOpenMenu(false)}>
                        <ChevronDown size={42} className="text-white brightness-0" color={"white"}/>
                    </TouchableOpacity>
                </View>
            </Animated.View>

        </View>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        bottom: 0,
        paddingHorizontal: 10,
        height: 60,
        borderRadius: 41,
        marginBottom: 13,
        marginLeft: ScreenWidth / 100,
        width: '98%',
        backgroundColor: '#4A3767',
    },
    avatarContainer: {
        width: 45,
        height: 45,
        borderRadius: 50 / 2,
        overflow: 'hidden',
    },
    avatarContainerDefault: {
        width: 45,
        height: 45,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImage: {
        backgroundColor: 'none',
        width: '94%',
        height: '90%',
        marginLeft: '-3%'
    },
    avatarDefault: {
        backgroundColor: 'rgba(217, 217, 217, .1)',
    },
    menuContainer: {
        transformOrigin: "bottom-right",
        backgroundColor: '#4A3767',
        marginRight: 10,
        width: 180,
        height: 250,
        position: 'absolute',
        right: 0,
        top: -260,
        borderRadius: 20,
    }
});
