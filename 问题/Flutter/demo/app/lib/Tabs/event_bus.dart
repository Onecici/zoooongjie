import 'dart:async';
import 'dart:math';
import 'package:event_bus/event_bus.dart';
import 'package:flutter/material.dart';
import 'package:video_plugin/video_plugin.dart';

//1.创建EventBus对象
final EventBus eventBus = EventBus();

//2.创建一个需要监听的类
class GCUserInfo {
  GCUserInfo(this.name, this.age);
  final String name;
  final int age;
}

class MyEventBus extends StatelessWidget {
  const MyEventBus({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("EventBus"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            FilledButton(
                onPressed: () {
                  final userInfo = GCUserInfo("Steven", Random().nextInt(100));
                  //4.点击发出事件
                  eventBus.fire(userInfo);
                },
                child: const Text(
                  "按钮",
                  style: TextStyle(fontSize: 18),
                )),
            const GCText(),
            FilledButton(
                onPressed: () {
                  print(User.userInfo);
                },
                child: const Text('调用只读方法')),
            FilledButton(
                onPressed: () {
                  Map<String, dynamic> plf = VideoPlugin().getVideoInfo();
                  print(plf);
                },
                child: const Text('调用自定义插件方法')),
            GestureDetector(
              onTap: () {
                print('外层事件---${Random().nextInt(100)}');
              },
              child: AbsorbPointer(
                child: Material(
                  color: Colors.blue,
                  child: InkWell(
                    splashColor: Colors.red,
                    onTap: () {
                      print('内层事件---${Random().nextInt(100)}');
                    },
                    child: Container(
                      padding: const EdgeInsets.all(12.0),
                      child: const Text(
                        '事件拦截方式',
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class GCText extends StatefulWidget {
  const GCText({super.key});
  @override
  State<GCText> createState() => _GCTextState();
}

class _GCTextState extends State<GCText> {
  String info = "Hello world!";
  late final StreamSubscription<GCUserInfo> _event;
  @override
  void initState() {
    super.initState();
    //3.监听GCUserInfo类型的事件
    _event = eventBus.on<GCUserInfo>().listen((event) {
      setState(() {
        info = "${event.name}-----${event.age}";
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Text(
      info,
      style: const TextStyle(fontSize: 18),
    );
  }

  @override
  void dispose() {
    super.dispose();
    _event.cancel();
  }
}

// 变量只读2种写法
class User {
  static String get initInfo => 'KK';

  static Map<String, dynamic> get userInfo {
    String newInfo = '${initInfo}${Random().nextInt(100)}';
    return {
      "name": newInfo,
    };
  }
}
