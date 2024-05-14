import 'package:flutter/material.dart';

import '../keep_alin.dart';

class Tab1 extends StatelessWidget {
  const Tab1({super.key});

  @override
  Widget build(BuildContext context) {
    return CustomCache(
        child: ListView.builder(
            itemCount: 10,
            itemBuilder: (context, index) {
              return Container(
                height: 100,
                color: const Color.fromARGB(255, 129, 128, 124),
                child: Center(child: Text('测试$index')),
              );
            }));
  }
}