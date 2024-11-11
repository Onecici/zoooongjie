import 'package:get/get.dart';

// state控制器
class NumberControllers extends GetxController {
  RxInt number = 0.obs;
  RxList nList = [].obs;
  var customNList = [];

  @override
  void onInit() {
    super.onInit();

    // 监听多个变量
    everAll([number], (callback) {
      print('everAll------$number');
    });

    print('初始化');
  }

  @override
  void onReady() {
    super.onReady();

    print('加载完成');
  }

  @override
  void onClose() {
    super.onClose();

    print('控制器释放');
  }

  void addNumber() {
    number.value++;

    update(["number_controllers"]); // // GetXView 1.5 局部更新数据指定GetBuilder组件(局部更新有助于性能优化)
  }

  void addNList(String data) {
    nList.add(data);
  }

  void addcustomNList(String data) {
    customNList.add(data);
  }
}
