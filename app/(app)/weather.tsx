import React from 'react';
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import TestWeather from "@/assets/svg/weather/TestWeather";

const Weather = () => {
    return (
        <LinearGradient colors={['#462ab2', '#1e124c']} className="flex flex-1 justify-center items-center">
            <TestWeather/>
        </LinearGradient>
    );
};

export default Weather;