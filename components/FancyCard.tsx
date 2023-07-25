/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.hindustantimes.com/img/2021/02/26/1600x900/da9521fc-71d1-11eb-8939-d4b1171d1bb1_1613643704264_1614331654096.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Varanasi</Text>
          <Text style={styles.cardLable}>Uttar Pradesh</Text>
          <Text style={styles.cardDescription}>Varanasi is one of the oldest continuously inhabited city on earth. The city gets its name from two rivers — Varuna and Assi — which meet there.</Text>
          <Text style={styles.cardFooter}>2 hrs Away</Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 16,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardLable:{},
  cardDescription:{},
  cardFooter:{},
});
