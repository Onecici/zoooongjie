import 'dart:convert';

import 'package:app/http/hiNet/request/base/base_request.dart';

///网络请求抽象约定接口类
abstract class HiNetAdapter {
  Future<HiNetResponse<T>> send<T>(BaseRequest request);
}

/// 统一响应数据返回格式
class HiNetResponse<T> {
  T data;
  BaseRequest request;
  int? statusCode;
  String? statusMessage;
  dynamic extra;

  HiNetResponse({
    required this.data,
    required this.request,
    this.statusCode,
    this.statusMessage,
    required this.extra,
  });

  @override
  String toString() {
    if (data is Map) {
      return json.encode(data);
    }
    return data.toString();
  }
}
