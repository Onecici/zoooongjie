class Timer {
	constructor(callback, interval) {
		this.callback = callback; // 要执行的回调函数
		this.interval = interval; // 定时器间隔（毫秒）
		this.timerId = null; // 定时器ID

		// 启动定时器
		this.start();
	}

	// 启动定时器
	start() {
		if (!this.timerId) {
			this.timerId = setTimeout(() => {
				this.callback();
			}, this.interval);
		}
	}

	// 停止定时器
	stop() {
		if (this.timerId) {
			clearTimeout(this.timerId);
			this.timerId = null;
		}
	}

	// 重置定时器
	reset() {
		this.stop();
		this.start();
	}
}



export {
	Timer
}