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
                        React Native
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
                    <TouchableOpacity
                        onPress={() => openWebsite('https://ayushmangarg.vercel.app/')}
                    >
                        <Text style={styles.socialLink}>Visit Link</Text>
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
    card: {
        width: 330,
        height: 'auto',
        padding: 8,
        borderRadius: 4,
        marginVertical: 12,
        marginHorizontal: 16,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    elevatedCard: {
        backgroundColor: '#1f1f1f',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#111111',
    },
    headingContainer: {},
    headerText: {
        marginVertical: 8,
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    cardImage: {
        height: 180,
    },
    bodyContainer: {
        marginHorizontal:8,
        marginVertical:20,
    },
    footerContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:8,
    },
    socialLink: {
        color: '#eee',
        borderRadius:2,
        paddingVertical:8,
        width:140,
        textAlign:'center',
        borderWidth:0.5,
        borderStyle:'solid',
        borderColor:'#f6f6f6',
        fontWeight: 'bold',
        fontSize:14,
    },
})