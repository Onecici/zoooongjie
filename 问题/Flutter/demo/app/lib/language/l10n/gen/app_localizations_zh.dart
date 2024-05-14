import 'app_localizations.dart';

/// The translations for Chinese (`zh`).
class AppLocalizationsZh extends AppLocalizations {
  AppLocalizationsZh([String locale = 'zh']) : super(locale);

  @override
  String appVersion(String version) {
    return '版本号: $version';
  }

  @override
  String get title => '选项卡';
}
