import 'package:app/Tabs/Getx/controllers/number.dart';
import 'package:get/get.dart';

// 创建用于注册全局state控制器的类
class AllControllersBinding implements Bindings {
  @override
  void dependencies() {

    // lazyPut只有在使用到该控制器时才会实例化
    Get.lazyPut(() => NumberControllers());
  }
}
