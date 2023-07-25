/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Action Cards</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>

                    </Text>
                </View>
                <Image source={{
                    uri: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                }}
                    style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem suscipit Voluptatem eveniet vitae accusamus est atque modi dignissimos, Voluptatem reprehenderit, molestias, doloribus ut obcaecati!</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://ayushmangarg.vercel.app/')}
                    >
                        <Text style={styles.socialLink}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 100,
    },
    bodyContainer: {},
    footerContainer: {},
    socialLink: {},
})