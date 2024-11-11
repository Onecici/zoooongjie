import 'package:app/http/error.dart';
import 'package:dio/dio.dart';
import 'package:pretty_dio_logger/pretty_dio_logger.dart';

/// dio网络请求配置表 自定义
class DioConfig {
  static const baseURL = 'http://117.34.71.31:8081/paas-admin'; //域名
  static const timeout = Duration(milliseconds: 10000); //超时时间
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
        headers: {
          'token': '122asa'
        });

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
    }, onError: (DioException e, handler) {
      print("\n================== 错误响应数据 ======================");
      print(ApiException.from(e).message);
      print("type = ${e.type}");
      print("message = ${e.message}");
      print("\n");
      return handler.next(e);
    }));

    // 添加PrettyDioLogger打印响应数据日志拦截器
    dio.interceptors.add(PrettyDioLogger(
        requestHeader: true,
        requestBody: true,
        responseHeader: true,
        responseBody: true));

    // 添加自定义拦截器
    dio.interceptors.add(CustomResponse());
  }
  static getInstance() {
    // ??=空判断赋值运算符  当_instance为空时就赋值DioRequest()
    return _instance ??= DioRequest();
  }
}

// 自定义拦截器需要继承Interceptor类进行实现
class CustomResponse extends Interceptor {
  // 重写子类中请求拦截
  @override
  void onRequest(
    RequestOptions options,
    RequestInterceptorHandler handler,
  ) {

    print('---------Reqsss------${options.headers}');
    // handler.next放行
    handler.next(options);
  }

  // 重写子类中响应拦截
  @override
  void onResponse(
    Response response,
    ResponseInterceptorHandler handler,
  ) {
    print('---------Res------${response.headers}');
    print('---------当前接口路径------${response.requestOptions.path}');

    handler.next(response);
  }
}
