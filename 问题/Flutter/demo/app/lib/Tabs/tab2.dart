import 'dart:async';

import 'package:app/http/api/home.dart';
import 'package:app/keep_alin.dart';
import 'package:flutter/material.dart';


class Tab2 extends StatefulWidget {
  const Tab2({super.key});

  @override
  State<Tab2> createState() => _Tab2State();
}

class _Tab2State extends State<Tab2> {
  Future<String>? _fetchData;

  // 这里get表示当访问该变量时就会执行该函数
  double get minExtent => 1 + 2.5;

  List httpText = [
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "265815", "name": "bb"},
    {"code": "265815", "name": "bb"},
    {"code": "265815", "name": "bb"},
    {"code": "265815", "name": "bb"},
    {"code": "265815", "name": "bb"},
    {"code": "265815", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"},
    {"code": "200", "name": "aa"}
  ];

  @override
  void initState() {
    super.initState();

    _fetchData = futureGet(); // 缓存异步数据
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // 1.Expanded组件可以占满剩余空间 只有将剩余空间占满才能使用ListView.builder组件
        Expanded(
            child: CustomCache(
          child: ListView.builder(
            // physics物理效果
            physics: const BouncingScrollPhysics(), // 当用户滚动到列表的边界时会有一个反弹效果
            itemCount: httpText.length,
            itemBuilder: (BuildContext context, int index) {
              return Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.only(left: 20),
                    child: Text('code: ${httpText[index]['code']}'),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 20),
                    child: Text('name: ${httpText[index]['name']}'),
                  ),
                ],
              );
            },
          ),
        )),
        // 2.当Expanded组件有多个时剩余空间会平均分配
        Expanded(
            // FutureBuilder组件处理异步任务并构建widget
            child: FutureBuilder(
          future: _fetchData, // 缓存的异步数据
          builder: (context, result) {
            var state =
                result.connectionState; // 获取异步状态  类似promise里的padding这些状态

            // 判断是否加载完成
            if (state == ConnectionState.done) {
              return Text(result.data as String);
            } else {
              // 这里的返回值相当于骨架屏
              return const CircularProgressIndicator(); // 显示进度条组件
            }
          },
        )),
        ElevatedButton(
            onPressed: () {
              LoginService.menuNav().then((res) {
                print(res);
              });
              LoginService.getDataCenter().then((res) {
                setState(() {
                  httpText = res;
                });
              });
            },
            child: const Text('http Get')),
        // Divider组件用来创建分割线
        const Divider(),

        // GestureDetector处理手势事件
        GestureDetector(
          // behavior触发范围
          behavior: HitTestBehavior
              .translucent, // HitTestBehavior.translucent表示自身和child都会触发
          onLongPress: () {
            print('长按了');
          },
          onTap: () {
            print('触摸了');
          },
          child: Container(
            width: double.infinity,
            height: 200,
            color: Colors.grey,
            child: const Center(
              child: Text(
                '触摸',
                style: TextStyle(fontSize: 20),
              ),
            ),
          ),
        ),
        const Divider(),
        Material(
          // 因为在InkWell组件child下设置了颜色会导致水波纹无法显示 所以需要Material组件来显示颜色
          color: Colors.blue,
          child: InkWell(
            // InkWell组件实现点击时水波纹效果
            splashColor: Colors.red,
            onTap: () {
              print('InkWell tapped!');
            },
            child: Container(
              padding: const EdgeInsets.all(12.0),
              child: const Text(
                'Tap Me',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
        )
      ],
    );
  }

  Future<String> futureGet() async {
    return Future.delayed(const Duration(seconds: 2), () {
      return 'V ----------------';
    });
  }
}
