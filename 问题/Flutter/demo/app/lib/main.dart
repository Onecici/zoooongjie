import 'dart:async';

import 'package:app/Tabs/Getx/binding/binding.dart';
import 'package:app/Tabs/get_x.dart';
import 'package:app/Tabs/provider.dart';
import 'package:app/http/hiNet/core/hi_error.dart';
import 'package:app/http/hiNet/core/hi_net.dart';
import 'package:app/language/l10n/gen/app_localizations.dart';
import 'package:app/router/fluro.dart';
import 'package:app/router/router.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/route_manager.dart';
import 'package:provider/provider.dart';

import './home.dart';

void main() {
  // casc 1.1 runZonedGuarded用于捕获Zone.current.handleUncaughtError抛出当错误
  runZonedGuarded(() {
    // 当widget构建错误时显示指定widget
    ErrorWidget.builder = (FlutterErrorDetails details) {
      // casc 1.2 抛出错误让runZonedGuarded函数体捕获到
      Zone.current.handleUncaughtError(details.exception, details.stack!);
      return const Center(
        child: Text(
          'Error',
          style: TextStyle(fontSize: 26),
        ),
      );
    };

    //设置状态码错误拦截器
    HiNet.getInstance().setErrorInterceptor((error) {
      // 判断error错误类型
      if (error is NeedLogin) {
        // ...
      }
    });

    Routes.setUp();

    // provider 1.2 使用MultiProvider组件管理数据状态
    runApp(MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => Counter1()),
        ChangeNotifierProvider(create: (_) => Counter2()),
        ChangeNotifierProvider(create: (_) => Counter3())
      ],
      child: const MyApp(),
    ));
  }, (Object obj, StackTrace stack) {
    print(
        '--------------------------------widget构建 Error Info--------------------------------');
    if (kReleaseMode) {
      // release 环境该做的事
    }
    if (kProfileMode) {
      // profile 环境该做的事
    }
    if (kDebugMode) {
      // debug 环境该做的事情
    }
  });
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // ScreenUtilInit屏幕适配方案
    return ScreenUtilInit(
      designSize: const Size(360, 690), // 设置设计稿尺寸
      minTextAdapt: true, // 在屏幕宽度小于设计稿宽度时，会根据屏幕宽度自动调整字体大小
      splitScreenMode: true, // 支持分屏模式
      builder: (context, child) {
        return GetMaterialApp(
          // 命名路由
          routes: {
            '/test': (context) => const Test(),
          },
          initialBinding:
              AllControllersBinding(), // GetXView 1.1 注册全局所有GetX controllers控制器实例
          localizationsDelegates: const [
            GlobalCupertinoLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            AppLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('zh'),
            Locale('en'),
          ],
          locale: const Locale('zh'),
          home: const Home(),
          // onGenerateRoute用于监听Navigator.pushNamed的跳转
          onGenerateRoute: Routes.route.generator,

          // Getx定义全局路由切换时动画
          defaultTransition: Transition.rightToLeft,
          // Getx命名路由
          getPages: [
            GetPage(
                name: "/getxTest",
                page: () => const Test(),
                middlewares: [GetxTestMiddleware()])
          ],
        );
      },
    );
  }

  Route<dynamic> _getGRoute(settings) {
    if (settings.name == '/tt') {
      print(settings.name);
      // settings: settings  在onGenerateRoute跳转路由时需要带上路由信息
      return MaterialPageRoute(
          settings: settings, builder: (context) => const Test());
    }

    // 找不到路由时自动跳转404
    return MaterialPageRoute(
        settings: settings, builder: (context) => const Error404());
  }
}

class Test extends StatefulWidget {
  const Test({super.key});

  @override
  State<Test> createState() => _TestState();
}

class _TestState extends State<Test> with CanFly {
  study() {}
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Scaffold(
        appBar: AppBar(
          title: const Text('命名路由测试页面'),
        ),
        body: const Text('Test页面'),
      ),
    );
  }
}


// with使用方式
// on 表示这个Mixin只能被 State<Test> 的状态类with使用。
mixin CanFly on State<Test> {
  String ll = '212';

  //抽象方法 : 没有函数体的方法称为抽象方法
  void study(); // 这是一个抽象方法 当前这个方法可以约束父类必须实现这个方法 跟abstract抽象类 类似

  void fly() {
    print('Flying high!');
  }
}