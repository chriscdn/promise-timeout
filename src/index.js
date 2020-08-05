module.exports = (promise, timeout, errMsg = 'The operation timed out.') => {

	let timeoutID

	const timeOutPromise = new Promise((resolve, reject) => {
		timeoutID = setTimeout(() => reject(errMsg), timeout)
	})

	return Promise.race([promise, timeOutPromise])
		.finally(() => clearTimeout(timeoutID))

}