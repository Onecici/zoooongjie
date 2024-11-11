enum HttpMethod { get, post }

///基础请求
abstract class BaseRequest {
  String baseURL = 'api.devio.org'; // 初始URL
  String? pathParams; // 请求地址后携带path参数  如：/uapi/test/test/15225 中的15225
  var useHttps = true; // 是否支持https
  Map<String, String> params = {}; 
  Map<String, dynamic> header = {
    "token": "MjAyMC0wNi0yMyAwMzoyNTowMQ==fa",
  };
  HttpMethod httpMethod();
  String path();

  String url() {
    Uri uri;
    var pathStr = path();
    //拼接path参数
    if (pathParams != null) {
      if (path().endsWith("/")) {
        pathStr = "${path()}$pathParams";
      } else {
        pathStr = "${path()}/$pathParams";
      }
    }
    //http和https切换
    if (useHttps) {
      uri = Uri.https(baseURL, pathStr, params);
    } else {
      uri = Uri.http(baseURL, pathStr, params);
    }
    print('url:${uri.toString()}');
    return uri.toString();
  }

  ///添加参数
  BaseRequest add(String key, Object value) {
    params[key] = value.toString();
    return this;
  }

  ///添加请求header
  BaseRequest addHeader(String key, Object value) {
    header[key] = value.toString();
    return this;
  }
}
