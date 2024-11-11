// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'test_dao.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

TestDao _$TestDaoFromJson(Map<String, dynamic> json) => TestDao(
      (json['code'] as num).toInt(),
      json['method'] as String,
      json['requestPrams'] as String,
    );

Map<String, dynamic> _$TestDaoToJson(TestDao instance) => <String, dynamic>{
      'code': instance.code,
      'method': instance.method,
      'requestPrams': instance.requestPrams,
    };
