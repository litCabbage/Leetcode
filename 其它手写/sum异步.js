
function add(a, b) {
  return Promise.resolve(a + b);
}
// await
async function sum(arr) {
	let num = 0
	for (let i = 0; i < arr.length; i++) {
		num = await add(num, arr[i])
	}
	return num
}
// 借助chunk两两并行
async function sum(arr) {
	if (arr.length === 1) return arr[0]
	const promises = chunk(arr, 2).map(([x, y]) => y === undefined ? x : add(x, y))
	return Promise.all(promises).then(list => sum(list))
}


function chunk(arr, size = 2) {
	let r = []
	for (let i = 0; i < arr.length; i++) {
		let index = Math.floor(i / size)
		r[index] ??= []
		r[index].push(arr[i])
	}
	return r
}
let arr = [1,2,3,4,5]
sum(arr).then(res => console.log(res))