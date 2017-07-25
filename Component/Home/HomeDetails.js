import React from 'react';
import {View, Text} from 'react-native';

export default class homeDetails extends React.Component {
  static navigationOptions = {
    title: '详情界面'
  };

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>这个是详情页面,传入的参数是{params.user}</Text>
      </View>
    );
  }
}
