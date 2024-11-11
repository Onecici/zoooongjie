import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class VideoPlayr extends StatefulWidget {
  const VideoPlayr({super.key});

  @override
  State<VideoPlayr> createState() => _VideoPlayrState();
}

class _VideoPlayrState extends State<VideoPlayr> {
  bool isInitVideo = false; // 视频是否初始化完毕
  late VideoPlayerController videoController;

  @override
  void initState() {
    super.initState();

    videoController = VideoPlayerController.networkUrl(
        Uri.parse('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'))
      ..initialize().then((value) {
        videoController.setLooping(true); // 循环播放
        videoController.play(); // 播放

        setState(() {
          isInitVideo = true;
        });
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('视频播放器'),
        ),
        body: isInitVideo
            ? SizedBox(
                height: 300,
                child: VideoPlayer(videoController),
              )
            : Container(),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              if (videoController.value.isPlaying) {
                videoController.pause();
              } else {
                videoController.play();
              }
            });
          },
          child: Icon(
            videoController.value.isPlaying ? Icons.pause : Icons.play_arrow,
          ),
        ));
  }
}


// 详细教程 https://www.cnblogs.com/atao24/p/17916615.html