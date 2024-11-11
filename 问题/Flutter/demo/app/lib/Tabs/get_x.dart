import 'package:app/Tabs/Getx/controllers/number.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class GetXViewTest extends StatefulWidget {
  const GetXViewTest({super.key});

  @override
  State<GetXViewTest> createState() => _GetXViewTestState();
}

class _GetXViewTestState extends State<GetXViewTest> {
  final _numberControllers = Get.find<
      NumberControllers>(); // GetXView 1.2 通过<NumberControllers>获取指定全局已注册的state数据控制器
  final RxInt _counter = 0.obs; // .obs 监听当前数据变化

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
            onPressed: () {
              Get.defaultDialog(
                  title: '提示信息',
                  middleText: '内容...',
                  confirm: ElevatedButton(
                      onPressed: () {
                        Get.back();
                      },
                      child: const Text('确定')),
                  cancel: ElevatedButton(
                      onPressed: () {
                        Get.back();
                      },
                      child: const Text('取消')));
            },
            child: const Text('Dialog')),
        ElevatedButton(
            onPressed: () {
              Get.snackbar('提示', 'Error',
                  backgroundColor: const Color.fromARGB(255, 185, 182, 175));
            },
            child: const Text('浮层提示')),
        ElevatedButton(
            onPressed: () {
              Get.toNamed('/getxTest');
            },
            child: const Text('GetX 跳转命名路由')),
        Obx(() => Text(
              "$_counter",
              style: Theme.of(context).textTheme.headlineLarge,
            )),
        ElevatedButton(
            onPressed: () {
              _counter.value++;

              // 如果getx状态数据不需要在视图监听动态显示则不需要使用Obx()函数监听数据变化改变视图
              // 数据层是具有响应式 视图层没有
              print('---------${_counter.value}');
            },
            child: const Text('GetX State Edit Data')),
        // GetXView 1.3 使用Obx监听数据变化从而改变视图
        Obx(() => Text(
              "${_numberControllers.number}",
              style: Theme.of(context).textTheme.headlineLarge,
            )),
        // GetXView 1.4 使用 GetBuilder<控制器> 方式也能监听数据变化 但是必须使用update()方法更新才行
        GetBuilder<NumberControllers>(
            id: 'number_controllers',
            builder: (controllers) => Text('${controllers.number}')),
        ElevatedButton(
            onPressed: () {
              _numberControllers.addNumber();
            },
            child: const Text('NumberControllers控制器使用')),
        Container(
          width: double.infinity,
          color: Colors.amber,
          child: Column(
            children: [
              ElevatedButton(
                  onPressed: () {
                    Get.to(const GetxViewControllersTest());
                  },
                  child: const Text('进入 GetView<控制器> 页面')),
              ElevatedButton(
                  onPressed: () {
                    _numberControllers.addNList('一条数据');
                  },
                  child: const Text('向GetxViewControllersTest视图中添加数据'))
            ],
          ),
        )
      ],
    );
  }
}

// GetXView 2.1 继承 GetView<控制器> 类来进行构建widget视图
// GetView<控制器>继承之后不需要手动Get.find查找实例 直接使用即可
class GetxViewControllersTest extends GetView<NumberControllers> {
  const GetxViewControllersTest({super.key});

  @override
  Widget build(BuildContext context) {
    // 获取当前路由信息对象
    var currentRoute = Get.routing.route;
    print(currentRoute!.settings.name);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Title'),
      ),
      body: ListView(
        // 直接通过controller变量可以访问NumberControllers控制器
        children: controller.nList.map((item) {
          return ListTile(
            title: Text(item),
          );
        }).toList(),
      ),
    );
  }
}

// 配置路由中间件 需继承GetMiddleware类
class GetxTestMiddleware extends GetMiddleware {
  // redirect方法当中间件触发时会判断是否需要重定向
  @override
  RouteSettings? redirect(String? route) {
    print(route);

    return null; // 不做任何操作
    return const RouteSettings(name: "/test"); // 跳转指定路由
  }
}
