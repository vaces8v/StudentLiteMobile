import {Dimensions, Text, View} from "react-native";
import {BlurView} from "expo-blur";

interface LessonProp {
    timeStart: string;
    timeEnd: string;
    lesson: string;
    office: string;
    content?: string;
    theme: string;
}

const screenWidth = Dimensions.get("window").width;

const Lesson = ({timeStart, timeEnd, lesson, office, content, theme}: LessonProp) => {
    return (
        <View className="rounded-[20px] mt-[10px] overflow-hidden w-[95%]">
            <BlurView intensity={20} className="flex py-[15px] flex-row w-full h-auto">
                <View className="flex px-[5px] h-auto justify-between">
                    <Text className="text-white">{timeStart} AM</Text>
                    <Text className="text-white">{timeEnd} AM</Text>
                </View>
                <View style={{backgroundColor: theme }} className={`w-[2px] h-full mx-[2px]`}></View>
                <View className="flex px-[5px] h-auto justify-between">
                    <Text style={{width: screenWidth/1.4, color: theme}} className={`flex-wrap font-bold text-[18px]`}>{lesson}</Text>
                    <Text style={{width: screenWidth/1.4}} className={`flex-wrap font-bold text-[16px] text-gray-300`}>{office}</Text>
                    {content && <Text style={{width: screenWidth/1.4}} className={`flex-wrap text-white text-justify`}>{content}</Text>}
                </View>
            </BlurView>
        </View>
    );
};

export default Lesson;