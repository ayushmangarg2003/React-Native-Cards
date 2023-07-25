/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>You</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Can</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>These</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Cards</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Horizontaly</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>:)</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop:8,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop:8,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#3498DB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:4,
    marginHorizontal:8,
  },
  cardElevated: {
    elevation:4,
    shadowOffset:{
        width:4,
        height:4
    },
    shadowColor:'#222',
  },
});
