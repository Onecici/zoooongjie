import 'package:app/http/hiNet/core/adapter/dio_adapter.dart';
import 'package:app/http/hiNet/core/adapter/base/hi_net_adapter.dart';
import 'package:app/http/hiNet/core/hi_error.dart';
import 'package:app/http/hiNet/request/base/base_request.dart';

typedef HiErrorInterceptor = Function(HiNetError error);

///1.支持网络库插拔设计，且不干扰业务层
///2.基于配置请求请求，简洁易用
///3.适配器模式(Adapter)设计，扩展性强
///4.统一异常和返回处理
class HiNet {
  HiNet._();

  HiErrorInterceptor? _hiErrorInterceptor;

  static HiNet? _instance;

  static HiNet getInstance() {
    _instance ??= HiNet._();
    return _instance as HiNet;
  }

  Future fire(BaseRequest request) async {
    HiNetResponse response;
    response = await send(request);
    var res = response.data;
    printLog(res);

    // 错误处理
    var status = response.statusCode;
    HiNetError hiError;
    switch (status) {
      case 200:
        return res;
      case 401:
        hiError = NeedLogin();
        break;
      case 403:
        hiError = NeedAuth(res.toString(), data: res);
        break;
      default:
        hiError = HiNetError(status, res.toString(), data: res);
        break;
    }
    //执行状态码错误拦截器
    if (_hiErrorInterceptor != null) {
      _hiErrorInterceptor!(hiError);
    }

    throw hiError;
  }

  Future<HiNetResponse<T>> send<T>(BaseRequest request) async {
    ///使用Dio适配器发送请求
    HiNetAdapter adapter = DioAdapter();
    return adapter.send(request);
  }

  /// 设置状态码错误拦截器
  void setErrorInterceptor(HiErrorInterceptor interceptor) {
    _hiErrorInterceptor = interceptor;
  }

  void printLog(log) {
    print('hi_net:' + log.toString());
  }
}
