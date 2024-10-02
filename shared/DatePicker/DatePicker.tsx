import React, {useState} from 'react';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {CalendarDays} from "lucide-react-native";
import {useRouter} from "expo-router";

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: 'date' | 'time') => {
        setShow(true);
        setMode(currentMode);
    };
    return (
        <TouchableOpacity onPress={() => showMode('date')} style={styles.datePicker}>
            <Text style={styles.dateText}>09.09 - 15.09</Text>
            <CalendarDays color={"#FFF"} size={28} strokeWidth={1}/>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    onChange={onChange}
                />
            )}

        </TouchableOpacity>
    );
};

export default DatePicker;

const styles = StyleSheet.create({
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
});
