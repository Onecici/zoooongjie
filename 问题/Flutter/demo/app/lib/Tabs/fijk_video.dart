import 'dart:async';

import 'package:fijkplayer/fijkplayer.dart';
import 'package:flutter/material.dart';

class FijkVideo extends StatefulWidget {
  const FijkVideo({super.key});

  @override
  State<FijkVideo> createState() => _FijkVideoState();
}

class _FijkVideoState extends State<FijkVideo> {
  final FijkPlayer player = FijkPlayer();
  bool _playing = false;
  bool _showMask = false;

  @override
  void initState() {
    super.initState();
    player.setDataSource(
      'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      autoPlay: true,
    );

    // 监听播放器的暂停播放事件
    player.addListener(_playerValueChanged);
  }

  void _playerValueChanged() {
    FijkValue value = player.value;

    bool playing = (value.state == FijkState.started);
    if (playing != _playing) {
      setState(() {
        _playing = playing;
        _showMask = true;
      });

      debounce(() {
        setState(() {
          _showMask = false;
        });
      });
    }
  }

  // 防抖
  Timer? timer;
  void debounce(Function function) {
    timer?.cancel();
    timer = Timer(
      const Duration(milliseconds: 1000),
      () {
        function();
      },
    );
  }

  Timer? timer2;
  void debounce2(Function function) {
    timer2?.cancel();
    timer2 = Timer(
      const Duration(milliseconds: 350),
      () {
        function();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LayoutBuilder(
          builder: (context, constraints) {
            double videoBoxHeight = 200;
            double iconSize = 50;

            return SizedBox(
              height: videoBoxHeight,
              child: Stack(
                children: [
                  GestureDetector(
                    onTap: () {
                      FijkValue value = player.value;
                      bool playing = (value.state == FijkState.started);
                      debounce2(() {
                        if (playing) {
                          player.pause();
                        } else {
                          player.start();
                        }
                      });
                    },
                    child: AbsorbPointer(
                      child: FijkView(
                        player: player,

                        // 将内置UI替换成空白，使用自定义UI来控制
                        panelBuilder: (FijkPlayer player,
                            FijkData data,
                            BuildContext context,
                            Size viewSize,
                            Rect texturePos) {
                          return const SizedBox.shrink();
                        },
                      ),
                    ),
                  ),
                  AnimatedSwitcher(
                    duration: const Duration(milliseconds: 200),
                    child: _showMask
                        ? Container(
                            key: UniqueKey(),
                            alignment: Alignment.center,
                            child: _playing
                                ? Icon(
                                    Icons.pause,
                                    size: iconSize,
                                  )
                                : Icon(
                                    Icons.play_arrow,
                                    size: iconSize,
                                  ))
                        : const SizedBox.shrink(),
                  )
                ],
              ),
            );
          },
        ),
        // ShaderMask对子部件进行着色
        ShaderMask(
          // RadialGradient ShaderMask专用渐变色组件
          shaderCallback: (Rect bounds) => const RadialGradient(colors: [
            Color(0xFFEE6E6E),
            Color.fromARGB(255, 177, 214, 238)
          ], center: Alignment.topLeft)
              .createShader(bounds),
          child: Container(
            // 当前以 Alignment.center 为基准使用Alignment(1, 1)进行x和y的偏移
            alignment: Alignment.center.add(const Alignment(1, 1)),
            width: 100,
            height: 100,
            color: Colors.amber,
            child: const Text('data'),
          ),
        ),
      ],
    );
  }

  @override
  void dispose() {
    super.dispose();
    player.release();
  }
}
