import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';

class Mine extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mine</Text>
      </View>
    );
  }
}

class One extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>One</Text>
      </View>
    );
  }
}

class Two extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>One</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});

const MineNavigator = TabNavigator({
  one: {
    screen: One
  },
  two: {
    screen: Two
  }
});

export default MineNavigator;
