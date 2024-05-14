import 'package:flutter/material.dart';

class Tab5 extends StatefulWidget {
  const Tab5({super.key});

  @override
  State<Tab5> createState() => _Tab5State();
}

class _Tab5State extends State<Tab5> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 20.0, right: 20.0),
      child: CustomScrollView(
        slivers: [
          const SliverAppBar(
            pinned: true, // AppBar始终固定在顶部
            expandedHeight: 80.0, // AppBar的展开高度
            backgroundColor: Colors.grey,
            flexibleSpace: FlexibleSpaceBar( // 可伸缩的空间
              title: Text('自定义滚动组件'),
            ),
          ),
          SliverGrid.count( // 网格布局
            crossAxisCount: 4, // 每行限制的数量
            children: List.generate(8, (index) { // List.generate(创建的数量，创建网格的函数)
              return Container(
                color: Colors.primaries[index % Colors.primaries.length],
                alignment: Alignment.center,
                child: Text(
                  '$index',
                  style: const TextStyle(color: Colors.white, fontSize: 20),
                ),
              );
            }).toList(),
          ),
          // 列表布局
          SliverList(
            delegate: SliverChildBuilderDelegate((content, index) {
              return Container(
                height: 85,
                alignment: Alignment.center,
                color: Colors.primaries[index % Colors.primaries.length],
                child: Text(
                  '$index',
                  style: const TextStyle(color: Colors.white, fontSize: 20),
                ),
              );
            }, childCount: 25), // childCount创建的数量
          ),
        ],
      ),
    );
  }
}
