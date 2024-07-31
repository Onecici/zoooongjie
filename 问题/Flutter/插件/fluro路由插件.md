```
安装
flutter pub add fluro
```



#### 1.创建router.dart文件

```dart
import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';


class Routes {
  // 1.初始化FluroRouter实例
  static final route = FluroRouter();

  // 2.注册路由
  static setUp() {
    PageHandler.pageRoutes.forEach((path, handler) {
      route.define(path,
          handler: handler, transitionType: TransitionType.inFromRight);
    });
  }
}

// 定义路由集合
class PageHandler {
  static Map<String, Handler> pageRoutes = {
    // query参数获取方式
    '/login/:id': Handler(
        handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      String title = params['id']!.first;
      return CommonPage(name: title);
    }),
    // params参数获取方式
    '/login': Handler(
        handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      String title = params['title']!.first;
      return CommonPage(name: title);
    })
  };
}


// 公共路由组件（当前测试使用）
class CommonPage extends StatefulWidget {
  final String name;
  const CommonPage({required this.name, super.key});

  @override
  State<CommonPage> createState() => _CommonPageState();
}

class _CommonPageState extends State<CommonPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.name),
      ),
      body: Column(
        children: [
          ElevatedButton(
              onPressed: () {
                Routes.route.pop(context);
              },
              child: const Text('点击返回上一级'))
        ],
      ),
    );
  }
}

```

```dart
// 在main.dart中
void main() {
  Routes.setUp(); // 注册路由
  runApp(const MyApp());
}

MaterialApp(
  		// 在onGenerateRoute写入Routes.route.generator该方法
     onGenerateRoute: Routes.route.generator, 
)
```

#### 2.使用

```dart
            ElevatedButton(
                onPressed: () {
                  Routes.route.navigateTo(context, '/login/123456');
                },
                child: const Text('query参数跳转')),
            ElevatedButton(
                onPressed: () {
                  // 汉字需要使用Uri.encodeComponent进行转码
                  Routes.route.navigateTo(context,
                      '/login?title=Login ${Uri.encodeComponent('页面')}');
                },
                child: const Text('params参数跳转'))
```

