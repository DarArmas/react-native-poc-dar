import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const MovieDetails = () => {
    const {id} = useLocalSearchParams();

    return (
        <View>
            <Text>Movie details: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default MovieDetails;