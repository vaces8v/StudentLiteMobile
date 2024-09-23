import {Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import * as Animatable from 'react-native-animatable';

export function Button(props: TouchableOpacityProps & {text: string}) {
    return (
        <Animatable.View animation="fadeIn" easing="ease-out" duration={3000}>
            <TouchableOpacity style={styles.button} {...props}>
                <Animatable.Text
                    animation="zoomIn"
                    duration={500}
                    easing="ease-in-out"
                    style={styles.text}>
                    {props.text}
                </Animatable.Text>
            </TouchableOpacity>
        </Animatable.View>
    );
}

export const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        backgroundColor: '#0BC1CC',
        borderRadius: 10,
    },
    text: {
        marginTop: 5,
        fontSize: 20,
        color: "#FFF",
        fontFamily: "PoppinsSemiBold"
    }
})