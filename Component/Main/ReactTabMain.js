import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image source={{uri: 'icon_tabbar_homepage'}} style={[styles.iconStyle, {tintColor: tintColor}]}/>
        ),
    }

    render() {
        return (
            <View>
                <Text>
                    主界面
                </Text>
            </View>
        );
    }
}

class MineScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Mine',
        tabBarIcon: ({tintColor}) => (
            <Image source={{uri: 'icon_tabbar_mine'}} style={[styles.iconStyle, {tintColor: tintColor}]}/>
        ),
    }

    render() {
        return (
            <View>
                <Text>
                    我的界面
                </Text>
            </View>
        );
    }
}

class MoreScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'More',
        tabBarIcon: ({tintColor}) => (
            <Image source={{uri: 'icon_tabbar_mine'}} style={[styles.iconStyle, {tintColor: tintColor}]}/>
        ),
    }

    render() {
        return (
            <View>
                <Text>
                    更多界面
                </Text>
            </View>
        );
    }
}

const MyApp = TabNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Mine: {
            screen: MineScreen
        },
        More: {
            screen: MoreScreen
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'orange',
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {
                width: 100,
            },
            style: {
                backgroundColor: '#9e9e9e',
            },
        }
    },
    {
        tabBarPosition:'bottom'
    }
);

const styles = StyleSheet.create({
    iconStyle: {
        width: 25,
        height: 25
    }
});

export default MyApp;
