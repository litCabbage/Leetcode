
function jsonP({ url, params, onData}) {
	const script = document.createElement('script')
	const callName = `JSONP_CALL_${Math.random().toString(36).slice(2)}`
	const seacrhParams = {
		...params,
		callback: callName
	}
	const seacrhStr = Object.keys(seacrhParams).map(k => `${k}=${seacrhParams[k]}`).join('&')
	script.src=`${url}?${seacrhStr}`
	window[callName] = onData
	document.body.appendChild(script)
}

jsonP({
	url: 'https://api.com',
	onData(data) {
		console.log(data)
	},
	params: {
		name: 'li'
	}
})