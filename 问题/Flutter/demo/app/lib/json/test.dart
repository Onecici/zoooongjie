import 'package:json_annotation/json_annotation.dart'; 
  
part 'test.g.dart';


List<Entity> getEntityList(List<dynamic> list){
    List<Entity> result = [];
    list.forEach((item){
      result.add(Entity.fromJson(item));
    });
    return result;
  }
@JsonSerializable()
  class Entity extends Object {

  @JsonKey(name: 'name')
  String name;

  @JsonKey(name: 'age')
  int age;

  @JsonKey(name: 'car')
  List<Car> car;

  Entity(this.name,this.age,this.car,);

  factory Entity.fromJson(Map<String, dynamic> srcJson) => _$EntityFromJson(srcJson);

  Map<String, dynamic> toJson() => _$EntityToJson(this);

}

  
@JsonSerializable()
  class Car extends Object {

  @JsonKey(name: 'name')
  String name;

  Car(this.name,);

  factory Car.fromJson(Map<String, dynamic> srcJson) => _$CarFromJson(srcJson);

  Map<String, dynamic> toJson() => _$CarToJson(this);

}

  
