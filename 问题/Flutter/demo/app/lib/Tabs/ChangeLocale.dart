import 'package:app/language/l10n/gen/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';

class ChangeLocale extends StatefulWidget {
  const ChangeLocale({super.key});

  @override
  State<ChangeLocale> createState() => _ChangeLocaleState();
}

class _ChangeLocaleState extends State<ChangeLocale> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          ElevatedButton(onPressed: () {
            changeLocaleFn('zh');
            print(AppLocalizations.of(context)!.appVersion('2.3.0'));
          }, child: const Text('中文')),
          ElevatedButton(onPressed: () {
            changeLocaleFn('en');
          }, child: const Text('English'))
        ],
      ),
    );
  }

  changeLocaleFn(String local) {
    Get.updateLocale(Locale(local));
  }
}
