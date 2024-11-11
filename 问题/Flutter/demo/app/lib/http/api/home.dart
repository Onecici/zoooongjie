import 'dart:convert';
import 'dart:async';
import '../request.dart';

class LoginService {
  // Future专门用来定义async的返回值类型 如果不定义Future类型会导致接口调用后没有.then()方法获取响应数据

  /// 获取用户数据中心列表
  static Future<List> getDataCenter() async {
    var response = await DioRequest.getInstance().dio.get('/getDataCenter');
    Map data = jsonDecode(response.toString());
    return data['dataCenterList'];
  }

  /// 获取权限列表
  static Future<int> menuNav() async {
    var response = await DioRequest.getInstance().dio.get('/sys/menu/nav');
    Map data = jsonDecode(response.toString());
    return data['code'];
  }
}
