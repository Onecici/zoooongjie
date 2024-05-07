import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

export default () => {
  // 3.1.new Animated.ValueXY用来创建一个二维坐标空间中
  const pan = useRef(new Animated.ValueXY()).current;

  // 3.2.PanResponder.create用来创建手势事件对象集合
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        // 将手指的移动距离映射到pan二维坐标空间中
        dx: pan.x,
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  console.log(panResponder.panHandlers);
  

  return (
    <View style={styles.container}>
      {/* Animated.View是用来专门做动画的view视图组件 */}
      <Animated.View
        {...panResponder.panHandlers} // 3.3.使用手势事件配置
        
        // 3.4.pan.getLayout 方法来动态获取其当前的位置信息
        style={[pan.getLayout(), styles.box]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
