import 'dart:math' as math;

import 'package:flutter/material.dart';

/// 滑动到指定位置 GlobalKey 版本
/// 基于 SingleChildScrollView 和 Column
class ScrollToIndexDemoPage2 extends StatefulWidget {
  const ScrollToIndexDemoPage2({super.key});

  @override
  _ScrollToIndexDemoPageState2 createState() => _ScrollToIndexDemoPageState2();
}

class _ScrollToIndexDemoPageState2 extends State<ScrollToIndexDemoPage2> {
  GlobalKey scrollKey = GlobalKey();

  ScrollController controller = ScrollController();

  List<ItemModel> dataList = [];

  @override
  void initState() {
    dataList.clear();
    for (int i = 0; i < 100; i++) {
      dataList.add(ItemModel(i));
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("ScrollToIndexDemoPage2"),
      ),
      body: SingleChildScrollView(
        key: scrollKey,
        controller: controller,
        child: Column(
          children: dataList.map((data) {
            return CardItem(data, key: dataList[data.index].globalKey);
          }).toList(),
        ),
      ),
      persistentFooterButtons: [
        TextButton(
          onPressed: () {
            _scrollToIndex();
          },
          child: const Text("Scroll to"),
        ),
      ],
    );
  }

  _scrollToIndex() {
    var key = dataList[5];

    // 获取 ItemModel 的 renderBox 对象信息
    RenderBox renderBox =
        key.globalKey.currentContext!.findRenderObject() as RenderBox;

    // 获取ItemModel当前位置距离scrollKey绑定的组件当前所滚动位置
    double dy = renderBox
        .localToGlobal(Offset.zero,
            // ancestor参数用于指定renderBox的祖先元素的坐标空间中进行转换
            ancestor: scrollKey.currentContext!.findRenderObject())
        .dy;

    // 计算当前所需要执行滚动的距离量
    var offset = dy + controller.offset; // controller.offset从滚动控制器中获取当前滚动距离

    print("*******$offset");

    // 执行滚动
    controller.animateTo(offset,
        duration: const Duration(milliseconds: 500), curve: Curves.linear);
  }
}

class CardItem extends StatelessWidget {
  final random = math.Random();

  final ItemModel data;

  CardItem(this.data, {super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        height: (300 * random.nextDouble()),
        alignment: Alignment.centerLeft,
        child: Container(
          margin: const EdgeInsets.all(5),
          child: Text("Item ${data.index}"),
        ),
      ),
    );
  }
}

class ItemModel {
  ///这个key是关键
  GlobalKey globalKey = GlobalKey();

  ///可以添加你的代码
  final int index;

  ItemModel(this.index);
}
