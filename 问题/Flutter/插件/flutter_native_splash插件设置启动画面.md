#### 1.pubspec.yaml中设置 flutter_native_splash:

```yaml
name: untitled
description: "A new Flutter project."
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.4.3 <4.0.0'
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.6
  flutter_native_splash: ^2.4.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0
flutter:
  uses-material-design: true
  assets:
    #加载目录下的所有文件
    - assets/



flutter_native_splash:
  color: "#42a5f5"
  image: "assets/2.png"
  
  #Android12以上的启动画面都固定是圆形
  #在Android12以上需要单独配置image
  android_12:
    image: "assets/2.png"
    color: "#42a5f5"
```

##### 每次设置完后运行

```
dart run flutter_native_splash:create
```



https://pub.dev/packages/flutter_native_splash