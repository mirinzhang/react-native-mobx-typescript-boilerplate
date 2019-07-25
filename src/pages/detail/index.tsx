import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation } from 'utils/uiDecorator';

interface Props {
    [key: string]: any;
}

@navigation('详情')
export default class Detail extends Component<Props, {}> {
    render() {
        return (
            <View>
                <Text>Detail</Text>
            </View>
        );
    }
}
