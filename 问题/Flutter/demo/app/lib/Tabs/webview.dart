import 'dart:convert';

import 'package:app/gen/assets.gen.dart';
import 'package:app/json/test.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

import 'package:flutter/gestures.dart';
import 'package:webview_flutter/webview_flutter.dart';

class Webview extends StatefulWidget {
  const Webview({super.key});

  @override
  State<Webview> createState() => _WebviewState();
}

class _WebviewState extends State<Webview> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) {
                return const WebviewRoute();
              }));
            },
            child: const Text('webView Jump')),
        ElevatedButton(
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) {
                return const WebViewRoute2(
                  url: 'http://inappwebview.dev/',
                );
              }));
            },
            child: const Text('webView 2 Jump')),
        ElevatedButton(
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) {
                return const WebviewConnectH5a();
              }));
            },
            child: const Text('WebviewConnectH5a Jump')),
        ElevatedButton(
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) {
                return const WebviewConnectH5b();
              }));
            },
            child: const Text('WebviewConnectH5b Jump')),
        ElevatedButton(
            onPressed: () {
              // 1.模拟JSON数据
              String jsonData =
                  '{"name": "John","age": 111,"car": [{"name": "KSKA"}]}';
              // 2.将json转成对象
              var jsonObj = jsonDecode(jsonData);
              // 3.将json进行序列化
              Entity data = Entity.fromJson(jsonObj);
              // 4.使用
              print(data.age);
            },
            child: const Text('JSON序列化测试')),
        Expanded(
            child: GestureDetector(
          // 用于检测垂直方向的拖动手势
          onVerticalDragUpdate: (details) {
            print(details);
          },
          child: ListView(
            children: List.generate(30, (index) {
              return ListTile(
                title: Text('data $index'),
              );
            }),
          ),
        )),
        const Expanded(child: CloseOnSwipeDownWidget2())
      ],
    );
  }
}

class WebviewRoute extends StatefulWidget {
  const WebviewRoute({super.key});

  @override
  State<WebviewRoute> createState() => _WebviewRouteState();
}

class _WebviewRouteState extends State<WebviewRoute> {
  final GlobalKey webViewKey = GlobalKey();
  int bfb = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('webView测试'),
      ),
      body: Column(
        children: [
          Text('百分比: $bfb%'),
          Expanded(
              child: InAppWebView(
            key: webViewKey,
            initialUrlRequest:
                // 加载非https协议的需要配置否则无法加载https://blog.csdn.net/weixin_44239910/article/details/119813318
                URLRequest(url: Uri.parse('http://inappwebview.dev/')),
            initialOptions: InAppWebViewGroupOptions(
              // 针对所有平台的通用配置
              crossPlatform: InAppWebViewOptions(
                javaScriptEnabled: true, // JavaScript是否启用
                mediaPlaybackRequiresUserGesture: false, // 媒体播放是否需要用户手势
                supportZoom: false, // 是否支持缩放
              ),
            ),
            onProgressChanged:
                (InAppWebViewController controller, int progress) {
              setState(() {
                bfb = progress;
              });
            },
          )),
        ],
      ),
    );
  }
}

class WebViewRoute2 extends StatefulWidget {
  final String url;

  const WebViewRoute2({super.key, required this.url});

  @override
  State<WebViewRoute2> createState() => _WebViewRoute2State();
}

class _WebViewRoute2State extends State<WebViewRoute2> {
  late WebViewController _webViewController;

  @override
  void initState() {
    super.initState();

    _initWebViewController();
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
        // webview 1.1 canPop
        // webview 1.2 当为false时无法被 Navigator 方法返回上一级 此时执行返回操作（物理返回键）时会触发onPopInvoked一次 如果在onPopInvoked函数内触发一次Navigator方法就会又触发onPopInvoked一次
        // webview 1.3 当为true时Navigator照常接收返回事件
        canPop: false,
        onPopInvoked: (didPop) async {
          // webview 1.4 didPop返回的布尔值根据canPop来决定，当触发Navigator方法时didPop一定为true

          // webview 1.5 这里是因为canPop为false时执行物理返回键操作后didPop为false此时该函数体会执行一次 后面又因为手动触发Navigator方法导致该函数体又执行一次此时didPop为true，这样一共执行了2次，但我只需要执行一次所以判断最后一次为true不执行函数体
          if (didPop) return;

          // 判断是否当前webview是否可以返回上一页
          if (await _webViewController.canGoBack()) {
            _webViewController.goBack(); // 返回上一页
          } else {
            if (context.mounted) pop(context);
          }
        },
        child: Scaffold(
          appBar: AppBar(
            title: const Text('WebViewWidget组件测试'),
          ),
          body: WebViewWidget(controller: _webViewController),
        ));
  }

  _initWebViewController() {
    _webViewController = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted) // 设置不限制js执行（默认是禁用js执行的）
      ..setBackgroundColor(Colors.black)
      // setNavigationDelegate对当前webview导航进行配置
      ..setNavigationDelegate(NavigationDelegate(
        onProgress: (progress) {
          debugPrint('-----progress-----$progress');
        },
        // onNavigationRequest相当于是一种路由前置拦截器 初始化加载的第一次不会执行
        onNavigationRequest: (request) {
          if (request.url.startsWith(widget.url)) {
            return NavigationDecision
                .navigate; // NavigationDecision.navigate允许跳转
          }

          Navigator.pop(context);
          return NavigationDecision.prevent; // NavigationDecision.prevent阻止跳转
        },
      ))
      ..loadRequest(Uri.parse(widget.url)); // 加载目标地址
  }

  // 返回上一页
  static pop(BuildContext context) {
    // 判断当前Navigator中是否还有上一级页面
    if (Navigator.canPop(context)) {
      Navigator.pop(context);
    }
  }
}

// Webview与H5通信方式
// 1.webview通过URL传参数给flutter
class WebviewConnectH5a extends StatefulWidget {
  const WebviewConnectH5a({super.key});

  @override
  State<WebviewConnectH5a> createState() => _WebviewConnectH5aState();
}

class _WebviewConnectH5aState extends State<WebviewConnectH5a> {
  late WebViewController _controller;

  @override
  void initState() {
    super.initState();

    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(NavigationDelegate(
        onNavigationRequest: (request) {
          // 当webview页面通过js中的document.location跳转时会触发(只要是链接跳转都会触发)onNavigationRequest函数体
          // hi://webview 是H5和flutter一起约定的固定跳转方式(通信方式)
          if (request.url.startsWith('hi://webview')) {
            Uri url = Uri.parse(request.url);
            String id = url.queryParameters['id'] ?? '';
            ScaffoldMessenger.of(context)
                .showSnackBar(SnackBar(content: Text('ID: $id')));

            return NavigationDecision.prevent;
          }

          return NavigationDecision.navigate;
        },
      ))
      ..loadFlutterAsset(Assets.webviewH5);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('WebviewConnectH5a'),
        actions: [
          // 1.1 flutter发送数据到webview
          FilledButton(
              onPressed: () {
                // runJavaScript执行js
                _controller.runJavaScript("getDartParams(111)");
              },
              child: const Text('发送数据到webview'))
        ],
      ),
      body: WebViewWidget(controller: _controller),
    );
  }
}

// 2.使用JavaScriptChanne接收webview参数
class WebviewConnectH5b extends StatefulWidget {
  const WebviewConnectH5b({super.key});

  @override
  State<WebviewConnectH5b> createState() => _WebviewConnectH5bState();
}

class _WebviewConnectH5bState extends State<WebviewConnectH5b> {
  late WebViewController _controller;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      // hiData 是H5和flutter一起约定的固定标识
      ..addJavaScriptChannel('hiData',
          onMessageReceived: ((JavaScriptMessage message) {
        Map data = json.decode(message.message);
        print(data['id']);
      }))
      ..loadRequest(
          Uri.parse('http://172.22.22.49:5500/assets/webviewH5.html'));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('WebviewConnectH5b'),
        actions: [
          FilledButton(
              onPressed: () {
                _setCookie();
              },
              child: const Text('设置cookie')),
          FilledButton(
              onPressed: () {
                _clearCookie();
              },
              child: const Text('清除cookie'))
        ],
      ),
      body: WebViewWidget(controller: _controller),
    );
  }

  // 对webview设置cookie
  _setCookie() {
    WebViewCookieManager().setCookie(
        // domain：指定给对应域名设置cookie
        const WebViewCookie(
            name: 'token',
            value: 'ksakksas45545as',
            domain: 'http://172.22.22.49:5500'));
  }

  _clearCookie() {
    WebViewCookieManager().clearCookies();
  }
}

// GestureDetector嵌套ListView时会导致手势事件失效 以下是解决方案
class CloseOnSwipeDownWidget2 extends StatefulWidget {
  const CloseOnSwipeDownWidget2({
    super.key,
  });

  @override
  CloseOnSwipeDownWidget2State createState() => CloseOnSwipeDownWidget2State();
}

class CloseOnSwipeDownWidget2State extends State with TickerProviderStateMixin {
  double yOffset = 0.0;
  double initialPosition = 0.0;
  bool isAnimatingOut = false;
  int animTime = 0;
  bool needDrag = true;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return RawGestureDetector(
      gestures: {
        _MyVerticalDragGestureRecognizer: GestureRecognizerFactoryWithHandlers<
                _MyVerticalDragGestureRecognizer>(
            () => _MyVerticalDragGestureRecognizer(),
            (_MyVerticalDragGestureRecognizer recognizer) {
          recognizer
            ..onStart = (DragStartDetails details) {
              initialPosition = details.globalPosition.dy;
            }
            ..onUpdate = (DragUpdateDetails details) {
              if (!needDrag) {
                return;
              }
              double updatedPosition = details.globalPosition.dy;
              double deltaY = updatedPosition - initialPosition;

              animTime = 0;

              setState(() {
                yOffset = yOffset + deltaY;
                initialPosition = updatedPosition;
              });
            }
            ..onEnd = (DragEndDetails details) {
              animTime = 300;

              if (yOffset > 200) {
                // 触发滑出动画
                _startSlideOutAnimation();
              } else {
                // 触发返回原始位置的动画
                _startReturnToOriginalPositionAnimation();
              }
            };
        }),
      },
      child: Stack(
        children: [
          AnimatedPositioned(
            duration: Duration(milliseconds: animTime),
            curve: Curves.easeInOut,
            top: yOffset,
            left: 0,
            right: 0,
            child: NotificationListener(
              // 监听内部ListView的滑动变化
              onNotification: (ScrollNotification notification) {
                if (notification is OverscrollNotification &&
                    notification.overscroll < 0) {
                  // 用户向下滑动，ListView已经滑动到顶部，处理GestureDetector的滑动事件
                  needDrag = true;
                } else if (notification is ScrollUpdateNotification) {
                  // 用户在ListView中执行滑动动作，关闭外部GestureDetector的滑动处理
                  needDrag = false;
                } else {}

                return false;
              },
              child: Container(
                width: 300,
                height: 300,
                color: Colors.amber,
              ),
            ),
            onEnd: () {
              if (isAnimatingOut) {
                Navigator.of(context).pop();
              }
            },
          ),
        ],
      ),
    );
  }

  // 开始滑出动画
  void _startSlideOutAnimation() {
    setState(() {
      isAnimatingOut = true;
      yOffset = MediaQuery.of(context).size.height;
    });
  }

  // 开始返回原始位置的动画
  void _startReturnToOriginalPositionAnimation() {
    setState(() {
      yOffset = 0.0;
    });
  }
}

class _MyVerticalDragGestureRecognizer extends VerticalDragGestureRecognizer {
  bool needDrag = true;

  @override
  void rejectGesture(int pointer) {
    // 单方面宣布自己胜出
    acceptGesture(pointer);
  }
}
