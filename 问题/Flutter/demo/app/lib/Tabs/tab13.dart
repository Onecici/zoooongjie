import 'package:flutter/material.dart';

class Tab13 extends StatefulWidget {
  const Tab13({super.key});

  @override
  State<Tab13> createState() => _Tab13State();
}

class _Tab13State extends State<Tab13> {
  final PageController _controller = PageController(initialPage: 2);
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    List<BottomNavigationBarItem> pageInfo = [
      _bottomItem('首页', Icons.home, 0),
      _bottomItem('排行', Icons.local_fire_department, 1),
      _bottomItem('收藏', Icons.favorite, 2),
      _bottomItem('我的', Icons.live_tv, 3),
    ];

    return Scaffold(
      body: PageView(
        controller: _controller,
        children: List.generate(pageInfo.length, (index) {
          if (index == pageInfo.length - 1) {
            return PageTest2(
              index: index,
            );
          }
          return PageTest(
            index: index,
          );
        }),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        currentIndex: _currentIndex,
        selectedItemColor: Colors.blue,
        onTap: (index) {
          _onJumpTo(index);
        },
        items: pageInfo,
      ),
    );
  }

  _bottomItem(String title, IconData icon, int index) {
    return BottomNavigationBarItem(
        icon: Icon(icon, color: Colors.grey),
        activeIcon: Icon(icon, color: Colors.blue),
        label: title);
  }

  _onJumpTo(int index) {
    _controller.jumpToPage(index);
    setState(() {
      _currentIndex = index;
    });
  }
}

class PageTest extends StatelessWidget {
  final int index;
  const PageTest({super.key, required this.index});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        '$index',
        style: const TextStyle(fontSize: 28),
      ),
    );
  }
}

class PageTest2 extends StatelessWidget {
  final int index;
  const PageTest2({super.key, required this.index});

  get _appBar => Container(
        color: Colors.grey,
        width: double.infinity,
        height: 100,
        child: const Center(
          child: Text('home'),
        ),
      );

  get _listViews => ListView(
        children: const [
          Text('data'),
          SizedBox(
            height: 1600,
          )
        ],
      );

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [_appBar, _listViews],
    );
  }
}
