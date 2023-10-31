function shuffle(list) {
	return list.sort(() => Math.random() - 0.5)
}

function shuffle(list) {
	const len = list.length
	let r = [...list]
	for (let i = len - 1; i > 0; i--) {
		const swapIndex = Math.floor(Math.random() * (i + 1));
		console.log([i, swapIndex]);
		// 记得要加分号，不然会报错
		[r[i], r[swapIndex]] = [r[swapIndex], r[i]];
	}
	return r
}
console.log(shuffle([1,3,4,5,6]))