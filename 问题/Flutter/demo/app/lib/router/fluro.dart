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
