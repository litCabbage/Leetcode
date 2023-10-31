var obj = {
	a: 2,
	b: {
		c: 3,
		d: [333]
	}
}

function get(source, path, defaultValue = undefined) {
	const paths = path.replace(/\[(\w+)\]/g, '.$1').replace(/\["(\w+)"\]/g, '.$1').replace(/\['(\w+)'\]/g, '.$1').split('.')
	let val = source
	while (paths.length) {
		val = val?.[paths.shift()]
	}
	return val ?? defaultValue
}

console.log(get(obj, 'b["d"]'))