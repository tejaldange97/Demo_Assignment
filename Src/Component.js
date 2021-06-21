import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Component = props => {
  return (
    <View style={styles.rootView}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.data}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '40%',
  },
  data: {
    fontSize: 15,
    width: '60%',
  },
});
