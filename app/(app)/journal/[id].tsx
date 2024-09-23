import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, Text } from 'react-native';

const data = [
    {
        id: 1,
        title: 'We suffer more often in imagination than in reality',
        author: "Seneca",
        backgroundColor: '#F8B195'
    },
    {
        id: 2,
        title: 'Every 60 seconds in Africa, a minute passes.',
        author: "Master Oogway",
        backgroundColor: '#F67280'
    },
    {
        id: 3,
        title: 'You have power over your mind – not outside events. Realize this, and you will find strength.',
        author: "Marcus Aurelius",
        backgroundColor: '#C06C84'
    },
    {
        id: 4,
        title: 'No person is free who is not master of himself.',
        author: "Epictetus",
        backgroundColor: '#6C5B7B'
    },
];

const SwiperComponent = () => {
    return (
        <View style={styles.container}>
            <Swiper
                dotColor="#fff"
                activeDotColor="#fff"
                loop={false}
                showsButtons={true}
                buttonWrapperStyle={styles.buttonWrapper}
                nextButton={<Text style={styles.buttonText}>Next</Text>}
                prevButton={<Text style={styles.buttonText}>Prev</Text>}
            >
                {data.map((slide) => (
                    <View key={slide.id} style={[styles.slide, { backgroundColor: slide.backgroundColor }]}>
                        <Text style={styles.slideText}>{slide.title}</Text>

                        <Text style={styles.authorText}>--- {slide.author}</Text>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

export default SwiperComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 75,
    },
    slideText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    authorText: {
        fontSize: 15,
        color: '#fff',
        marginTop: 10,
    },
    buttonWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
