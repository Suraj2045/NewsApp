import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header.js'
import Main from '../Screens/Main'
export default function MainPage() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Main />
        </View>
    )
}