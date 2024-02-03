// onmessage监听消息
onmessage = function (e) {
    let sum = e.data;
    for (let i = 0; i < 200000; i++) {
        for (let i = 0; i < 10000; i++) {
            sum += Math.random()
        }
    }
    // 将计算的结果消息传递出去
    postMessage(sum);
}
