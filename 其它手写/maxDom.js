function maxDom() {
	const doms = document.querySelectorAll('*')
	let maxDom = ['', 0]
	const dict = {}
	for (let i = 0; i < doms.length; i++) {
		let dom = doms[i]
		dict[dom.nodeName] = (dict[dom.nodeName] || 0) + 1
		if (dict[dom.nodeName] > maxDom[1]) {
			maxDom = [dom.nodeName, dict[dom.nodeName]]
		}
	}
	let arr = []
	for (let k in dict) {
		arr.push([k, dict[k]])
	}
	console.log(arr)
	// 前三大
	return arr.sort((a, b) => b[1] - a[1]).slice(0, 3)
	// return maxDom
}