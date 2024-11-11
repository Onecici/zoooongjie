import 'package:app/http/hiNet/core/adapter/base/hi_net_adapter.dart';
import 'package:app/http/hiNet/request/base/base_request.dart';
import 'package:dio/dio.dart';

class DioAdapter extends HiNetAdapter {
  @override
  Future<HiNetResponse<T>> send<T>(BaseRequest request) async {
    Response? response;
    var options = Options(headers: request.header);
    try {
      if (request.httpMethod() == HttpMethod.get) {
        response = await Dio().get(request.url(), options: options);
      } else if (request.httpMethod() == HttpMethod.post) {
        response = await Dio()
            .post(request.url(), data: request.params, options: options);
      }
    } on DioException catch (e) {
      response = e.response;
    }

    return buildRes<T>(response, request);
  }

  ///构建HiNetResponse
  HiNetResponse<T> buildRes<T>(Response? response, BaseRequest request) {
    return HiNetResponse(
        data: response?.data,
        request: request,
        statusCode: response?.statusCode,
        statusMessage: response?.statusMessage,
        extra: response);
  }
}
