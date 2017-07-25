import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class More extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>More</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});
