import 'package:flutter/material.dart';
import 'windmill_indicator.dart';

class WindmillIndicatorDemo extends StatelessWidget {
  const WindmillIndicatorDemo({super.key});
  @override
  Widget build(BuildContext context) {
    return const Center(
      child: WindmillIndicator(
        size: 100.0,
        speed: 0.5,
        direction: RotationDirection.clockwise,
      ),
    );
  }
}
