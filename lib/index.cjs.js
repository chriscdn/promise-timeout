'use strict';

module.exports = (promise, timeout, errMsg = 'The promise timed out.') => {

	let timeoutID;

	const timeOutPromise = new Promise((resolve, reject) => {
		timeoutID = setTimeout(() => reject(errMsg), timeout);
	});

	return Promise.race([promise, timeOutPromise])
		.finally(() => clearTimeout(timeoutID))

};
