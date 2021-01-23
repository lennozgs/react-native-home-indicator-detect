import { NativeModules } from 'react-native';

type HomeIndicatorDetectType = {
  multiply(a: number, b: number): Promise<number>;
};

const { HomeIndicatorDetect } = NativeModules;

export default HomeIndicatorDetect as HomeIndicatorDetectType;
