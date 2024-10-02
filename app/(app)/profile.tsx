import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {ProfileComponent} from "@/shared/Profile/Profile";

export default function Profile() {
    return (
        <LinearGradient className="flex-1" colors={['#462ab2', '#1e124c']}>
            <ProfileComponent/>
        </LinearGradient>
    );
};
