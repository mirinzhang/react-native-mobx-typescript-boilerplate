import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation } from 'utils/uiDecorator';

@navigation('Setting')
export default class Profile extends Component<{}, {}> {
    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        );
    }
}