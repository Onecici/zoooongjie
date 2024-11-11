import 'package:easy_refresh/easy_refresh.dart';
import 'package:flutter/material.dart';

class FlutterEasyRefresh extends StatefulWidget {
  const FlutterEasyRefresh({super.key});

  @override
  State<FlutterEasyRefresh> createState() => _FlutterEasyRefreshState();
}

class _FlutterEasyRefreshState extends State<FlutterEasyRefresh> {
  int _count = 10;
  late EasyRefreshController _controller;

  @override
  void initState() {
    super.initState();

    // 初始化EasyRefresh组件控制器
    _controller = EasyRefreshController(
      controlFinishRefresh: true,
      controlFinishLoad: true,
    );
  }

  @override
  void dispose() {
    super.dispose();

    _controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: EasyRefresh(
          controller: _controller,
          // BezierCircleHeader是EasyRefresh组件用于下拉拉加载时显示的经典风格的底部组件之一
          header: const BezierCircleHeader(
            backgroundColor: Colors.amber
          ), // 配置下拉刷新头部UI
          // ClassicFooter是EasyRefresh组件用于上拉加载更多时显示的经典风格的底部组件之一
          footer: const ClassicFooter(
            backgroundColor: Colors.amber,
            noMoreText: '已经到底啦，没有更多啦',
          ), // 配置上拉加载底部UI
          // 下拉刷新时会触发onRefresh函数
          onRefresh: () async {
            await Future.delayed((const Duration(seconds: 1)));
            if (!mounted) {
              return;
            }

            setState(() {
              _count = 10;
            });

            _controller.finishRefresh(); // 结束刷新
            _controller.resetFooter(); // 重置上拉刷新状态
          },
          // 上拉加载触发onLoad函数
          onLoad: () async {
            await Future.delayed((const Duration(seconds: 1)));
            if (!mounted) {
              return;
            }

            setState(() {
              _count += 5;
            });

            // finishLoad方法结束下拉加载并根据逻辑判断是否还有更多数据
            _controller.finishLoad(_count >= 20
                ? IndicatorResult.noMore
                : IndicatorResult.success);
          },
          child: ListView.builder(
              itemCount: _count,
              itemBuilder: (context, index) {
                return Card(
                  child: Container(
                    alignment: Alignment.center,
                    height: 80,
                    child: Text('${index + 1}'),
                  ),
                );
              })),
    );
  }
}
