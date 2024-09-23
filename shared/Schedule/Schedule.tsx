import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    RefreshControl,
    Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Cloudy from "../../assets/svg/weather/Cloudy";
import Burger from "../../assets/svg/Burger";
import {CalendarDays} from "lucide-react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
import {useRouter} from "expo-router";
import Lesson from "@/shared/Lesson/Lesson";
import Swiper from 'react-native-swiper';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Header from "@/shared/Header/Header";

const {width} = Dimensions.get('window');

const data = [
    [
        {
            id: 1,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 316",
            theme: "#41FFA4",
            lesson: "ОГСЭ.05.01 Физическая культура",
        },
        {
            id: 2,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 316",
            theme: "#D55CFF",
            lesson: "ОП.10 Численные методы",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 3,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 316",
            theme: "#3AF3FF",
            lesson: "ОП.10 Численные методы",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ],
    [
        {
            id: 1,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 316",
            theme: "#41FFA4",
            lesson: "ОГСЭ.05.01 Физическая культура",
        },
        {
            id: 2,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 316",
            theme: "#D55CFF",
            lesson: "ОП.10 Численные методы",
        },
        {
            id: 3,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 316",
            theme: "#3AF3FF",
            lesson: "ОП.10 Численные методы",
        },
        {
            id: 4,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 524",
            theme: "#FFED50",
            lesson: "МДК.11.01 Технология разработки и защиты баз данных",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 5,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 524",
            theme: "#3AF3FF",
            lesson: "ЕН.04 Экологические основы природопользования",
        },
    ],
    [
        {
            id: 3,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 316",
            theme: "#3AF3FF",
            lesson: "ОП.10 Численные методы",
        },
        {
            id: 4,
            timeStart: "8:20",
            timeEnd: "9:40",
            office: "Кабинет 524",
            theme: "#FFA235",
            lesson: "ОГСЭ.04 Иностранный язык в профессиональной деятельности",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ]
];


const Schedule: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const insets = useSafeAreaInsets().top

    return (
        <ScrollView style={{flex: 1}} refreshControl={<RefreshControl refreshing={loading} onRefresh={() => { /* handle refresh */ }} />} nestedScrollEnabled={true} className="h-screen" >
                <Header/>
                <View className="flex flex-1 mb-[30px]">
                    <Swiper
                        loop={false}
                        horizontal={true}
                        showsButtons={false}
                        showsPagination={false}
                        className="flex"
                        style={{ height: '100%' }}
                    >
                        {data.map((slide, index) => (
                            <View
                                key={index}
                                style={styles.slide}
                            >
                                {slide.map((lesson) => (
                                    <Lesson
                                        key={lesson.id}
                                        timeStart={lesson.timeStart}
                                        timeEnd={lesson.timeEnd}
                                        office={lesson.office}
                                        theme={lesson.theme}
                                        lesson={lesson.lesson}
                                        content={lesson.content}
                                    />
                                ))}
                            </View>
                        ))}
                    </Swiper>
                </View>
        </ScrollView>
    );
};

export default Schedule;

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
