import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class Tab12 extends StatefulWidget {
  const Tab12({super.key});

  @override
  State<Tab12> createState() => _Tab12State();
}

class _Tab12State extends State<Tab12> {
  // 使用BasicMessageChannel来和Android端进行通信
  static const _channel = BasicMessageChannel('messageChannel', StringCodec());
  
  @override
  void initState() {
    super.initState();

    // 注册用来接收Android客户端下发的数据事件
    _channel.setMessageHandler((message) async {
      print('Dart接收消息：$message');
      return '数据来自Dart';
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        ElevatedButton(
            onPressed: () {
              _sendMessage();
            },
            child: const Text('send'))
      ],
    );
  }

  // 发送数据到Android
  Future<void> _sendMessage() async {
    String? message = await _channel.send('asfsfds');
  }
}
