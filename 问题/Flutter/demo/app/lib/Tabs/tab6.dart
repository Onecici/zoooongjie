import 'package:app/gen/assets.gen.dart';
import 'package:flutter/material.dart';

class Tab6 extends StatefulWidget {
  const Tab6({super.key});

  @override
  State<Tab6> createState() => _Tab6State();
}

class _Tab6State extends State<Tab6> {
  final bool _pinned = true; // 是否在滚动中保持可见
  final bool _floating = true; // 是否在上滑时自动隐藏

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        SliverPersistentHeader(
          delegate: _MySliverPersistentHeaderDelegate(),
          pinned: _pinned,
          floating: _floating,
        ),
        SliverList.builder(
            itemCount: 40,
            itemBuilder: (context, index) {
              return ListTile(
                title: Text('item-$index'),
              );
            })
      ],
    );
  }
}

class _MySliverPersistentHeaderDelegate extends SliverPersistentHeaderDelegate {
  final double _minExtent = 80;
  final double _maxExtent = 160;

  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    //创建child子组件
    //shrinkOffset：child偏移值minExtent~maxExtent
    //overlapsContent：SliverPersistentHeader覆盖其他子组件返回true，否则返回false
    print('shrinkOffset = $shrinkOffset overlapsContent = $overlapsContent');
    return Container(
      alignment: Alignment.center,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: Assets.a1.provider(),
          fit: BoxFit.cover,
        ),
      ),
    );
  }

  // 以下写法是SliverPersistentHeaderDelegate父类中约定好的方法需要在子类中实现
  // 只要加上了 @override 就是重写父类的属性或方法

  // 重写maxExtent最大高度
  @override
  double get maxExtent => _maxExtent;

  // 重写minExtent最小高度
  @override
  double get minExtent => _minExtent;

  // shouldRebuild方法用于判断是否需要重建SliverPersistentHeader的状态。在这个函数中，它始终返回false，表示不需要重建
  @override
  bool shouldRebuild(covariant _MySliverPersistentHeaderDelegate oldDelegate) {
    return false;
  }
}
