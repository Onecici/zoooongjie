import 'app_localizations.dart';

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String appVersion(String version) {
    return 'Version $version';
  }

  @override
  String get title => 'tab Card';
}
