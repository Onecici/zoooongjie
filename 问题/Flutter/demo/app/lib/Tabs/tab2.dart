import 'dart:async';

import 'package:app/http/api/home.dart';
import 'package:app/keep_alin.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class Tab2 extends StatefulWidget {
  const Tab2({super.key});

  @override
  State<Tab2> createState() => _Tab2State();
}

class _Tab2State extends State<Tab2> {
  Future<String>? _fetchData;
  double seekFly = 0.0;

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
        // 1.1 Expanded组件可以占满剩余空间 只有将剩余空间占满才能使用ListView.builder组件
        Expanded(
            child: CustomCache(
                child: GestureDetector(
          onVerticalDragDown: (details) {
            print(details.localPosition);
          },
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
        ))),
        // 1.2 当Expanded组件有多个时剩余空间会平均分配
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
            // InkWell组件实现自定义按钮点击时水波纹效果
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
        ),
        const Wrap(
          spacing: 8.0, // 主轴方向上的间距
          runSpacing: 4.0, // 交叉轴方向上的间距
          children: [
            Chip(label: Text('Chip 1')),
            Chip(label: Text('Chip 2')),
            Chip(label: Text('Chip 3')),
          ],
        ),
        // 水平滚动实现方式一  ListView组件
        Expanded(
            child: ListView(
          scrollDirection: Axis.horizontal, // 设置滚动方式为 Axis.horizontal水平滚动
          children: [flyBox(), flyBox()],
        )),
        const SizedBox(
          height: 10,
        ),
        // 水平滚动实现方式二 SingleChildScrollView组件
        // SingleChildScrollView组件内容超过屏幕可视范围时开启自动滚动
        SingleChildScrollView(
          scrollDirection: Axis.horizontal, // 设置滚动方式为 Axis.horizontal水平滚动
          padding: const EdgeInsets.only(left: 15, right: 15),
          child: Row(
            children: [
              flyBox(),
              const SizedBox(
                width: 20,
              ),
              flyBox()
            ],
          ),
        ),
        ElevatedButton(
            onPressed: () {
              setState(() {
                seekFly = 1;
              });
            },
            child: const Text('点击移动飞机')),
        Container(
          width: 200,
          height: 50,
          color: Colors.amber,
          // FittedBox组件 当子部件的大小超出父部件的边界时，FittedBox 可以自动缩小或放大子部件，以使其适应父部件的大小
          child: FittedBox(
            // 定义子部件超出时缩放方式
            fit: BoxFit.contain,
            child: Container(
              width: 400, // 子组件的宽度
              height: 50, // 子组件的高度
              color: Colors.blue,
              child: const Text('FittedBox Example'), // 子组件中的文本
            ),
          ),
        ),
      ],
    );
  }

  Widget flyBox() {
    const double tickSize = 12;

    return Container(
      width: 320.w,
      // 3.1 当Container组件使用BoxDecoration来设置样式时 color 属性就不能写在外层了
      // 3.2 color: Color.fromRGBO(81, 104, 151, 1), 写在外层会报错
      decoration: const BoxDecoration(
        color: Color.fromRGBO(81, 104, 151, 1),
        borderRadius: BorderRadius.only(
            topLeft: Radius.circular(30), topRight: Radius.circular(30)),
      ),
      child: Padding(
        padding: EdgeInsets.all(16.w),
        child: Row(
          children: [
            Text('数据1', style: TextStyle(color: Colors.white, fontSize: 12.sp)),
            // Spacer组件自动占据父组件的剩余的可用空间 不需要设置child
            // Expanded组件自动占据父组件的剩余的可用空间 需要设置child
            const Spacer(),
            Expanded(
                child: Stack(
              children: [
                // 2.1 LayoutBuilder组件可以根据父组件的宽度大小来进行动态调整组件内部的样式
                LayoutBuilder(builder: (context, constraints) {
                  return Stack(
                    clipBehavior: Clip.none,
                    alignment: Alignment.centerLeft,
                    children: [
                      SizedBox(
                        height: 50.h,
                        child: Flex(
                          direction: Axis.horizontal, // 主轴对齐方式
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          mainAxisSize: MainAxisSize.max,
                          children: List.generate(
                              // 2.2 constraints.maxWidth获取父组件最大宽度来根据父组件宽度动态计算创建的个数
                              (constraints.maxWidth / 10)
                                  .floor(), // floor浮点数向下取整
                              (index) => SizedBox(
                                    width: 5.w,
                                    height: 2.h,
                                    // DecoratedBox组件用来装饰的组件
                                    // 可以为组件添加背景颜色、边框、阴影等装饰效果。
                                    child: const DecoratedBox(
                                      decoration:
                                          BoxDecoration(color: Colors.white),
                                    ),
                                  )),
                        ),
                      ),
                      Positioned(
                          top: 0,
                          bottom: 0,
                          left: -(tickSize / 2).w,
                          right: -(tickSize / 2).w,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [tickBox(tickSize), tickBox(tickSize)],
                          )),
                      flyIcon(constraints.maxWidth),
                    ],
                  );
                }),
              ],
            )),
            const Spacer(),
            Text('数据4', style: TextStyle(color: Colors.white, fontSize: 12.sp))
          ],
        ),
      ),
    );
  }

  Widget flyIcon(constraintsMaxWidth) {
    const double size = 50;
    return AnimatedPositioned(
        left: constraintsMaxWidth * seekFly,
        duration: const Duration(milliseconds: 800),
        child: Transform.translate(
          // 平移子组件自身宽度一半的方法(子组件宽度 / 2)
          offset: const Offset(-(size / 2), 0.0),
          child: SizedBox(
            width: size,
            child: Transform.rotate(
              angle: 1.55,
              child: const Icon(
                Icons.local_airport_rounded,
                color: Colors.white,
              ),
            ),
          ),
        ));
  }

  Widget tickBox(tickSize) {
    return Container(
        width: tickSize,
        height: tickSize,
        decoration: BoxDecoration(
          color: const Color.fromRGBO(81, 104, 151, 1),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: Colors.amber,
            width: 2,
          ),
        ));
  }

  Future<String> futureGet() async {
    return Future.delayed(const Duration(seconds: 2), () {
      return 'V ----------------';
    });
  }
}
