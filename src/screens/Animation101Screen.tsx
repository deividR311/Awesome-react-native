import React from 'react';
import { StyleSheet, View } from 'react-native';

const Animation101Screen = () => {
return (
    <View style={{ flex: 1 }}>
        <View style={ styles.purpleBox } />
    </View>
);
};

export default Animation101Screen;

export const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: 'green',
        width: 150,
        height: 150,
    },
});
