import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';

const { Value, timing } = Animated;


class Header extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <Animated.View
                    style={[
                        styles.header, {

                        }
                    ]}>
                    <Image
                        source={require('../images/AalsiBachelor.png')}
                        style={{ width: 152, height: 30 }}
                    />
                    <Text style={{ marginLeft: 120 }} onPress={() => Linking.openURL('https://google.com')}>
                        <View style={styles.fake_icon_box}>
                        <Image
                        source={require('../images/share_PNG30.png')}
                        style={{ width: 40, height: 40 }}
                    />
                            {/* <Icon name="share-variant" size={22} color="black"></Icon> */}
                        </View>
                    </Text>
                    <Text style={{ marginLeft: 10 }} onPress={() => Linking.openURL('https://google.com')}>
                        <View style={styles.fake_icon_box}>
                            <Icon name="bell" size={22} color="black"></Icon>
                        </View>
                    </Text>
                </Animated.View>

            </SafeAreaView>

        )
    }
}

export default Header;

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#002333',
        padding: 15
    },
    fake_icon_box: {
        backgroundColor: '#e4e6eb',
        width: 40,
        height: 40,
        borderRadius: 40,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})