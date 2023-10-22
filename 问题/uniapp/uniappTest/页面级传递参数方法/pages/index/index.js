const dom = weex.requireModule('dom')
// 查找最近的chatItem元素
async function recentlyItem(chatItem) {
	let max = null;
	let chatItemIndex = null;
	let arr = []

	for (let i = 0; i < chatItem.length; i++) {
		const item = chatItem[i];
		const top = await getTopValueAsync(item);
		arr.push(top);
	}

	max = Math.max(...arr)
	chatItemIndex = arr.findIndex(item => item === max)
	return {
		scrollChatItem: chatItem[chatItemIndex],
		chatItemIndex
	}
}

function getTopValueAsync(item) {
	return new Promise((resolve) => {
		dom.getComponentRect(item, ({
			size: {
				top
			}
		}) => {
			resolve(top);
		});
	});
}

export {
	recentlyItem
}