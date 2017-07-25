import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Shop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shop</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});
