import 'package:app/http/hiNet/core/hi_net.dart';
import 'package:app/http/hiNet/request/test_request.dart';
import 'package:app/json/test_dao.dart';

class TestcDao {
  static get() async {
    // 1. 整理请求信息对象
    TestRequest request = TestRequest();
    request.add('requestPrams', 11);

    // 2. 将整理好的请求信息对象传给请求器进行处理发送请求
    var res = await HiNet.getInstance().fire(request);

    // 3. json序列化
    return TestDao.fromJson(res['data']);
  }
}
