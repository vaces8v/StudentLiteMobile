import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import Cloudy from "@/assets/svg/weather/Cloudy";
import Burger from "@/assets/svg/Burger";
import {TouchableOpacity} from "react-native-gesture-handler";
import {CalendarDays} from "lucide-react-native";
import {useRouter} from "expo-router";
import {useThemeColor} from "@/hooks/useThemeColor";
import DatePicker from "@/shared/DatePicker/DatePicker";

const Header = () => {
    const color = useThemeColor({}, 'background');
    const router = useRouter();

    return (
        <View>
            <View style={styles.header} className="px-[5px]">
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
                <TouchableOpacity onPress={() => router.push('/weather')} activeOpacity={0.9} style={styles.weatherInfo}>
                    <Cloudy/>
                    <Text style={styles.temperature}>+15°</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scheduleHeader} className="px-[10px]">
                <View style={styles.scheduleTitle}>
                    <Burger/>
                    <Text style={styles.scheduleText}>Расписание</Text>
                </View>
                <DatePicker/>
            </View>

            <ScrollView
                className="flex flex-row w-full"
                style={{maxHeight: 80}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                    className="relative mb-[10px] flex flex-col justify-center items-center mx-[5px] rounded-[10px] h-full w-[60px]">
                    <Text className="text-white text-[20px]">09</Text>
                    <Text className="text-white">Пн</Text>
                    <View className="bottom-[5px] absolute w-[80%] rounded-full h-[2px] bg-white"></View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="relative mb-[10px] flex flex-col justify-center items-center mx-[5px] rounded-[10px] h-full w-[60px]">
                    <Text className="text-white text-[20px]">10</Text>
                    <Text className="text-white">Вт</Text>
                    <View className="bottom-[5px] absolute w-[80%] rounded-full h-[2px] bg-white"></View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="relative mb-[10px] flex flex-col justify-center items-center mx-[5px] rounded-[10px] h-full w-[60px]">
                    <Text className="text-[#00F0FF] text-[20px]">11</Text>
                    <Text className="text-[#00F0FF]">Ср</Text>
                    <View className="bottom-[5px] absolute w-[80%] rounded-full h-[2px] bg-[#00F0FF]"></View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="relative mb-[10px] flex flex-col justify-center items-center mx-[5px] rounded-[10px] h-full w-[60px]">
                    <Text className="text-white text-[20px]">12</Text>
                    <Text className="text-white">Чт</Text>
                    <View className="bottom-[5px] absolute w-[80%] rounded-full h-[2px] bg-white"></View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="relative mb-[10px] flex flex-col justify-center items-center mx-[5px] rounded-[10px] h-full w-[60px]">
                    <Text className="text-white text-[20px]">13</Text>
                    <Text className="text-white">Чт</Text>
                    <View className="bottom-[5px] absolute w-[80%] rounded-full h-[2px] bg-white"></View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="relative mb-[10px] flex flex-col justify-center items-center mx-[5px] rounded-[10px] h-full w-[60px]">
                    <Text className="text-white text-[20px]">14</Text>
                    <Text className="text-white">Сб</Text>
                    <View className="bottom-[5px] absolute w-[80%] rounded-full h-[2px] bg-white"></View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Header;

const styles= StyleSheet.create({
    logo: {
        height: 40,
        width: 190,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temperature: {
        color: 'white',
        fontSize: 24,
    },
    scheduleHeader: {
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    scheduleTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scheduleText: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10,
    },
    datePicker: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3
    },
    dateText: {
        color: 'white',
        fontSize: 18,
    },
    lessonsContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        alignItems: 'center',
    },
});
