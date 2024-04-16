```tsx
// index.js

import { AppRegistry, Platform, UIManager } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// 开启LayoutAnimation模版动画
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

AppRegistry.registerComponent(appName, () => App);
```

```tsx
// 函数组件中使用

export default function About({navigation}: any) {
  const [isShow, setIsShow] = useState(false);

  LayoutAnimation.easeInEaseOut();// 设置动画曲线

  const handlePress = () => {
    setIsShow(!isShow); // 当组件模版内容发生改变就会自动触发对应改变元素的动画效果 类似css的transition属性
  };
  return (
    <View>
      <Text>About Page</Text>
      <Button title="About" onPress={() => navigation.navigate('Home')} />
      {isShow && (
        <View style={[styles.box2, styles.container]}>
          <Text>123</Text>
        </View>
      )}
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.box, styles.container]}>
          <Text>{isShow ? '隐藏' : '显示'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
```

