import 'package:flutter/material.dart';

// 实现 小图点击后飞行至大图 效果
class HeroAnimated extends StatelessWidget {
  const HeroAnimated({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemBuilder: (context, index) {
        return HeroItem(index + 1);
      },
      itemCount: 2,
    );
  }
}

// 小图
class HeroItem extends StatelessWidget {
  final int index;

  const HeroItem(this.index, {super.key});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text('Item $index'),
      leading: Hero(
        // createRectTween表示飞行过程中是以何种线条运动
        createRectTween: (begin, end) {
          return RectTween(begin: begin, end: end);
        },
        // tag参数非常重要，小图和大图的Hero组件tag参数必须保持一致，否则大图无法执行动画效果
        tag: "hero-item-$index",
        child: SizedBox(
          width: 200,
          child: Image(
            image: AssetImage("assets/$index.png"),
            fit: BoxFit.contain,
          ),
        ),
      ),
      onTap: () {
        // 该方式属于动态路由 可以直接进行跳转不需要在routes中定义路由名称
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return ImageDetailWidget(index);
            },
          ),
        );
      },
    );
  }
}

// 大图
class ImageDetailWidget extends StatelessWidget {
  final int index;

  const ImageDetailWidget(this.index, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("ImageDetail"),
      ),
      body: Hero(
        createRectTween: (begin, end) {
          return RectTween(begin: begin, end: end);
        },
        // tag参数非常重要，小图和大图的Hero组件tag参数必须保持一致，否则大图无法执行动画效果
        tag: "hero-item-$index",
        child: Center(
          child: Image(
            image: AssetImage("assets/$index.png"),
          ),
        ),
      ),
    );
  }
}
