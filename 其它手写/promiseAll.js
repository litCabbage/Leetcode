function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		let count = 0, r = []
		for (let i = 0; i < promises; i++) {
			Promise.resolve(promise[i]).then(res => {
				r.push(res)
				if (++count >= promises.length) {
					resolve(res)
				}
			}).catch(err => {
				reject(err)
			})
		}
	})
}