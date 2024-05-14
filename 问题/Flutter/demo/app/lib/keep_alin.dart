import 'package:flutter/material.dart';

class CustomCache extends StatefulWidget {
  final Widget child;

  const CustomCache({super.key, required this.child});

  @override
  CustomCacheState createState() => CustomCacheState();
}

// AutomaticKeepAliveClientMixin只能继承在State状态类中
class CustomCacheState extends State<CustomCache>  with AutomaticKeepAliveClientMixin {
  // 2-1 get 表示当访问该变量时就会执行该函数
  // 2-2 因为混合(with)了AutomaticKeepAliveClientMixin所以它内部会访问这个变量来确定是否保持缓存状态
  @override
  bool get wantKeepAlive => true; // 简写

  //  复杂写法
  //   bool get wantKeepAlive {
  //    return true;
  //   }

  @override
  Widget build(BuildContext context) {
    // 2-3 必须调用super.build 因为会触发 AutomaticKeepAliveClientMixin 的内部逻辑来检查是否需要缓存状态。
    // 2-4 这样每次组件在初始化时都会访问wantKeepAlive来确定是否保持缓存状态
    super.build(context);

    // 2-5 PageStorage是用来存储页面数据的(状态信息，比如滚动位置、输入内容等)
    // 2-6 混合了AutomaticKeepAliveClientMixin是用来控制当前这个组件存储的数据是否需要保留或销毁 通过wantKeepAlive返回值来决定
    return PageStorage(
      bucket: PageStorageBucket(), // 配置这一项来实现对每一个组件数据的单独管理
      child: widget.child,
    );
  }
}
