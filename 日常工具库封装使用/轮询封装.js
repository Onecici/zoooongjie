/**
 * 轮询类封装
 * @param config 配置对象
 * @constructor
 */
function Thread(config) {
    this.params = this.init(config);
}

/**
 * 初始化对象参数
 * @param config 配置对象
 */
Thread.prototype.init = function (config) {
    const params = config ? config : {
        start: function () { },
        stop: function () { },
        number: 0,
        time: 300
    };
    params.start = params.start ? params.start : function () { };
    params.stop = params.stop ? params.stop : function () { };
    params.number = params.number ? Math.abs(parseInt(params.number)) : 0;
    params.time = params.time ? Math.abs(parseInt(params.time)) : 300;
    this.time = params.time
    return params;
}

/**
 * 轮询实现
 * @param start
 * @param stop
 * @param number
 * @param time
 */
Thread.prototype.run = function () {
    this.timer = setTimeout(this.runTime.bind(this), this.time)
}

/**
 * 执行过程函数
 */
Thread.prototype.runTime = function () {
    try {
        this.params.start()
    } finally {
        if (!this.params.number == 0) {
            if (this.total >= this.params.number) {
                this.params.stop()
                clearTimeout(this.timer)
            }
            if (!this.total) {
                this.total = 1
            }
            this.total++
        }
        clearTimeout(this.timer)
    }
    this.timer = setTimeout(this.runTime.bind(this), this.time)
}

/**
 * 停止轮询
 */
Thread.prototype.stop = function () {
    clearTimeout(this.timer)
    this.params.stop()
}

export default Thread

// 使用方式
const thread = new Thread({
    start: function () {
        console.log("轮询中...")
    },
    stop: function () {
        console.log("轮询结束，结束方式：手动结束")
    },
    number: 0, //这里是轮询次数配置，不配置默认无线轮询
    time: 1000 //这里是轮询的时间 不配置默认 300ms
})

// 开始轮询
thread.run();

// 主动结束轮询
// thread.stop()
setTimeout(() => {
    thread.stop()
}, 6000)