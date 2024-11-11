import 'package:app/components/expandable_content.dart';
import 'package:app/components/common_rich_text.dart';
import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:photo_view/photo_view.dart';
import 'package:wechat_assets_picker/wechat_assets_picker.dart';

class AnimationView extends StatefulWidget {
  const AnimationView({super.key});

  @override
  State<AnimationView> createState() => _AnimationViewState();
}

class _AnimationViewState extends State<AnimationView>
    with TickerProviderStateMixin {
  late AnimationController _controller;
  late AnimationController _controller2;

  List<AssetEntity> selectedImages = [];
  bool dragNow = false;
  bool isRemoveTarget = false;

  @override
  void initState() {
    super.initState();

    _controller = AnimationController(
        duration: const Duration(milliseconds: 1000), vsync: this);
    _controller2 = AnimationController(
        duration: const Duration(milliseconds: 300), vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        SlideTransition(
            // chain方法和drive方法的区别
            // 1. chain方法和drive方法都是用来组合动画
            // 2. chain方法组合完动画后返回的是 Animatable类型 这个类型需要通过drive()、animate()等方法将其转换为 Animation 类型以便使用。
            // 3. drive方法组合完动画后返回的是 Animation类型可以在常用动画组件的animation属性中使用 因为很多动画组件的animation属性都需要使用Animation类型

            // 总结：chain方法相当于处于构建完毕的过程但需要通过drive()、animate()等方法转换后可供常用动画组件使用
            // drive方法可以直接放入使用
            position: Tween(
                    // Offset(x, y)设置坐标
                    // 定义动画开始位置和结束位置
                    begin: const Offset(0.0, 0.0),
                    end: const Offset(0.0, 1.0))
                .chain(CurveTween(curve: Curves.bounceInOut)) // 曲线
                .chain(CurveTween(
                    curve: const Interval(0.2, 0.8))) // 表示从动画时间的20%开始执行 80%结束
                .animate(_controller),
            child: Container(
              height: 100,
              color: Colors.amber,
            )),
        forwrodButton(_controller,
            {'start': 'SlideTransition Start', 'end': 'SlideTransition stop'}),
        Stack(
          children: [
            ScaleTransition(
              scale: Tween(begin: 1.0, end: 0.0).animate(_controller2),
              child: const Icon(Icons.search),
            ),
            ScaleTransition(
              scale: Tween(begin: 0.0, end: 1.0).animate(_controller2),
              child: const Icon(Icons.close),
            )
          ],
        ),
        forwrodButton(_controller2,
            {'start': 'ScaleTransition Start', 'end': 'ScaleTransition stop'}),
        _buildPhotosList(),
        ElevatedButton(
            onPressed: () {
              showModalBottomSheet(
                  context: context,
                  builder: (context) {
                    return SizedBox(
                      height: 300,
                      child: ListView(
                        // MainAxisSize.min 在主轴上只占据children所需的空间，而不是填满可用空间。
                        children: [
                          ListTile(
                            leading: const Icon(Icons.photo),
                            title: const Text('Photo'),
                            onTap: () {
                              Navigator.pop(context);
                            },
                          ),
                          const Divider(),
                          ListTile(
                            leading: const Icon(Icons.music_note),
                            title: const Text('Music'),
                            onTap: () {
                              Navigator.pop(context);
                            },
                          ),
                          const Divider(),
                          ListTile(
                            leading: const Icon(Icons.videocam),
                            title: const Text('Video'),
                            onTap: () {
                              Navigator.pop(context);
                            },
                          ),
                          const Divider(),
                          ListTile(
                            leading: const Icon(Icons.share),
                            title: const Text('Share'),
                            onTap: () {
                              Navigator.pop(context);
                            },
                          ),
                          Container(
                            color: Colors.grey[300],
                            height: 8,
                          ),
                          GestureDetector(
                            behavior: HitTestBehavior.opaque,
                            onTap: () {
                              Navigator.pop(context);
                            },
                            child: const Padding(
                              padding: EdgeInsets.all(20),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [Icon(Icons.cancel), Text('取消')],
                              ),
                            ),
                          )
                        ],
                      ),
                    );
                  });
            },
            child: const Text('showModalBottomSheet')),
        const Center(
          child: SizedBox(
            width: 300,
            child: CommonRichText(
              maxLines: 2,
              text:
                  '5asfafafa5asfafafa5asfafafaasfafafafafa5afa5a5asfafafa5asfafafa5asfafafaasfafafafafa5afa5a',
            ),
          ),
        ),
        const ExpandableContent(),
        Container(
          height: 100,
          decoration: const BoxDecoration(
              gradient: LinearGradient(
                  begin: Alignment.bottomLeft,
                  end: Alignment.topRight,
                  colors: [Colors.black, Colors.red])),
        ),
        Center(
          // ClipRRect用于裁剪child成圆形
          child: ClipRRect(
            borderRadius: BorderRadius.circular(25),
            child: Container(
              width: 50,
              height: 50,
              color: Colors.amber,
            ),
          ),
        ),
      ],
    );
  }

  Widget forwrodButton(AnimationController controller, Map title) {
    return Row(
      children: [
        ElevatedButton(
            onPressed: () {
              controller.forward();
            },
            child: Text(title['start'])),
        ElevatedButton(
            onPressed: () {
              controller.reverse();
            },
            child: Text(title['end']))
      ],
    );
  }

  Widget _buildPhotosList() {
    return Wrap(children: [
      ...List.generate(selectedImages.length, (index) {
        AssetEntity sImage = selectedImages[index];

        // Draggable组件可以实现拖拽效果
        return Draggable(
            data: index, // data属性就算为null也必写
            // feedback当前拖拽中显示的组件
            feedback: _imageItemBox(sImage, index: index),
            // childWhenDragging拖拽时将child组件替换成当前配置的组件
            childWhenDragging:
                _imageItemBox(sImage, isTemplate: true, index: index),

            // 拖拽开始
            onDragStarted: () {
              setState(() {
                dragNow = true;
              });
            },
            // 拖拽结束
            onDragEnd: (details) {
              setState(() {
                dragNow = false;
              });
            },
            child: GestureDetector(
              // HitTestBehavior.opaque 可以对组件视图空白区域支持事件响应
              behavior: HitTestBehavior.opaque,
              onTap: () {
                Get.to(ProviderImage(
                  sImage: sImage,
                ));
              },
              child: _imageItemBox(sImage, index: index),
            ));
      }),
      GestureDetector(
        onTap: () async {
          final List<AssetEntity>? result =
              await AssetPicker.pickAssets(context);

          if (result != null) {
            setState(() {
              selectedImages = result;
            });
          }
        },
        child: Container(
          width: 80,
          height: 80,
          color: Colors.grey,
          child: const Icon(Icons.add),
        ),
      ),
      dragNow ? delImageBar() : const SizedBox.shrink()
    ]);
  }

  Widget _imageItemBox(sImage, {bool isTemplate = false, required int index}) {
    double imagePadding = 12;
    double itemBoxCol = 3;
    double itemBoxWidth =
        ((MediaQuery.of(context).size.width - (imagePadding * 2) * itemBoxCol) /
                itemBoxCol)
            .floorToDouble();

    return DragTarget(
      onWillAcceptWithDetails: (details) {
        return true;
      },
      onAcceptWithDetails: (data) {
        int imageIndex = data.data as int;
        AssetEntity sImageItem = selectedImages[imageIndex];
        selectedImages.removeAt(imageIndex);
        selectedImages.insert(index, sImageItem);
      },
      builder: (context, candidateData, rejectedData) {
        return Padding(
          padding: EdgeInsets.all(imagePadding),
          child: Container(
            width: itemBoxWidth,
            height: 80,
            color: const Color.fromARGB(255, 218, 214, 214),
            child: Padding(
              padding: const EdgeInsets.all(6),
              child: isTemplate
                  ? Container(
                      color: Colors.grey,
                    )
                  : AssetEntityImage(
                      sImage,
                      fit: BoxFit.cover,
                    ),
            ),
          ),
        );
      },
    );
  }

  Widget delImageBar() {
    // DragTarget用于接受Draggable组件拖拽
    return DragTarget(onWillAcceptWithDetails: (details) {
      // 当拖拽组件拖入当前组件上时触发
      setState(() {
        isRemoveTarget = true;
      });
      return true; // 返回true表示当前拖入的组件标记了一个 ”已接受“ 状态
    }, onAcceptWithDetails: (data) {
      // 当拖入的组件在当前组件上松开时，如果当前这个组件是处于”已接受“状态 就会触发
      setState(() {
        isRemoveTarget = false;
      });
      int imageIndex = data.data as int;
      selectedImages.removeAt(imageIndex);
    }, onLeave: (data) {
      setState(() {
        isRemoveTarget = false;
      });
    }, builder: (context, candidateData, rejectedData) {
      return Container(
        width: 80,
        height: 80,
        color: isRemoveTarget ? Colors.red : Colors.red[200],
        child: const Icon(Icons.delete),
      );
    });
  }
}

// 浏览图片
class ProviderImage extends StatefulWidget {
  final AssetEntity sImage;
  const ProviderImage({super.key, required this.sImage});

  @override
  State<ProviderImage> createState() => _ProviderImageState();
}

class _ProviderImageState extends State<ProviderImage> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Get.back();
      },
      child: Scaffold(
        backgroundColor: Colors.black,
        body: PhotoView(
          imageProvider: AssetEntityImageProvider(widget.sImage),
        ),
      ),
    );
  }
}
