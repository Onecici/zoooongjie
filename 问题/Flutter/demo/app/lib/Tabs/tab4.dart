import 'package:flutter/material.dart';

class Tab4 extends StatefulWidget {
  const Tab4({super.key});

  @override
  State<Tab4> createState() => _RocketLaunchState();
}

class _RocketLaunchState extends State<Tab4> {
  var rocketBottom = 5.0;
  var rocketWidth = 20.0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Stack(
          // 2.1 实现定位位移效果必须使用Stack组件
          alignment: Alignment.bottomCenter,
          children: [
            Container(
              color: Colors.blue,
              height: double.infinity,
            ),
            // 2.2 AnimatedPositioned位移动画组件 当该组件的属性发生变化时就会触发动画效果
            AnimatedPositioned(
              bottom: rocketBottom,
              width: rocketWidth, // 2.3 当这里设置了宽度 child里的组件宽度就无效，强制使用该宽度
              duration: const Duration(seconds: 5), // 2.4 过渡时间
              curve: Curves.easeInCubic,
              child: Container(
                color: Colors.black,
                height: 50,
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: const Text(
          '发射',
          style: TextStyle(
            color: Colors.red,
          ),
          textAlign: TextAlign.center,
        ),
        onPressed: () {
          setState(() {
            rocketBottom = MediaQuery.of(context)
                .size
                .height; // MediaQuery.of(context)获取当前屏幕信息
            rocketWidth = 1.0;
          });
        },
      ),
    );
  }
}
