/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Contacts = ["This", "Data", "Is Coming", "From an", "Array"]
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {
                    Contacts.map((item) => (
                        <View key={item} style={styles.userCard}>
                            <Text>{item}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginTop: 8,
    },
    container: {
        padding:16,
    },
    userCard: {
        padding:8,
        alignItems:'flex-end',
        backgroundColor:'#292929',
        marginBottom:8,
    },
})