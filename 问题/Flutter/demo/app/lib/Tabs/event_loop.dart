import 'dart:async';
import 'package:flutter/material.dart';

class EventLoop extends StatefulWidget {
  const EventLoop({super.key});

  @override
  State<EventLoop> createState() => _EventLoopState();
}

class _EventLoopState extends State<EventLoop> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(onPressed: testFuture, child: const Text('Dart事件循环'))
      ],
    );
  }

  void testFuture() {
    // EventLoop执行顺序
    // 同步任务 -- 微任务队列 -- 异步任务队列

    // 每一个Future函数都会存放到异步队列中，当前的Future函数整体执行完后(包括.then方法)就会执行下一个异步任务
    // 比如当前下面这一块的执行顺序 f1 -- f1-then --future
    Future(() => debugPrint('f1')).then((_) => debugPrint('f1-then'));
    Future future = Future(() => debugPrint('future'));

    Future futureNull = Future(() => null);

    // 当有多个.then方法时 优先执行完当前.then方法中所有同步任务后就调用下一个.then方法，所有.then方法执行完毕后就执行所有微任务，然后再执行异步任务
    Future(() => debugPrint('f2--------------------------')).then((_) {
      debugPrint('f2-then1');
      Future(() => debugPrint('f2-then1-Future[可理解为第二级队列]'));
      future.then((_) => debugPrint('future-then[微任务]'));

      // scheduleMicrotask方法用于将一个任务添加到微任务队列中
      scheduleMicrotask(() => debugPrint('scheduleMicrotask[微任务]'));
      futureNull.then((_) => debugPrint('futureNull-then[微任务]'));
    }).then((_) => debugPrint('f2-then2'));

    Future(() => debugPrint('f3--------------------------'))
        .then((_) => Future(() => debugPrint('f4[可理解为第二级队列]')))
        .then((_) => debugPrint('f4-then'));

    Future(() => debugPrint('f5'));

    futureNull.then((_) => debugPrint('futureNull-then1'));
    future.then((_) => debugPrint('future-then1'));
    futureNull.then((_) => debugPrint('futureNull-then2'));
    future.then((_) => debugPrint('future-then2'));

    debugPrint('main start');
  }
}
