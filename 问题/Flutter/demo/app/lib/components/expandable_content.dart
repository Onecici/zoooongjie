import 'package:flutter/material.dart';

///可展开的widget
class ExpandableContent extends StatefulWidget {
  const ExpandableContent({super.key});

  @override
  State<ExpandableContent> createState() => _ExpandableContentState();
}

class _ExpandableContentState extends State<ExpandableContent> {
  bool _expand = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(left: 15, right: 15, top: 5),
      child: Column(
        children: [
          _buildTitle(),
          const Padding(
            padding: EdgeInsets.only(bottom: 8),
          ),
          _buildDes(),
        ],
      ),
    );
  }

  _buildTitle() {
    return InkWell(
      onTap: _toggleExpand,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          //通过Expanded让Text获得最大宽度，以便显示省略号
          const Expanded(
              child: Text(
            '洒进房间啊叫啊',
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          )),
          const Padding(padding: EdgeInsets.only(left: 15)),
          Icon(
            _expand
                ? Icons.keyboard_arrow_up_sharp
                : Icons.keyboard_arrow_down_sharp,
            color: Colors.grey,
            size: 16,
          )
        ],
      ),
    );
  }

  void _toggleExpand() {
    setState(() {
      _expand = !_expand;
    });
  }

  _buildDes() {
    var child = const Text('jkajjvdjsvsks',
        style: TextStyle(fontSize: 16, color: Colors.black));
    return AnimatedContainer(
      duration: const Duration(milliseconds: 150),
      width: double.infinity,
      height: _expand ? 36 : 0,
      color: Colors.lightBlue,
      child: child,
    );
  }
}
