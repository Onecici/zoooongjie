import 'package:app/http/hiNet/request/base/base_request.dart';

class TestRequest extends BaseRequest {
  @override
  HttpMethod httpMethod() {
    return HttpMethod.get;
  }

  @override
  String path() {
    return 'uapi/test/test';
  }
}
