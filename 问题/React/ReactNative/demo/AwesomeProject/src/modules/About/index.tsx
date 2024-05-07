import React, {useState} from 'react';
import {
  Alert,
  Button,
  LayoutAnimation,
  Linking,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function About({navigation}: any) {
  const [isShow, setIsShow] = useState(false);

  // 1-1.LayoutAnimation组件可以检测当前组件模版发生改变时自动触发对应改变元素的动画效果
  LayoutAnimation.easeInEaseOut(); // 设置动画曲线

  const handlePress = () => {
    setIsShow(!isShow);
  };

  const jumpURL = () => {
    // Linking用来跳转链接
    Linking.openURL('https://www.baidu.com');
  };
  return (
    <View>
      <Text>About Page</Text>
      <Button title="About" onPress={() => navigation.navigate('About2')} />
      {/* 1-2.当组件模版内容发生改变就会自动触发对应改变元素的动画效果 类似css的transition属性 */}
      {isShow && (
        <View style={[styles.box2, styles.container]}>
          <Text>123</Text>
        </View>
      )}
      {/* TouchableOpacity组件实现触摸事件 */}
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.box, styles.container]}>
          <Text>{isShow ? '隐藏' : '显示'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={jumpURL}>
        <View style={[styles.box, styles.container]}>
          <Text>跳转</Text>
        </View>
      </TouchableOpacity>
      <Switch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  box2: {
    backgroundColor: '#61dafb',
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
