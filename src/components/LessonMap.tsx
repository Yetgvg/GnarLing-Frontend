import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';



const LessonMap = ({ lessons, onPressLesson }: { lessons: string[], onPressLesson: (lesson: string) => void }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.mapContainer}>
                    {lessons.map((lesson, index) => (
                        <View key={index} style={styles.lessonContainer}>
                            <TouchableOpacity
                                style={[styles.lessonButton, index % 2 === 0 ? styles.leftLesson : styles.rightLesson]}
                                onPress={() => onPressLesson(lesson)}
                            >
                                <Text style={styles.lessonText}>Lição {index + 1}</Text>
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
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    mapContainer: {
        alignItems: 'center',
        marginBottom: '30%'
    },
    lessonContainer: {
        alignItems: 'center',
    },
    lessonButton: {
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
    },
    lessonText: {
        color: 'white',
        fontSize: 16,
    },
    leftLesson: {
        backgroundColor: '#8A2BE2',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginRight: screenWidth / 3,
    },
    rightLesson: {
        backgroundColor: '#8A2BE2',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: screenWidth / 3,
    },
});

export default LessonMap;
