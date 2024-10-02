import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image, ScrollView} from "react-native";
import {Avatar} from "react-native-elements";
import {Share2Icon} from "lucide-react-native";
import {VictoryBar, VictoryChart, VictoryTheme, VictoryAxis} from "victory-native";

const data = [
    {quarter: '\n', earnings: 0},
    {quarter: 'Физика', earnings: 16500},
    {quarter: 'МДК', earnings: 14250},
    {quarter: 'Английский', earnings: 19000},
    {quarter: 'Английский', earnings: 19000},
    {quarter: 'МДК.01.02', earnings: 19000}
];

export const ProfileComponent = () => {
    return (
        <View className="flex flex-1 flex-col">
            <View className="flex items-center justify-between flex-row px-[10px]">
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
                <TouchableOpacity className="flex items-center gap-[5px] flex-row">
                    <Text className="text-[26px] text-white">Профиль</Text>
                    <Share2Icon color="#FFF"/>
                </TouchableOpacity>
            </View>
            <View className="flex flex-row w-full mt-[20px] px-[10px]">

                <TouchableOpacity activeOpacity={.5} style={styles.avatarContainerDefault}>
                    <Avatar
                        size={120}
                        imageProps={{
                            style: styles.avatarDefault,
                        }}
                        icon={{name: 'user', type: 'font-awesome'}}
                    />
                </TouchableOpacity>

                <View className="flex flex-1 px-[20px]">
                    <Text className="text-[24px] text-white">Холин Вячеслав</Text>
                    <View className="flex flex-row justify-between">
                        <Text className="text-[20px] text-white">207ИС-22</Text>
                        <Text className="text-[20px] text-white">Студент</Text>
                    </View>
                </View>

            </View>

            <ScrollView horizontal className="p-[10px] mt-[-40px]">
                <VictoryChart
                    width={data.length * 100} theme={VictoryTheme.grayscale}>
                    <VictoryBar style={{
                        data: { fill: '#FFF' }
                    }}  data={data} x="quarter" y="earnings"/>
                    <VictoryAxis
                        style={{
                            axis: { stroke: '#fff' }, // Цвет оси
                            ticks: { stroke: '#fff' }, // Цвет меток
                            tickLabels: { fill: '#fff' }, // Цвет текста меток
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            axis: { stroke: '#fff' }, // Цвет оси Y
                            ticks: { stroke: '#fff' }, // Цвет меток
                            tickLabels: { fill: '#fff' }, // Цвет текста меток на оси Y
                        }}></VictoryAxis>
                </VictoryChart>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    containerChart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    },
    logo: {
        height: 40,
        width: 190,
    },
    avatarContainerDefault: {
        width: 120,
        height: 120,
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
});
