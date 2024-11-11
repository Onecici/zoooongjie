import 'package:flutter/material.dart';

class Tab10 extends StatefulWidget {
  const Tab10({super.key});

  @override
  State<Tab10> createState() => _Tab10State();
}

class _Tab10State extends State<Tab10> {
  int n = 20;
  double nn = 1;
  String kk = '11';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('RefreshIndicator示例'),
      ),
      // RefreshIndicator下拉刷新组件
      body: RefreshIndicator(
        onRefresh: () async {
          // 在这里执行刷新操作
          await Future.delayed(const Duration(seconds: 2));
          setState(() {
            n = 40;
          });

          // 使用扩展方法
          print(nn.px);
          print(kk.st);
        },
        color: Colors.amber,
        // NotificationListener可以监听子组件滚动
        child: NotificationListener(
          onNotification: (scrollNotification) {
            if (scrollNotification is ScrollUpdateNotification &&
                scrollNotification.depth == 0) {
              // scrollNotification.depth属性可以判断当前所滚动的窗口是处于哪一个层级,通过数字表示当depth值为0的时候表示当前滚动窗口处于最外层
              print(scrollNotification.depth);
            }
            return false;
          },
          child: ListView(
            children: [
              for (int i = 0; i < n; i++)
                ListTile(
                  title: Text('Item $i'),
                ),
              Container(
                height: 300,
                color: Colors.blue,
                child: ListView(
                  children: List.generate(20, (index) {
                    return Text('data $index');
                  }),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

///扩展double以方便使用
extension Gsaw on double {
  ///eg：200.0.px
  double get px {
    // this指向引用者本身 如200.0.px指向200.0
    return this + 100;
  }
}

///扩展String以方便使用
extension Cvds on String {
  ///eg：200.0.st
  String get st {
    return this;
  }
}

class Kksas {
  Ksajjs<String> myFN(str) {
    return str;
  }
}

typedef Ksajjs<T> = T Function(T str);
