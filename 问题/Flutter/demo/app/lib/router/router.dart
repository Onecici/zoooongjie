import 'package:app/Tabs/tab7.dart';
import 'package:flutter/material.dart';

class MyRouter {
  // 定义路由名称
  static const homePage = '/home';

  // 匹配Widget组件
  // TIp：函数名加 _ 表示私有属性不能在外部使用，static加上 _ 私有属性相当于MyRouter类内部可以直接全局调用_getPage方法,不需要实例化
  static _getPage(String url, dynamic params) {
    switch (url) {
      case homePage:
        return const HomePageTest();
    }
    return const Error404();
  }

  // push跳转路由
  // {dynamic params} 这种方式用来定义 可传可不传参数
  static push(BuildContext context, String url, {dynamic params}) {
    Navigator.push(context, MaterialPageRoute(builder: (context) {
      return _getPage(url, params);
    }));
  }
}

class Error404 extends StatelessWidget {
  const Error404({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('404 Error');
  }
}
