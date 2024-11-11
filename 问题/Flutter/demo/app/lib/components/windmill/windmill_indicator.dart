import 'dart:math';
import 'package:flutter/material.dart';

// 创建一个枚举值 里面的字段是自定义的
enum RotationDirection {
  clockwise,
  antiClockwise,
}

class WindmillIndicator extends StatefulWidget {
  final double size;
  // 旋转速度，默认：1转/秒
  final double speed;
  final direction;
  const WindmillIndicator({
    super.key,
    this.size = 50.0,
    this.speed = 1.0,
    this.direction = RotationDirection.clockwise,
  })  : assert(speed > 0),
        assert(size >
            0); // assert用来进行条件判断 只有条件不满足时就会在控制台抛出错误

  @override
  State<WindmillIndicator> createState() => _WindmillIndicatorState();
}

class _WindmillIndicatorState extends State<WindmillIndicator>
    with SingleTickerProviderStateMixin {
  late Animation<double> animation;
  late AnimationController controller;

  @override
  void initState() {
    super.initState();
    int milliseconds = 1000 ~/ widget.speed;
    controller = AnimationController(
        duration: Duration(milliseconds: milliseconds), vsync: this);
    animation = Tween<double>(begin: 0, end: 1.0).animate(controller);

    controller.repeat();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedWindmill(
      animation: animation,
      size: widget.size,
      direction: widget.direction,
    );
  }

  @override
  void dispose() {
    if (controller.status != AnimationStatus.completed &&
        controller.status != AnimationStatus.dismissed) {
      controller.stop();
    }

    controller.dispose();
    super.dispose();
  }
}

class AnimatedWindmill extends AnimatedWidget {
  final double size;
  final direction;
  final Animation<double> animation;

  const AnimatedWindmill({
    super.key,
    required this.animation,
    required this.direction,
    this.size = 50.0,
  }) : super(listenable: animation); // 将animation赋值给listenable 因为AnimatedWindmill需要初始化调用，但又继承了AnimatedWidget类而这个类中有一个listenable必传属性所以需要调用super()初始化AnimatedWidget类

  @override
  Widget build(BuildContext context) {
    final rotationAngle = direction == RotationDirection.clockwise
        ? 2 * pi * animation.value
        : -2 * pi * animation.value;
    return Stack(
      alignment: Alignment.topCenter,
      children: [
        WindmillWing(
          size: size,
          color: Colors.blue,
          angle: 0 + rotationAngle,
        ),
        WindmillWing(
          size: size,
          color: Colors.yellow,
          angle: pi / 2 + rotationAngle,
        ),
        WindmillWing(
          size: size,
          color: Colors.green,
          angle: pi + rotationAngle,
        ),
        WindmillWing(
          size: size,
          color: Colors.red,
          angle: -pi / 2 + rotationAngle,
        ),
      ],
    );
  }
}

class WindmillWing extends StatelessWidget {
  final double size;
  final Color color;
  final double angle;

  const WindmillWing(
      {super.key,
      required this.size,
      required this.color,
      required this.angle});

  @override
  Widget build(BuildContext context) {
    return Container(
      transformAlignment: Alignment.bottomCenter,
      transform: Matrix4.translationValues(0, -size / 2, 0)..rotateZ(angle), // ..符号属于链式调用
      child: ClipPath(
        clipper: WindwillClipPath(), // 绘制图形
        child: Container(
          width: size,
          height: size,
          alignment: Alignment.center,
          color: color,
        ),
      ),
    );
  }
}

class WindwillClipPath extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    var path = Path()
      ..moveTo(size.width / 3, size.height)
      ..arcToPoint(
        Offset(0, size.height * 2 / 3),
        radius: Radius.circular(size.width / 2),
      )
      ..arcToPoint(
        Offset(size.width, 0),
        radius: Radius.circular(size.width),
      )
      ..lineTo(size.width / 3, size.height);

    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return false;
  }
}
