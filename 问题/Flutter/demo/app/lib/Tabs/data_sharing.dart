import 'package:flutter/material.dart';

class DataSharing extends StatefulWidget {
  const DataSharing({super.key});

  @override
  State<DataSharing> createState() => _DataSharingState();
}

class _DataSharingState extends State<DataSharing> {
  int data = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        FilledButton(
            onPressed: () {
              setState(() {
                data++;
              });
            },
            child: const Text('点击++')),
        Expanded(
            child: _MyInheritedWidget(data: data, child: const MyComponent()))
      ],
    );
  }
}

// saas 1.1 创建一个用来专门做数据共享的组件继承自InheritedWidget
class _MyInheritedWidget extends InheritedWidget {
  final int data;

  const _MyInheritedWidget({
    required this.data,
    required super.child,
  });

  // ---------------------固定的访问方法(写法固定直接复制即可)------------------------
  static int of(BuildContext context) {
    // context.dependOnInheritedWidgetOfExactType可以获取指定InheritedWidget类型的组件实例，从而获取共享数据
    _MyInheritedWidget myInheritedWidget =
        context.dependOnInheritedWidgetOfExactType<_MyInheritedWidget>()!;
    return myInheritedWidget.data;
  }

  @override
  bool updateShouldNotify(_MyInheritedWidget oldWidget) {
    return oldWidget.data != data;
  }
  // ----------------------------------------------------------
}

class MyComponent extends StatefulWidget {
  const MyComponent({super.key});

  @override
  State<MyComponent> createState() => _MyComponentState();
}

class _MyComponentState extends State<MyComponent> {
  @override
  Widget build(BuildContext context) {
    // saas 1.2 在MyInheritedWidget的子组件中获取共享数据
    final int data = _MyInheritedWidget.of(context);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.amber,
        title: const Text('InheritedWidget数据共享'),
      ),
      body: Text('获取 InheritedWidget 共享的数据 $data'),
    );
  }
}
