# @chriscdn/promise-timeout

This utility wraps a promise or asynchronous function, which will reject if the wrapped promise doesn't resolve or reject within a certain amount of time. Otherwise, it returns the resolve or reject of the original promise.

Keep in mind that a timed out promise remains pending and should still resolve or reject in the future. This package only provides a way to retain control if an asynchronous operation takes longer than expected.

## Installing

Using npm:

```bash
npm install @chriscdn/promise-timeout
```

Using yarn:

```bash
yarn add @chriscdn/promise-timeout
```

## Breaking Changes to v2

The import and interface changed slightly. See below.

## Usage

The package provides a `promiseTimeout` and an `asyncTimeout` function. The `promiseTimeout` function is designed for use with a `Promise`, whereas the `asyncTimeout` function is intended for an `async` function (which _returns_ a `Promise`).

## Example - Promises

```js
import { promiseTimeout } from "@chriscdn/promise-timeout";

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// A promise that resolves after 2 seconds.
const myPromise = new Promise((resolve) => pause(2000).then(resolve));

// This will go into the catch block since the timeout is less than 2 seconds
promiseTimeout(myPromise, { timeout: 1000 })
  .then(() => {
    console.log("myPromise resolved normally");
  })
  .catch((err) => {
    console.log(
      "myPromise rejected, or did not resolve or reject withing 5000ms",
    );
  });
```

## Example - Async Function

```js
import { asyncTimeout } from "@chriscdn/promise-timeout";

try {
  const message = await asyncTimeout(() => pause(1500), {
    timeout: 1000,
    errorMessage: "The request timed out.",
  });
} catch (e) {
  // The request timed out.
  console.log(e.message);
}
```

## Options

A few options can be passed into `promiseTimeout` and `asyncTimeout`. All options are optional. Below are the defaults:

```ts
const options = {
  timeout: 30000, // timeout, in milliseconds
  onTimeout: () => {}, // callback if timeout occurs, called before promise is rejected
  errorMessage: "The promise timed out.", // The time out exception. Used when constructing the error object.
};
```

## License

[MIT](LICENSE)
