import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as Animatable from 'react-native-animatable';
import {IErrorNotification} from "./ErrorNotificationProps";

export const ErrorNotification = ({ message }: IErrorNotification) => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationType, setAnimationType] = useState("slideInDown");

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setAnimationType("slideOutUp");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleAnimationEnd = () => {
        if (animationType === "slideOutUp") {
            setAnimationType("slideInDown");
            setIsVisible(false);
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Animatable.View
            animation={animationType}
            duration={1000}
            easing="ease-in-out"
            style={styles.error}
            onAnimationEnd={handleAnimationEnd}
        >
            <Text style={styles.text}>{message}</Text>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#F64848',
        width: Dimensions.get("screen").width,
        padding: 15
    },
    text: {
        fontSize: 16,
        color: "#FFF",
        textAlign: "center"
    }
});