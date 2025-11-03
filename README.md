# @chriscdn/promise-timeout

This utility wraps a promise or asynchronous function and will reject if the wrapped promise or function doesn't resolve or reject within a specified time limit. If it resolves or rejects within the given time, the utility returns the result.

Keep in mind that a timed-out promise will remain pending and may still resolve or reject in the future. This package only allows you to maintain control over operations that take longer than expected.

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
      "myPromise rejected, or did not resolve or reject withing 5000ms"
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

The `promiseTimeout` and `asyncTimeout` functions accept an `Options` object, with the following defaults:

```ts
const options = {
  timeout: 30000, // timeout, in milliseconds
  onTimeout: () => {}, // callback if a timeout occurs, called before promise is rejected
  errorMessage: "The promise timed out.", // The time out exception. Used when constructing the error object.
};
```

## License

[MIT](LICENSE)
