import {NativeModules, Platform} from 'react-native';

if(Platform.OS === 'ios') {
    const {HomeIndicatorDetect} = NativeModules;
    //const HomeIndicatorDetect = require('react-native').NativeModules.HomeIndicatorDetect;
    const {DETECT} = HomeIndicatorDetect.getConstants();
    module.exports = {
        DETECT: DETECT
    };
}
else{
    module.exports = {
        DETECT: false
    };
}
