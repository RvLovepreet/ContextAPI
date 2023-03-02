import React from 'react';
import { useContext} from 'react';
import {myContext,myContext2} from '../App';
import { View,Text,SafeAreaView } from 'react-native';

export const ChildComponent = () => {
    const user = useContext(myContext);
    const user2 = useContext(myContext2);
    return (
        <SafeAreaView>
        <View>
            <Text>
            {user} {user2}
            </Text>
        </View>
        </SafeAreaView>
    )
}