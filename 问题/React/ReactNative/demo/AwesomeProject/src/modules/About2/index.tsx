import React, { useRef } from 'react';
import {Animated, Button, Text, View} from 'react-native';

export default function About2({navigation}: any) {
  // 2-1.new Animated.Value可以创建一个新的动画值，用于动态控制动画的数值
  const opacityValue = useRef(new Animated.Value(0)).current; 

  const opacity_1 = () => {
    // 2-2.Animated.timing(动画值，动画值执行的配置项)
    // Animated.timing可以对数据动态控制数值
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const opacity_0 = () => {
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Text>About2 Page</Text>
      <Button title="About" onPress={() => navigation.navigate('Home')} />
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            opacity: opacityValue, // 2-3.使用动画值
          },
        ]}
      />
      <Button title="opacity 1" onPress={opacity_1} />
      <Button title="opacity 0" onPress={opacity_0} />
    </View>
  );
}
