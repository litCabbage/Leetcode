function cloneDeep(data, visited = new WeakMap()) {
	if (typeof data === null || typeof data !== "object") return data
	if (visited.has(data)) {
		return visited.get(data)
	}
	if (Array.isArray(data)) {
		const arr = []
		visited.set(data, arr)
		for (let i = 0; i < data.length; i++) {
			arr[i] = cloneDeep(data[i], visited)
		}
		return arr
	}
	let obj = {}
	visited.set(data, obj)
	for (let k in data) {
		if (data.hasOwnProperty(k)) {
			obj[k] = cloneDeep(data[k], visited)
		}
	}
	return obj
}
let a = {
	b: 2,
	c: {
		c: 3,
		d: [1,23]
	}
}
a.a = a

let b = cloneDeep(a);
b.c.c = 4
console.log(b, a)