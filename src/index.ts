const promiseTimeout = <T>(
  promise: Promise<T>,
  timeout: number,
  errMsg = "The promise timed out.",
): Promise<T> => {
  return asyncTimeout(() => promise, timeout, errMsg);
};

const asyncTimeout = <T>(
  asyncFn: () => Promise<T>, // Accepts an async function or a function returning a Promise
  timeout: number,
  errMsg = "The promise timed out.",
): Promise<T> => {
  let timeoutID: ReturnType<typeof setTimeout>;

  const timeOutPromise = new Promise<T>((_, reject) =>
    timeoutID = setTimeout(() => reject(new Error(errMsg)), timeout)
  );

  return Promise.race([asyncFn(), timeOutPromise]) // Invoke asyncFn to get the Promise
    .finally(() => clearTimeout(timeoutID));
};

export { asyncTimeout, promiseTimeout };
