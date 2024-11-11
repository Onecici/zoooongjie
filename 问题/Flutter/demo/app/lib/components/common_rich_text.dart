import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

// 实现文字多行时显示成单行效果并显示展开收起按钮
class CommonRichText extends StatefulWidget {
  final String text;
  final int maxLines;
  final int minLines;
  final TextStyle? textStyle;
  final String shrinkText;
  final String expandText;
  final Function? onShrink;
  final Function? onExpand;

  const CommonRichText(
      {super.key,
      this.text = '',
      this.maxLines = 2,
      this.minLines = 1,
      this.textStyle,
      this.shrinkText = '展开',
      this.expandText = '收起',
      this.onShrink,
      this.onExpand});

  @override
  State<CommonRichText> createState() => _RichTextState();
}

class _RichTextState extends State<CommonRichText> {
  bool _isExpand = true;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didUpdateWidget(covariant CommonRichText oldWidget) {
    super.didUpdateWidget(oldWidget);
  }

  @override
  Widget build(BuildContext context) {
    // ----------------------------------------------------------------
    return LayoutBuilder(builder: (context, constraints) {
      // TextPainter专门用来定制化和复杂的文本
      TextPainter textPainter = TextPainter(
          // 设置最大行数
          maxLines: widget.maxLines,
          // Localizations.localeOf(context)以用户本机中显示的文本和信息符合用户所在地区的习惯和语言要求
          textAlign: TextAlign.start,
          locale: Localizations.localeOf(context),
          text: TextSpan(
            text: widget.text,
            style: widget.textStyle,
          ),
          // Directionality.of(context))表示根据应用程序来决定文本的方向
          textDirection: Directionality.of(context))
        // 调用layout获取文字在当前盒子布局信息
        ..layout(
            minWidth: constraints.minWidth, maxWidth: constraints.maxWidth);

      // 判断是否已经超过最大行数
      if (textPainter.didExceedMaxLines) {
        // textPainter.width 表示在绘制文本时为文本分配的宽度。在设置文字时，我们可以设置TextPainter的宽度，用于限制文本的最大宽度或者用于单行文本的宽度。
        // textPainter.size 表示绘制完后在textPainter盒子中的文本总大小信息
        final textSize = textPainter.size;

        // getPositionForOffset可以获取返回离坐标最近的字符串的索引
        // 当前Offset(0, 40) 相当于textSize.height获取到第二行的第一个文字的索引
        final position = textPainter.getPositionForOffset(Offset(
          textSize.width - textPainter.width,
          textSize.height,
        ));
        // ----------------------------当前这一整块最终是为了获取position.offset索引来进行截取字符串------------------------------------

        return RichText(
            text: TextSpan(
                // 截取 0 - position.offset-4 的字符串，然后在后面拼接展开/收起
                text: !_isExpand
                    ? widget.text
                    : widget.text.substring(0, position.offset - 4),
                style: widget.textStyle ?? const TextStyle(color: Colors.black),
                children: [
              TextSpan(
                  text: _isExpand ? widget.shrinkText : widget.expandText,
                  style: const TextStyle(color: Colors.lightBlueAccent),
                  recognizer: TapGestureRecognizer()
                    ..onTap = () {
                      setState(() {
                        // 点击实现展开/收起的切换
                        _isExpand = !_isExpand;
                      });
                    })
            ]));
      } else {
        return RichText(
            text: TextSpan(
          text: widget.text,
          style: widget.textStyle ?? const TextStyle(color: Colors.black),
        ));
      }
    });
  }
}
