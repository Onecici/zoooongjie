import 'package:json_annotation/json_annotation.dart';

part 'dev.g.dart';

// 将json转成对象并使用const(asConst为true 表示使用const保存)将对象进行保存
@JsonLiteral('env_json_dev.json', asConst: true)
Map<String, dynamic> get config => _$configJsonLiteral;
