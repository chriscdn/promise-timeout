const promiseRetry = <T>(
  promise: Promise<T>,
  timeout: number,
  errMsg = "The promise timed out."
): Promise<T> => {
  let timeoutID;

  // The <T> here to keep TS happy.
  const timeOutPromise = new Promise<T>(
    (_resolve, reject) =>
      (timeoutID = setTimeout(() => reject(new Error(errMsg)), timeout))
  );

  return Promise.race([promise, timeOutPromise]).finally(() =>
    clearTimeout(timeoutID)
  );
};

export default promiseRetry;
