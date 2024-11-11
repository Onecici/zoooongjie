import 'package:card_swiper/card_swiper.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class MySwiper extends StatefulWidget {
  const MySwiper({super.key});

  @override
  State<MySwiper> createState() => _MySwiperState();
}

class _MySwiperState extends State<MySwiper> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Swiper'),
      ),
      body: Column(
        children: [
          SizedBox(
            height: 200,
            child: Swiper(
              itemBuilder: (BuildContext context, int index) {
                return Image.network(
                  "https://via.placeholder.com/288x188",
                  fit: BoxFit.fill,
                );
              },
              itemCount: 10,
              viewportFraction: 0.8,
              scale: 0.9,
              pagination: const SwiperPagination(),
              autoplay: true,
            ),
          ),
          FilledButton(
              onPressed: () async {
                final Uri url = Uri.parse(('https://www.csdn.net/'));
                if (!await launchUrl(url,
                    mode: LaunchMode.externalApplication)) {
                  throw Exception('Could not launch');
                }
              },
              child: const Text('打开外部浏览器')),
        ],
      ),
    );
  }
}
