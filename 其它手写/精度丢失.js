const revertPrice = (arg1, arg2 = 100) => {
	let m = 0
	const s1 = arg1.toString()
	const s2 = arg2.toString()
	try {
		m += s1.split(".")[1] ? s1.split(".")[1].length : 0
	} catch (e) {
		console.log(e)
	}
	try {
		m += s2.split(".")[1] ? s2.split(".")[1].length : 0
	} catch (e) {
		console.log(e)
	}
	// 转换成字符串，转换成整数，再除以幂
	let a = Number(s1.replace(".", "")) 
	 b = Number(s2.replace(".", ""))
	return (
		(Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
		Math.pow(10, m)
	)
}
console.log(revertPrice(1.1))