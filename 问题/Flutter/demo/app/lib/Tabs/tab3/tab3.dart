import 'package:app/gen/assets.gen.dart';
import 'package:flutter/material.dart';
import 'tab3_chi.dart';

class Tab3 extends StatefulWidget {
  int id = 10001; // 这里定义的变量在widget中 通过widget.id获取

  Tab3({super.key});

  static restartApp(BuildContext context, String text) {
    // context.findAncestorStateOfType<查找的wiget类> 该方法可以查找以当前context所在的wiget向上查找对应的wiget类
    final _Tab3State? state = context.findAncestorStateOfType<_Tab3State>();
    state?.restartApp(text);
  }

  @override
  State<Tab3> createState() => _Tab3State();
}

class _Tab3State extends State<Tab3> with SingleTickerProviderStateMixin {
  late String textC = ''; // 这里定义的变量只能在当前类中全局访问（不包括子类）
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();

    _controller =
        AnimationController(vsync: this, duration: const Duration(seconds: 2));
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void restartApp(text) {
    setState(() {
      textC = text;
    });
    print(text);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      // decoration属性用于定义容器的装饰
      decoration: BoxDecoration(
        // 设置背景图片
        image: DecorationImage(
          image: Assets.a1.provider(), // 替换为您的图片路径
          fit: BoxFit.contain, // 图片适应方式
        ),
      ),
      child: Column(
        children: [
          const Tab3Chi(),
          // 1.1 AnimatedSwitcher动画组件 当子组件发生变化时就会执行 默认动画效果是淡入淡出
          AnimatedSwitcher(
            duration: const Duration(milliseconds: 500),
            // 1.2 transitionBuilder自定义动画效果
            transitionBuilder: (child, animation) {
              return ScaleTransition(
                // 1.3 Scale动画效果组件
                scale: animation,
                child: FadeTransition(
                  // 1.4 淡入淡出动画效果组件
                  opacity: animation,
                  child: child,
                ),
              );
            },
            child: Column(
              key: UniqueKey(), // 1.5 所有需要做动画的wiget组件都需要加key 不加key就会导致没有动画效果
              children: [Text(textC), getStrange()],
            ),
          )
        ],
      ),
    );
  }

  // 判断奇偶来切换Widget组件
  getStrange() {
    if (double.tryParse(textC) != null) {
      return double.parse(textC) % 2 == 0 ? two() : one();
    }

    // isNotEmpty判断字符串是否不为空
    if (textC.isNotEmpty) {
      return const Text(
        '输入的不是数字类型',
        style: TextStyle(color: Colors.red, fontSize: 18),
      );
    }

    return const SizedBox
        .shrink(); // SizedBox.shrink不占空间的组件 因为函数返回值不能为空且返回的类型必须是widget所以就使用该组件
  }

  Widget one() {
    return Container(
        key: UniqueKey(), // 1.5 所有需要做动画的wiget组件都需要加key 不加key就会导致没有动画效果
        child: const Text(
          '奇数111111',
          style: TextStyle(fontSize: 16),
        ));
  }

  Widget two() {
    return Container(
      key: UniqueKey(), // 1.5 所有需要做动画的wiget组件都需要加key 不加key就会导致没有动画效果
      child: const Text(
        '偶数222222',
        style: TextStyle(fontSize: 16),
      ),
    );
  }
}
