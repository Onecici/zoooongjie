import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ProviderView extends StatefulWidget {
  const ProviderView({super.key});

  @override
  State<ProviderView> createState() => _ProviderViewState();
}

class _ProviderViewState extends State<ProviderView> {
  @override
  Widget build(BuildContext context) {

    return Column(
      children: [
        // Consumer<Counter1>来订阅指定Counter1数据变化
        Consumer<Counter1>(
          builder: (context, counter, child) {
            return Text(
              '${counter.count}',
            );
          },
        ),
        Consumer<Counter2>(
          builder: (context, counter, child) {
            return Text(
              '${counter.count}',
            );
          },
        ),
        Consumer<Counter3>(
          builder: (context, counter, child) {
            return Text(
              '${counter.count}',
            );
          },
        ),
        ElevatedButton(
            onPressed: () {
              // 通过Provider.of<Counter1>来获取指定Counter1数据类中方法
              Provider.of<Counter1>(context, listen: false).increment();
            },
            child: const Text('add Count'))
      ],
    );
  }
}

// provider 1.1 定义state数据类 该数据类必须with ChangeNotifier该类
class Counter1 with ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

class Counter2 with ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

class Counter3 with ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}
