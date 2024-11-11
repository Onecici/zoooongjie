import 'package:app/http/hiNet/dao/test_dao.dart';
import 'package:app/json/test_dao.dart';
import 'package:flutter/material.dart';

class Tab9 extends StatefulWidget {
  const Tab9({super.key});

  @override
  State<Tab9> createState() => _Tab9State();
}

class _Tab9State extends State<Tab9> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
            onPressed: () {
              Jska myJSKA = Jska('ffsds', age: 22);
              Jska myJSKA2 = Jska.ksas(myJSKA);

              print(myJSKA2.getCurrentClassName());

              Logger sksa = Logger();
              print(sksa);
            },
            child: const Text('类测试')),
        ElevatedButton(
            onPressed: () {
              throw Exception(
                  'throw 报错测试'); // Exception()方法类似js中的 throw new Error() 方法
            },
            child: const Text('throw 报错测试')),
        ElevatedButton(
            onPressed: () {
              try {
                // 2.3 data属性可以不传
                throw HiNetError(404, 'error 404');
                // throw NeedLogin();
              } on NeedLogin catch (e) {
                // 捕获NeedLogin类型错误
                // 如果当前 on NeedLogin catch 方法体捕获了错误那么下一级后续catch将不会执行
                print('----NeedLogin类型错误---${e.message}');
              } on HiNetError catch (e) {
                print('----HiNetError类型错误---${e.message}');
              } catch (e) {
                // 捕获其它错误类型
                print(e);
              }
            },
            child: const Text('自定义错误类测试')),
        ElevatedButton(
            onPressed: () async {
              TestDao res = await TestcDao.get();
              print(res.toJson());
            },
            child: const Text('hiNet网络请求封装测试'))
      ],
    );
  }
}

// --------------------------------------------------------------------------------------------------------------------------------
// 自定义错误类
// 这里写 implements Exception 是为了规范自定义错误类也可不写
class HiNetError implements Exception {
  final int code;
  final String message;
  final dynamic data;

  // 2.1 (this.code, this.message) 这种写法当HiNetError实例化的时候是必须传入这两个属性
  // 2.2 ({this.data}) 这种写法当HiNetError实例化的时候因为data属性为dynamic动态类型是可以为空变量的 所以在实例化的时候this.data可以不传
  HiNetError(this.code, this.message, {this.data});
}

class NeedLogin extends HiNetError {
  NeedLogin([super.code = 401, super.message = '请先登录']);
}

// --------------------------------------------------------------------------------------------------------------------------------

class Pksa {
  String name;
  Pksa(this.name);

  String getCurrentClassName() {
    return 'Class Pksa';
  }
}

class Jska extends Pksa {
  late int age;

  // 设置只读属性
  String get dgdg => 'saas';

  // 1.1 该类中有两种构造函数初始化方式 当前类如果继承了其它类那么这两种初始化方式都需要调用super方法
  // 1.2 普通构造函数初始化
  // super.name将属性赋值到继承Pksa类中的name
  Jska(super.name, {required this.age});

  // 1.3 命名构造函数初始化 默认返回值自身实例
  Jska.cover(super.name) {
    print('命名构造方法');
  }

  // 命名工厂构造函数 返回值必须是自身类实例
  factory Jska.ksas(Jska jsk) {
    jsk.age += 20;
    return Jska(jsk.name, age: jsk.age);
  }

  @override
  String getCurrentClassName() {
    return 'Class Jska ${super.getCurrentClassName()}';
  }
}

// --------------------------------------------------------------------------------------------------------------------------------

class Logger {
  static Logger? _cache;

  // 如果当前类中没有初始化方法的话，factory Logger()这个方法会默认成为初始化方法
  // 如果当前类中存在初始化方法的话，需要将factory Logger.xxx()改成这种形式(命名工厂构造函数)才能调用该方法
  factory Logger() {
    // factory命名工厂构造函数中只能访问自身带有static的属性方法
    _cache ??= Logger._internal();
    return _cache!; // !符号表示当前这个变量不为空  这里设置！符号是因为_cache初始定义类型为 Logger? 这个类型表示有可能为空  但是Logger._internal()这个方法一定能返回Logger这个类型 所以设置为！符号表示不为空
  }

  // 命名构造函数(不写函数体形式) 默认返回值自身实例
  Logger._internal();
}
