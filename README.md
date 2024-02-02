# @chriscdn/promise-timeout

This utility wraps a promise, which will reject if the wrapped promise doesn't resolve or reject within a certain amount of time. Otherwise, it returns the resolve or reject of the original promise.

## Installing

Using npm:

```bash
npm install @chriscdn/promise-timeout
```

Using yarn:

```bash
yarn add @chriscdn/promise-timeout
```

## Example

```js
import promiseTimeout from '@chriscdn/promise-timeout'

const myPromise = ...

promiseTimeout(myPromise, 5000)
	.then(() => {
		console.log('myPromise resolved normally')
	})
	.catch(err => {
		console.log('myPromise rejected, or did not resolve or reject withing 5000ms)
	})
```

You can also pass a custom error message:

```js
promiseTimeout(myPromise, 5000, "Oops, the promise took too long!");
```

## License

[MIT](LICENSE)
