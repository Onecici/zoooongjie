#### 方式一

```dart
class MyApp extends StatefulWidget {
    
    // 没有构造器就创建一个,为了获取key值
    // 这样写相当于js中的constructor()初始化方法的简写
  const MyApp({Key? key}) : super(key: key);


  @override
  State<MyApp> createState() => _MyAppState();
}
```

#### 方式二（命名传参）

```dart
  class EleButton extends StatelessWidget {
      
      // js中constructor()初始化方法
     const EleButton(
      {
      Key? key,  
      required this.menuOneClick,
      required this.menuName,
      required this.menuIndex,
      String? kfakfafi // ?表示该参数可以不传
      })
      : super(key: key); 
      
  }
```

#### 方式三（固定传参）

```dart
 class ImageDisplay extends StatelessWidget {
     
     // js中constructor()初始化方法
     const ImageDisplay(this.imgPrame, this.imageDescription, {Key? key})
      : super(key: key);
     
 }
```

