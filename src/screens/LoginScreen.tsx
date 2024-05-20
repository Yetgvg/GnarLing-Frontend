import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const LessonMap = ({ lessons, onPressLesson }: { lessons: string[], onPressLesson: (lesson: string) => void }) => {
    const getLessonStyle = (index: number) => {
        const position = index % 5;
        switch (position) {
            case 0: return styles.leftLesson;
            case 1: return styles.leftCenterLesson;
            case 2: return styles.centerLesson;
            case 3: return styles.rightCenterLesson;
            case 4: return styles.rightLesson;
            default: return styles.centerLesson;
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.mapContainer}>
                    {lessons.map((lesson, index) => (
                        <View key={index} style={styles.lessonContainer}>
                            <TouchableOpacity
                                style={[styles.lessonButton, getLessonStyle(index)]}
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
        marginLeft: 0,
        marginRight: 'auto',
    },
    leftCenterLesson: {
        backgroundColor: '#8A2BE2',
        marginLeft: '10%',
        marginRight: 'auto',
    },
    centerLesson: {
        backgroundColor: '#8A2BE2',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    rightCenterLesson: {
        backgroundColor: '#8A2BE2',
        marginLeft: 'auto',
        marginRight: '10%',
    },
    rightLesson: {
        backgroundColor: '#8A2BE2',
        marginLeft: 'auto',
        marginRight: 0,
    },
});

export default LessonMap;
