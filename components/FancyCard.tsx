/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.hindustantimes.com/img/2021/02/26/1600x900/da9521fc-71d1-11eb-8939-d4b1171d1bb1_1613643704264_1614331654096.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View style={styles.bodyBox}>
            <Text style={styles.cardTitle}>Varanasi,</Text>
            <Text style={styles.cardLable}>Uttar Pradesh</Text>
          </View>
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
    marginBottom: 8,
  },
  card: {
    width: 330,
    height: 'auto',
    borderRadius: 4,
    marginVertical: 12,
    marginHorizontal: 16,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardElevated: {
    backgroundColor: '#f5f5f5',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#111111',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 20,

  },
  cardBody: {
    paddingHorizontal: 8,
    paddingBottom: 4,
    gap: 10,
  },
  bodyBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
  },
  cardLable: {
    color: '#666',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
  },
  cardDescription: {
    color: '#222',
    fontSize: 14,
    textAlign: 'left',
  },
  cardFooter: {
    color: '#666',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
