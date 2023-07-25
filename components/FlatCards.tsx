/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.redBox, styles.box]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.yellowBox, styles.box]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.greenBox, styles.box]}>
          <Text>Green</Text>
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
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  redBox: {
    backgroundColor: '#CB4335',
  },
  yellowBox: {
    backgroundColor: '#F4D03F',
  },
  greenBox: {
    backgroundColor: '#28B463',
  },
});
