import 'dart:async';

class Utils {
  
  void debounce(Timer? timer, Function function, int time) {
    timer?.cancel();
    timer = Timer(
      Duration(milliseconds: time),
      () => function(),
    );
  }
}
