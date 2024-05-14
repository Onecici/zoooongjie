import 'package:app/Tabs/tab6.dart';
import 'package:app/Tabs/tab7.dart';
import 'package:app/components/windmill/windmill_indicator_demo.dart';
import 'package:app/language/l10n/gen/app_localizations.dart';
import 'package:flutter/material.dart';

// tabs
import './Tabs/tab1.dart';
import './Tabs/tab2.dart';
import 'Tabs/tab3/tab3.dart';
import './Tabs/tab4.dart';
import './Tabs/tab5.dart';
import 'Tabs/hero_animated.dart';

// 选项卡
class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

// 创建选项卡步骤1-1  with SingleTickerProviderStateMixin
class _HomeState extends State<Home> with SingleTickerProviderStateMixin {
  // 创建选项卡步骤1-2
  late TabController _tabController;

// StatefulWidget中特有的生命周期方法
// StatelessWidget一旦构建就不会再次改变状态,所以没有生命周期

  // 固定写法
  // @override
  // void initState() {
  //   super.initState();
  // }

// initState当组件初始化的时候就会触发 可以在这进行（初始化变量、订阅数据、建立连接）
  @override
  void initState() {
    super.initState();

// 创建选项卡步骤1-3
    _tabController = TabController(length: 9, vsync: this); // 设置选项卡的数量和vsync
    // 监听_tabController选项卡进入和离开事件
    _tabController.addListener(() {
      // _tabController.animation!.value 是选项卡的索引浮点数 它可以在选项卡离开时获取的是上一次的索引 进入时可以获取当前索引
      // _tabController.index 可以获取选项卡索引 可以实时获取索引 不论进入和离开都是获取对应当前选项卡的索引
      // 因为进入选项卡和离开选项卡都会执行函数 所以使用_tabController.animation!.value和_tabController.index进行判断
      if (_tabController.animation!.value == _tabController.index) {
        print(_tabController.index);
      }
    });
  }

// 组件销毁时生命周期
  @override
  void dispose() {
    super.dispose();

// 创建选项卡步骤1-4
    _tabController.dispose(); // 释放资源
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text(AppLocalizations.of(context)!.title),
          backgroundColor: Colors.amber,
          // 创建选项卡步骤1-5
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(70),
            child: Container(
                width: double.infinity,
                height: 70,
                color: Color.fromARGB(255, 175, 236, 236),
                child: Column(
                  children: [
                    Expanded(
                        child: Container(
                      width: double.infinity,
                      color: const Color.fromARGB(255, 235, 232, 232),
                      child: const Text('我是Tab的标题'),
                    )),
                    SizedBox(
                      width: double.infinity,
                      child: TabBar(
                        controller: _tabController, // 关联 TabController
                        isScrollable: true, // 选项卡tab内容占满时可以进行滚动
                        indicatorColor: Colors.amber,
                        indicatorSize: TabBarIndicatorSize
                            .tab, // 修改选项卡底部横条的大小 .label表示和内容一样长
                        // indicator: BoxDecoration( 修改选项卡内容盒子样式 会导致底部横条消失
                        //     color: Colors.blueGrey, borderRadius: BorderRadius.circular(8)),
                        onTap: (index) {
                          // 只能监听点击选项卡事件  不能监听滑动
                          print(index);
                        },
                        tabs: const [
                          Tab(text: 'Tab 1'),
                          Tab(text: 'Tab 2'),
                          Tab(text: 'Tab 3'),
                          Tab(text: 'Tab 4'),
                          Tab(text: 'Tab 5'),
                          Tab(text: 'Tab 6'),
                          Tab(text: '多语言更改'),
                          Tab(text: 'HeroAnimated'),
                          Tab(text: '大风车'),
                        ],
                      ),
                    )
                  ],
                )),
          )),
      // 创建选项卡步骤1-6  End
      body: TabBarView(
        controller: _tabController, // 关联 TabController
        children: [
          // 对应TabBar组件选项卡数组中索引来显示内容
          Tab1(),
          Tab2(),
          Tab3(),
          Tab4(),
          Tab5(),
          Tab6(),
          ChangeLocale(),
          HeroAnimated(),
          WindmillIndicatorDemo(),
        ],
      ),
    );
  }
}
