import 'dart:math';

import 'package:app/gen/assets.gen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:lottie/lottie.dart';

class Tab11 extends StatefulWidget {
  const Tab11({super.key});

  @override
  State<Tab11> createState() => _Tab11State();
}

// WidgetsBindingObserver监测页面
class _Tab11State extends State<Tab11>
    with WidgetsBindingObserver, SingleTickerProviderStateMixin {
  // 动画参数曲线
  late Animatable<double> _easeInTween;
  late Animatable<double> _inTween;

  //控制器用来管理Animation
  late AnimationController _controller;

  // tab11 1.1  生成动画最终动画实例
  late Animation<double> _heightFactor;

  bool isExpand = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this); //添加观察者

    _controller = AnimationController(
        duration: const Duration(milliseconds: 200), vsync: this);

    // 创建动画参数曲线
    _easeInTween = CurveTween(curve: Curves.easeIn);
    _inTween = Tween(begin: 0.0, end: 1.0);

    // 两种方式设置动画
    // drive方法用于连接多个动画
    _heightFactor = _controller
        .drive(_easeInTween)
        .drive(_inTween); // tab11 1.2 将最终动画实例赋值到_heightFactor变量上

    // 设置单个动画
    // _heightFactor = _easeInTween.animate(_controller);

    _controller.addListener(() {
      //监听动画值的变化
      print(_heightFactor.value);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
            onPressed: () {
              print(LoginRequest().url());
            },
            child: const Text('LoginRequest抽象类测试')),

        // ///带缓存的image
        // CachedNetworkImage(
        //     height: 200,
        //     width: double.infinity,
        //     fit: BoxFit.cover,
        //     // 加载没完成时显示的Widget
        //     placeholder: (
        //       BuildContext context,
        //       String url,
        //     ) =>
        //         Container(color: Colors.black),
        //     // 加载图片错误显示的Widget
        //     errorWidget: (
        //       BuildContext context,
        //       String url,
        //       dynamic error,
        //     ) =>
        //         const Icon(Icons.error),
        //     imageUrl:
        //         'https://up.enterdesk.com/edpic_source/0d/fd/56/0dfd56f3d744002ed3718e37860352f9.jpeg'),
        Expanded(
            child: Container(
          color: Colors.grey,
          // 使用flutter_staggered_grid_view插件创建瀑布流网格
          child: MasonryGridView.count(
            itemCount: 10,
            padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 10),
            crossAxisCount: 3,
            mainAxisSpacing: 4,
            crossAxisSpacing: 4,
            itemBuilder: (context, index) {
              double randomHeight = Random().nextDouble() * 100;
              return Card(
                color: Color.fromARGB(
                    Random().nextInt(256),
                    Random().nextInt(256),
                    Random().nextInt(256),
                    Random().nextInt(256)),
                child: SizedBox(
                  height: randomHeight <= 50.0 ? 50.0 : randomHeight,
                  child: Center(
                    child: Text('item $index'),
                  ),
                ),
              );
            },
          ),
        )),
        SizedBox(
          height: 300,
          child: Column(
            children: [
              AnimatedBuilder(
                animation: _controller, // tab11 1.4 放入初始_controller
                child: isExpand ? const Text('data') : null,
                builder: (BuildContext context, Widget? child) {
                  return Align(
                    // heightFactor属性值会以当前组件的child高度计算
                    // 当为1时相当于 Align组件的高度为 1 * child高度
                    // 当为0时相当于 Align组件的高度为 0 ，这会导致AnimatedBuilder组件下方组件压上来

                    // tab11 1.3 _heightFactor.value是动画实例中计算值 这个计算值是根据动画曲线动态计算的，默认是0-1 如果动画曲线中设置了Tween(begin: 1.0, end: 4.0) 那该计算值就为0-4
                    heightFactor: _heightFactor.value,
                    alignment: Alignment
                        .topCenter, // 这里设置Alignment.topCenter为动画展开的初始方向
                    child: child,
                  );
                },
              ),
              ElevatedButton(
                  onPressed: () {
                    setState(() {
                      isExpand = !isExpand;
                    });
                    if (_controller.isCompleted) {
                      _controller.reverse();
                    } else {
                      _controller.forward();
                    }
                  },
                  child: const Text('ford')),
            ],
          ),
        ),
        // 旋转动画
        RotationTransition(
          turns: Tween(begin: 2.0, end: 10.0).animate(_controller),
          child: const Text('data'),
        ),
        Row(
          children: [
            ElevatedButton(
                onPressed: () {
                  _controller.repeat();
                },
                child: const Text('Rota Play')),
            ElevatedButton(
                onPressed: () {
                  _controller.stop();
                },
                child: const Text('Rota stop')),
          ],
        )
      ],
    );
  }

  //监测生命周期变化时回调
//  resumed:应用可见并可响应用户操作
//  inactive:用户可见，但不可响应用户操作
//  paused:已经暂停了，用户不可见、不可操作
//  suspending：应用被挂起，此状态IOS永远不会回调
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    print("@@@@@@@@@  应用状态: $state");
  }

  ///监测应用尺寸改变时回调，例如旋转
  @override
  void didChangeMetrics() {
    super.didChangeMetrics();
    Size size = WidgetsBinding.instance.window.physicalSize;
    print("@@@@@@@@@ didChangeMetrics  ：宽：${size.width} 高：${size.height}");
  }

  @override
  void dispose() {
    super.dispose();
    WidgetsBinding.instance.removeObserver(this); //销毁观察者
  }
}

// --------------------------------------------------------------------------------------------------------------------------------

abstract class Ksba {
  String path() {
    return '2112';
  }

  String url() {
    var pathParams = path(); // 1.如果继承的类中重写了 path() 方法，优先使用重写的方法
    return pathParams;
  }
}

class LoginRequest extends Ksba {
  // 2.重写
  @override
  path() {
    return '/uapi/user/login';
  }

  skk() {
    return Future.value({});
  }
}

// --------------------------------------------------------------------------------------------------------------------------------

///带lottie动画的加载进度条组件
class LoadingContainer extends StatelessWidget {
  final Widget child;

  ///是否显示lottie动画
  final bool isLoading;

  ///加载动画是否浮层在child上
  final bool cover;

  const LoadingContainer(
      {super.key,
      required this.isLoading,
      required this.child,
      this.cover = false});

  @override
  Widget build(BuildContext context) {
    if (cover) {
      return Stack(
        children: [child, isLoading ? _loadingView : Container()],
      );
    } else {
      return isLoading ? _loadingView : child;
    }
  }

  //lottie动画
  Widget get _loadingView {
    return Center(child: Lottie.asset(Assets.loading));
  }
}
