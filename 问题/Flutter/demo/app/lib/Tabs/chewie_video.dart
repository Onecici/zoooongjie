import 'package:app/Tabs/tab3/chewieCustomUi/customUIChewie.dart';
import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';

class ChewieVideo extends StatefulWidget {
  const ChewieVideo({super.key});
  @override
  State<ChewieVideo> createState() => _ChewieVideoState();
}

class _ChewieVideoState extends State<ChewieVideo> {
  late VideoPlayerController videoPlayerController;
  late ChewieController chewieController;
  double aspectRatio = 3 / 2;

  @override
  void initState() {
    super.initState();
    _initVideo();
  }

  _initVideo() async {
    videoPlayerController = VideoPlayerController.networkUrl(
        Uri.parse('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'))
      ..initialize();
    chewieController = ChewieController(
      videoPlayerController: videoPlayerController,
      customControls: const CustomMaterialControls(),
      looping: true,
      materialProgressColors: _progressColors,
      optionsBuilder: (context, chewieOptions) async {
        //自定义视频上方三个点
        await showModalBottomSheet(
            context: context,
            builder: (context) {
              return SizedBox(
                child: ListView(
                  children: [
                    ListTile(
                      title: const Text("播放速度"),
                      onTap: () {
                        chewieOptions[0].onTap!(); //播放速度的汉化
                      },
                    ),
                    ListTile(
                      title: const Text("取消"),
                      onTap: () {
                        Navigator.pop(context);
                      },
                    ),
                  ],
                ),
              );
            });
      },
    );
  }

  //进度条颜色配置
  get _progressColors => ChewieProgressColors(
      playedColor: Colors.amber,
      handleColor: Colors.amber,
      backgroundColor: Colors.grey,
      bufferedColor: Colors.amber);

/*销毁*/
  @override
  void dispose() {
    videoPlayerController.dispose();
    chewieController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3, crossAxisSpacing: 10, mainAxisSpacing: 10),
        itemCount: 5,
        itemBuilder: (BuildContext context, index) {
          return GestureDetector(
            onTap: () {
              Get.to(const VideoPage());
            },
            child: AbsorbPointer(
              child: Container(
                color: Colors.red,
                child: Padding(
                  padding: const EdgeInsets.all(4),
                  child: Chewie(
                    controller: chewieController,
                  ),
                ),
              ),
            ),
          );
        });
  }
}

class VideoPage extends StatefulWidget {
  const VideoPage({super.key});

  @override
  State<VideoPage> createState() => _VideoPageState();
}

class _VideoPageState extends State<VideoPage> {
  late VideoPlayerController videoPlayerController;
  late ChewieController chewieController;
  double aspectRatio = 3 / 2;

  @override
  void initState() {
    super.initState();
    _initVideo();
  }

  _initVideo() async {
    videoPlayerController = VideoPlayerController.networkUrl(
        Uri.parse('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'));
    chewieController = ChewieController(
      videoPlayerController: videoPlayerController,
      customControls: const CustomMaterialControls(),
      aspectRatio: aspectRatio,
      looping: true,
      autoPlay: true,
      materialProgressColors: _progressColors,
      optionsBuilder: (context, chewieOptions) async {
        //自定义视频上方三个点
        await showModalBottomSheet(
            context: context,
            builder: (context) {
              return SizedBox(
                child: ListView(
                  children: [
                    ListTile(
                      title: const Text("播放速度"),
                      onTap: () {
                        chewieOptions[0].onTap!(); //播放速度的汉化
                      },
                    ),
                    ListTile(
                      title: const Text("取消"),
                      onTap: () {
                        Navigator.pop(context);
                      },
                    ),
                  ],
                ),
              );
            });
      },
    );
  }

  //进度条颜色配置
  get _progressColors => ChewieProgressColors(
      playedColor: Colors.amber,
      handleColor: Colors.amber,
      backgroundColor: Colors.grey,
      bufferedColor: Colors.amber);

/*销毁*/
  @override
  void dispose() {
    videoPlayerController.dispose();
    chewieController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.black,
        body: Chewie(
          controller: chewieController,
        ));
  }
}
