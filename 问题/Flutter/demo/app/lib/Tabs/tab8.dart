import 'package:app/router/fluro.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Tab8 extends StatefulWidget {
  const Tab8({super.key});

  @override
  State<Tab8> createState() => _Tab8State();
}

class _Tab8State extends State<Tab8> {
  bool flag = false;
  List<User> res = [];
  GlobalKey anchorKey = GlobalKey(); // 1-2 设置GlobalKey
  final GlobalKey<AnimatedListState> _listKey = GlobalKey<AnimatedListState>();

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
            left: 0,
            top: 0,
            bottom: 0,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              width: 200,
              height: double.infinity,
              transform: flag
                  ? Matrix4.translationValues(0, 0, 0)
                  : Matrix4.translationValues(-200, 0, 0),
              color: Colors.black,
            )),
        Column(
          // Column和Row组件的crossAxisAlignment属性默认是内容居中效果 因为和css布局习惯不太一样所以将默认居中效果设置为start
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    flag = !flag;
                  });
                },
                child: const Text('点击伸缩')),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(
                  height: 100,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Container(
                        width: 50,
                        height: 40,
                        color: Colors.amber,
                      ),
                      Container(
                        width: 50,
                        height: 40,
                        color: Colors.amber,
                      )
                    ],
                  ),
                ),
                const SizedBox(
                  width: 20,
                ),
                Container(
                  width: 100,
                  height: 100,
                  color: Colors.red,
                  key: anchorKey, // 1-3 将GlobalKey挂载到组件上
                ),
                ElevatedButton(
                    onPressed: () {
                      // 1-1 获取组件居于屏幕中的坐标方法
                      RenderBox renderBox = anchorKey.currentContext!
                          .findRenderObject() as RenderBox;

                      // 1-4 组件宽高
                      print(
                          '宽度：${renderBox.size.width}   高度：${renderBox?.size.height}');
                      // 1-5 组件左上坐标(x, y)
                      Offset topLeft = renderBox!.localToGlobal(Offset.zero);
                      print('组件左上坐标----X：${topLeft.dx}--y：${topLeft.dy}');
                      // 1-6 组件右下坐标(x, y)
                      Offset bottomRight = topLeft.translate(
                          renderBox.size.width, renderBox.size.height);
                      print('组件右下坐标----$bottomRight');
                    },
                    child: const Text('点击获取组件屏幕坐标'))
              ],
            ),
            Expanded(
                child: AnimatedList(
                    key: _listKey,
                    initialItemCount: res.length,
                    itemBuilder: (context, index, animation) {
                      return FadeTransition(
                        opacity: animation,
                        child: ListTile(
                          title: Text(res[index].name),
                        ),
                      );
                    })),
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    var resrrr = User.res([
                      {'name': 'sadas', 'age': 365},
                      {'name': 'efg', 'age': 22}
                    ]);

                    resrrr.forEach((item) {
                      res.insert(0, item);
                      _listKey.currentState!.insertItem(res.length - 1);
                    });
                  });
                },
                child: const Text('点击获取User数据')),
            //点击该按钮后弹出对话框
            ElevatedButton(
              child: const Text("对话框1"),
              onPressed: () async {
                //弹出对话框并等待其关闭
                bool? delete = await showDeleteConfirmDialog1();
                if (delete == null) {
                  print("取消删除");
                } else {
                  print("已确认删除");
                }
              },
            ),

            ElevatedButton(
                onPressed: () {
                  Routes.route.navigateTo(context, '/login/123456');
                },
                child: const Text('query参数跳转')),
            ElevatedButton(
                onPressed: () {
                  // 汉字需要使用Uri.encodeComponent进行转码
                  Routes.route.navigateTo(context,
                      '/login?title=Login ${Uri.encodeComponent('页面')}');
                },
                child: const Text('params参数跳转')),
            ElevatedButton(onPressed: _addData, child: const Text('数据持久化测试')),
            Expanded(
                child: GlowingOverscrollIndicator(
              axisDirection: AxisDirection.down,
              color: Colors.red,
              child: ListView(
                  children: List.generate(10, (context) {
                return const Text('data');
              })),
            )),
          ],
        )
      ],
    );
  }

  void _addData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.setString('testInfo', 'hahah');
    _searchData('testInfo');
  }

  void _searchData(String key) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    print(prefs.getString('testInfo'));
  }

  // 弹出对话框
  // showDialog当点击遮罩层关闭时返回值会是null所以类型写 ?
  Future<bool?> showDeleteConfirmDialog1() {
    return showDialog<bool>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text("提示"),
          content: const Text("您确定要删除当前文件吗?"),
          actions: <Widget>[
            TextButton(
              child: const Text("取消"),
              onPressed: () {
                // 关闭对话框并返回false
                Navigator.of(context)
                    .pop(false); //.pop()方法调用后可以将参数当作showDialog的返回值
              },
            ),
            TextButton(
              child: const Text("删除"),
              onPressed: () {
                // 关闭对话框并返回true
                Navigator.of(context).pop(true);
              },
            ),
          ],
        );
      },
    );
  }
}

// 手动json序列化
class User {
  String name;
  int age;

  User({required this.name, required this.age});

  static List<User> res(List response) {
    return response.map((itemData) => fromUser(itemData)).toList();
  }

  User.from(Map json)
      : name = json['name'],
        age = json['age'];

  static User fromUser(Map data) {
    return User(
      name: data['name'],
      age: data['age'],
    );
  }
}

