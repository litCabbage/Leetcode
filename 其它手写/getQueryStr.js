function getQueryStr(url, k) {
	let query = url.split('?')
	query = query[1] ? query[1] : ''
	let queryArr = query.split('&').map(item => item.split('='))
	return new Map(queryArr).get(k)
}

function getQueryStr(url, k) {
	const urlData = new URL(url)
	const searchParams = urlData.searchParams
	return new Map(searchParams).get(k)
}
console.log(getQueryStr('https://baidu.com?a=2&b=3', 'a'))