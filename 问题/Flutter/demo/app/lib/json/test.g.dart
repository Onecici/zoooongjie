// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'test.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Entity _$EntityFromJson(Map<String, dynamic> json) => Entity(
      json['name'] as String,
      (json['age'] as num).toInt(),
      (json['car'] as List<dynamic>)
          .map((e) => Car.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$EntityToJson(Entity instance) => <String, dynamic>{
      'name': instance.name,
      'age': instance.age,
      'car': instance.car,
    };

Car _$CarFromJson(Map<String, dynamic> json) => Car(
      json['name'] as String,
    );

Map<String, dynamic> _$CarToJson(Car instance) => <String, dynamic>{
      'name': instance.name,
    };
