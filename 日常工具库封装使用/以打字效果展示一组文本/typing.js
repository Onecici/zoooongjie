class TypingJS {
    // 要操作的文本节点
    elTypingText = document.querySelector('.typing-text');
    // 获取需要操作的文本数组
    typingTextArr = this.elTypingText.innerText.split(',').map(x => x.trim());
    // 添加样式
    cssRules = `
        @keyframes ani-word-waiting {
            from {
                border-bottom: 3px solid;
            } 
            to {
                border-bottom: none;
            }
        }
        .typing-text {
            margin: 0 0.2em;
            font-size: 1.5em;
        }
        .word-typing {
            display: inline-block;
            width: .5em;
            font-size: 1.5em;
            border-bottom: 3px solid;
            vertical-align: text-bottom;
        }
        .word-waiting {
            display: inline-block;
            width: .5em;
            font-size: 1.5em;
            vertical-align: text-bottom;
            animation: ani-word-waiting 1s linear infinite;
        }
    `;
    elTypingStyle = document.createElement('style');

    constructor(options) {
        console.clear();

        this.elTypingText.innerHTML = '';
        this.elTypingStyle.innerText = this.cssRules;
        document.head.appendChild(this.elTypingStyle);
        // 传递给 typeDeleteTextArr() 的默认参数
        var _options = {
            el:              this.elTypingText,
            textArr:         this.typingTextArr,
            typeInterval:    200,
            delInterval:     200,
            typeDelInterval: 1500,
            textInterval:    0,
            cycleTimes:      -1,
            isRandom:        true
        }
        // 存在自定义参数则替换
        if (options) {
            if (options.elClass) 
                options.el = document.querySelector('.' + options.elClass);

            for (let key in _options) {
                if (options[key]) _options[key] = options[key];
            }
        }

        this.typeDeleteTextArr(_options);
    }

    // 获取要操作的元素
    getTypingElement(elClass) {
        return document.querySelector('.' + elClass);
    }

    async typeDeleteTextArr(options) {
        // 判断循环次数
        var isInfiniteLoop = options.cycleTimes > 0 ? false : true;

        while (isInfiniteLoop || options.cycleTimes) {
            // 判断文本数组是否乱序
            if (options.isRandom)
                options.textArr.sort(() => Math.random() - 0.5);

            for (let i = options.textArr.length; i > 0; i--) {
                var _options = {
                    el: options.el,
                    text: options.textArr[i - 1],
                    typeInterval: options.typeInterval,
                    delInterval: options.delInterval,
                    typeDelInterval: options.typeDelInterval
                }
                // 打印和删除单条文本
                await this.typeDeleteText(_options);
                // 每组单词的时间间隔
                await new Promise(res => setTimeout(res, options.textInterval));
            }

            options.cycleTimes--;
        }
    }

    async typeDeleteText(options) {
        // 打印单词
        await this.typingText(options.el, options.text, options.typeInterval);

        // 如需删除单词请将下方注释去掉
        // 打印与删除操作的时间间隔
        // await new Promise(res => setTimeout(res, options.typeDelInterval));
        // // 删除单词
        // await this.deletingText(options.el, options.delInterval);
    }

    // 按指定时间间隔打印单词
    async typingText(el, text, typeInterval) {
        var words = text.split('');
        var len = words.length;
        // 清空元素
        el.innerHTML = '';
        // 创建光标
        var cursor = document.createElement('span');
        el.appendChild(cursor);

        for (let i = 0; i < len; i++) {
            var elWord = document.createTextNode(words[i]);
            el.insertBefore(elWord, cursor);
            cursor.className = 'word-typing';

            // 延时后进入下次循环
            await new Promise(res => setTimeout(res, typeInterval));
        }
        // 光标闪烁
        cursor.className = 'word-waiting';
    }

    // 按指定时间间隔删除单词
    async deletingText(el, delInterval) {
        // 创建光标
        var cursor = document.createElement('span');
        var len = el.innerText.length;
        
        // for (let i = len; i > 0; i--) {
        for (let i = 0; i < len; i++) {
            // 删除中停止闪烁光标
            cursor.className = 'word-typing';
            // 删除最后一个字符以及光标
            el.innerText = el.innerText.slice(0, -1);
            el.appendChild(cursor);

            // 延时指定时间后进入下次循环
            await new Promise(res => setTimeout(res, delInterval));
        }
        // 光标闪烁
        cursor.className = 'word-waiting';
    }
}

// new TypingJS(options);
// 
// options         | Type      | Description
//===========================================================================
// elClass         | 'string'  | 执行操作的元素节点的 class 属性值
// textArr         | 'array'   | 一组要打印和删除的文本，默认从 HTML 中获取
// typeInterval    | 'number'  | 打印单个字符时间间隔
// delInterval     | 'number'  | 删除单个字符时间间隔
// typeDelInterval | 'number'  | 打印与删除之间的时间间隔
// textInterval    | 'number'  | 操作每条文本的时间间隔
// cycleTimes      | 'number'  | 循环操作文本组的次数( > 0 )，<= 0 表示无限循环
// isRandom        | 'boolean' | 是否乱序操作文本组