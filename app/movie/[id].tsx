import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useLocalSearchParams} from "expo-router";

export const MovieDetails = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>You selected movie: {id}</Text>
        </View>
    );
};

export default MovieDetails;
const styles = StyleSheet.create({})
