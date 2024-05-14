import 'package:flutter/material.dart';
import './tab3.dart';

class Tab3Chi extends StatefulWidget {
  const Tab3Chi({super.key});

  @override
  State<StatefulWidget> createState() => _Tab3Chi();
}

// TickerProviderStateMixin可以支持多个动画组件
class _Tab3Chi extends State<Tab3Chi> with TickerProviderStateMixin {
  // TextField输入框控制器
  final TextEditingController _controller = TextEditingController();
  // ------------------------------------------------------------------------------------------------------------------------------------------------------

  // ScaleTransition动画组件
  late AnimationController
      _scaleAnimationController; // 用于控制动画的状态，如启动、停止、正向或反向播放。
  late Animation<double> scale; // 动画值
  // ------------------------------------------------------------------------------------------------------------------------------------------------------

  // FadeTransition动画组件
  late AnimationController _opacityAnimationController;
  late Animation<double> opacity;

  @override
  void initState() {
    super.initState();

    // 设置ScaleTransition动画控制器
    _scaleAnimationController = AnimationController(
      duration: const Duration(milliseconds: 500),
      vsync: this, // 使用Ticker(而不是Timer)来驱动动画会防止屏幕外动画（动画的UI不在当前屏幕时，如锁屏时）消耗不必要的资源
    );

    // 设置动画值 begin开始倍率 end结束倍率
    scale = Tween(begin: 1.0, end: 1.8).animate(_scaleAnimationController);
    
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    // 设置FadeTransition控制器
    _opacityAnimationController = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );
    opacity = CurvedAnimation(
      parent: _opacityAnimationController,
      curve: Curves.easeIn,
    );
  }

  @override
  void dispose() {
    super.dispose();

    _scaleAnimationController.dispose();
    _opacityAnimationController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          width: 200,
          child: TextField(
            controller: _controller,
          ),
        ),
        ElevatedButton(
            onPressed: () {
              String text = _controller.text.toString();
              Tab3.restartApp(context, text);
            },
            child: const Text('btn')),
        ScaleTransition(scale: scale, child: getContainer()),
        FadeTransition(
          opacity: opacity,
          child: getContainer(),
        ),
        ElevatedButton(
            onPressed: () {
              _scaleAnimationController.forward();
              _opacityAnimationController.forward();
            },
            child: const Text('Scale正向播放')),
        ElevatedButton(
            onPressed: () {
              _scaleAnimationController.reverse();
              _opacityAnimationController.reverse();
            },
            child: const Text('Scale反向播放')),
      ],
    );
  }

  getContainer() {
    return Container(
      width: 50,
      height: 50,
      color: Colors.black,
      child: const Text('Scale动画'),
    );
  }
}
