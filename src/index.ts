const promiseTimeout = <T>(
  promise: Promise<T>,
  timeout: number,
  errMsg = "The promise timed out.",
): Promise<T> => {
  let timeoutID;

  const timeOutPromise = new Promise<T>(
    (
      _,
      reject,
    ) => (timeoutID = setTimeout(() => reject(new Error(errMsg)), timeout)),
  );

  return Promise.race([promise, timeOutPromise]).finally(() =>
    clearTimeout(timeoutID)
  );
};

export default promiseTimeout;
