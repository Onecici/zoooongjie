import 'dart:async';

import 'package:app/router/router.dart';
import 'package:flutter/material.dart';

class Tab7 extends StatefulWidget {
  const Tab7({super.key});

  @override
  State<Tab7> createState() => _Tab7State();
}

class _Tab7State extends State<Tab7> {
  // 1.1 定义GlobalKey类型为AnimatedListState
  final GlobalKey<AnimatedListState> _listKey = GlobalKey<AnimatedListState>();
  final List _listItems = ['第 1 条', '第 2 条', '第 3 条'];
  bool flag = true;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
            onPressed: () {
              MyRouter.push(context, '/home');
            },
            child: const Text('自定义封装路由跳转测试')),
        ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/tt');
            },
            child: const Text('命名路由跳转测试')),
        Expanded(
            child: AnimatedList(
                key: _listKey,
                initialItemCount: _listItems.length,
                itemBuilder: (context, index, animation) {
                  return FadeTransition(
                    opacity: animation,
                    child: _buildItem(index),
                  );
                })),
        ElevatedButton(onPressed: _addItem, child: const Text('添加一条数据')),
        ElevatedButton(onPressed: _addMultiItem, child: const Text('添加多条数据')),
      ],
    );
  }

  // 添加一条数据
  _addItem() {
    _listItems.insert(0, '第 ${_listItems.length + 1} 条');

    // 1.2
    // insertItem方法只有在GlobalKey的类型为AnimatedListState才能使用
    // 当添加数据时只需要写这段代码
    _listKey.currentState!.insertItem(_listItems.length - 1);
  }

  // 添加多条数据
  _addMultiItem() {
    List data = [
      '第 ${_listItems.length + 1} 条',
      '第 ${_listItems.length + 2} 条'
    ];

    data.forEach((item) {
      _listItems.insert(0, item);
      _listKey.currentState!.insertItem(_listItems.length - 1);
    });
  }

  // 删除
  _removeItem(index) {
    // 因为当快速执行_removeItem函数当时候AnimatedList会有bug 所以需要使用节流策略
    if (flag == true) {
      flag = false;
      _listKey.currentState!.removeItem(index, (context, animation) {
        var removeItem = _buildItem(index);
        _listItems.removeAt(index);
        return FadeTransition(
          opacity: animation,
          child: removeItem,
        );
      });

      // Timer.periodic无限循环定时器方法   milliseconds单位毫秒
      Timer.periodic(const Duration(milliseconds: 500), (timer) {
        flag = true;
        timer.cancel(); // 结束定时器
      });
    }
  }

  _buildItem(index) {
    return ListTile(
      title: Text(_listItems[index]),
      trailing: IconButton(
        onPressed: () {
          _removeItem(index);
        },
        icon: const Icon(Icons.delete),
      ),
    );
  }
}

class HomePageTest extends StatefulWidget {
  const HomePageTest({super.key});

  @override
  State<HomePageTest> createState() => _HomePageTestState();
}

class _HomePageTestState extends State<HomePageTest> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('路由跳转测试页'),
      ),
      body: Column(
        // List.generate方法用来生成数组
        /*
          当前生成的数据结构为
          [
            Text('data  $index'),
            Text('data  $index'),
            Text('data  $index')
          ]
         */
        children: List.generate(3, (index) {
          return Text('data  $index');
        }).toList(),
      ),
    );
  }
}
