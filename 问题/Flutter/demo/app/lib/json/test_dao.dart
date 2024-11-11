import 'package:json_annotation/json_annotation.dart'; 
  
part 'test_dao.g.dart';


@JsonSerializable()
  class TestDao extends Object {

  @JsonKey(name: 'code')
  int code;

  @JsonKey(name: 'method')
  String method;

  @JsonKey(name: 'requestPrams')
  String requestPrams;

  TestDao(this.code,this.method,this.requestPrams,);

  factory TestDao.fromJson(Map<String, dynamic> srcJson) => _$TestDaoFromJson(srcJson);

  Map<String, dynamic> toJson() => _$TestDaoToJson(this);

}

  
