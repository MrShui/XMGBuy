import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import homeDetails from './HomeDetails';

class Home extends React.Component {
  static navigationOptions = {
    title: '首页'
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button onPress={() => {
          navigate('homeDetail', {user: 'mc水水'})
        }} title={'非得写点啥是吧'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});

let HomeNavigator = StackNavigator({
  home: {
    screen: Home
  },
  homeDetail: {
    screen: homeDetails
  }
});

export default HomeNavigator;
