import React from 'react';
import {Image, StyleSheet, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';
import More from '../More/More';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            tabNavigatorSelected: 'home'
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item onPress={() => {
                    this.setState({tabNavigatorSelected: 'home'});
                }} selected={this.state.tabNavigatorSelected === 'home'} allowFontScaling={false}
                                   titleStyle={styles.titleStyle} selectedTitleStyle={styles.selectedTitleStyle}
                                   title="首页" renderIcon={() => < Image source={{uri: 'icon_tabbar_homepage'}} style={
                    styles.iconStyle
                }/>} renderSelectedIcon={() => < Image source={{uri: 'icon_tabbar_homepage_selected'}} style={
                    styles.iconStyle
                }/>}>
                    <Home/>
                </TabNavigator.Item>

                <TabNavigator.Item onPress={() => {
                    this.setState({tabNavigatorSelected: 'shop'});
                }} selected={this.state.tabNavigatorSelected === 'shop'} allowFontScaling={false}
                                   titleStyle={styles.titleStyle} selectedTitleStyle={styles.selectedTitleStyle}
                                   title="商家"
                                   renderIcon={() => < Image source={{uri: 'icon_tabbar_merchant_normal'}}
                                                             style={styles.iconStyle}/>}
                                   renderSelectedIcon={() => < Image source={{uri: 'icon_tabbar_merchant_selected'}}
                                                                     style={
                                                                         styles.iconStyle
                                                                     }/>}>
                    <Shop/>
                </TabNavigator.Item>

                <TabNavigator.Item onPress={() => {
                    this.setState({tabNavigatorSelected: 'mine'});
                }} selected={this.state.tabNavigatorSelected === 'mine'} allowFontScaling={false}
                                   titleStyle={styles.titleStyle} selectedTitleStyle={styles.selectedTitleStyle}
                                   title="我的" renderIcon={() => < Image source={{uri: 'icon_tabbar_mine'}} style={
                    styles.iconStyle
                }/>} renderSelectedIcon={() => < Image source={{uri: 'icon_tabbar_mine_selected'}} style={
                    styles.iconStyle
                }/>}>
                    <Mine/>
                </TabNavigator.Item>

                <TabNavigator.Item onPress={() => {
                    this.setState({tabNavigatorSelected: 'more'});
                }} selected={this.state.tabNavigatorSelected === 'more'} allowFontScaling={false}
                                   titleStyle={styles.titleStyle} selectedTitleStyle={styles.selectedTitleStyle}
                                   title="更多" renderIcon={() => < Image source={{uri: 'icon_tabbar_misc'}} style={
                    styles.iconStyle
                }/>} renderSelectedIcon={() => < Image source={{uri: 'icon_tabbar_misc_selected'}} style={
                    styles.iconStyle
                }/>}>
                    <More/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 25 : 23,
        height: Platform.OS === 'ios'
            ? 25
            : 23
    },
    titleStyle: {
        fontSize: 12,
        marginBottom: 5
    },
    selectedTitleStyle: {
        fontSize: 12,
        marginBottom: 5,
        color: 'orange'
    }
});
