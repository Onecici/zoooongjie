import 'package:dio/dio.dart';

/// dio网络请求配置表 自定义
class DioConfig {
  static const baseURL = 'http://117.34.71.31:8081/paas-admin'; //域名
  static const timeout = 10000; //超时时间
}

// 网络请求工具类
class DioRequest {
  late Dio dio;
  static DioRequest? _instance;

  /// 构造函数
  DioRequest() {
    dio = Dio();
    dio.options = BaseOptions(
        baseUrl: DioConfig.baseURL,
        connectTimeout: DioConfig.timeout,
        sendTimeout: DioConfig.timeout,
        receiveTimeout: DioConfig.timeout,
        contentType: 'application/json; charset=utf-8',
        headers: {});

    /// 请求拦截器 and 响应拦截机 and 错误处理
    dio.interceptors.add(InterceptorsWrapper(onRequest: (options, handler) {
      print("\n================== 请求数据 ==========================");
      print("url = ${options.uri.toString()}");
      print("headers = ${options.headers}");
      print("params = ${options.data}");
      return handler.next(options);
    }, onResponse: (response, handler) {
      print("\n================== 响应数据 ==========================");
      print("code = ${response.statusCode}");
      print("data = ${response.data}");
      print("\n");
      handler.next(response);
    }, onError: (DioError e, handler) {
      print("\n================== 错误响应数据 ======================");
      print("type = ${e.type}");
      print("message = ${e.message}");
      print("\n");
      return handler.next(e);
    }));
  }
  static getInstance() {
    // ??=空判断赋值运算符  当_instance为空时就赋值DioRequest()
    return _instance ??= DioRequest();
  }
}
