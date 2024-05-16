import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const LessonMap = ({ lessons, onPressLesson }: { lessons: string[], onPressLesson: (lesson: string) => void }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mapa de Lições</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.mapContainer}>
                    {lessons.map((lesson, index) => (
                        <View key={index} style={styles.lessonContainer}>
                            {index !== 0 && <View style={styles.line} />}
                            <TouchableOpacity style={styles.lessonButton} onPress={() => onPressLesson(lesson)}>
                                <Text style={styles.lessonText}>Lições {index + 1}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    mapContainer: {
        alignItems: 'center',
    },
    lessonContainer: {
        alignItems: 'center',
    },
    line: {
        position: 'absolute',
        width: 2,
        height: '100%',
        backgroundColor: '#8A2BE2',
        left: screenWidth / 2 - 1,
    },
    lessonButton: {
        backgroundColor: '#8A2BE2',
        padding: 15,
        marginVertical: 30,
        borderRadius: 10,
    },
    lessonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LessonMap;
