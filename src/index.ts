export type Options = {
  timeout?: number;
  errorMessage?: string;
  onTimeout?: () => void;
};

const promiseTimeout = <T>(
  promise: Promise<T>,
  options: Options,
): Promise<T> => asyncTimeout(() => promise, options);

const asyncTimeout = <T>(
  asyncFn: () => Promise<T>, // Accepts an async function or a function returning a Promise
  options: Options,
): Promise<T> => {
  const timeout = options.timeout ?? 30 * 1000; // 30s
  const errorMessage = options.errorMessage ?? "The promise timed out.";
  const onTimeout = options.onTimeout ?? (() => {});

  let timeoutID: ReturnType<typeof setTimeout>;

  const timeOutPromise = new Promise<T>((_, reject) =>
    timeoutID = setTimeout(() => {
      onTimeout();
      reject(new Error(errorMessage));
    }, timeout)
  );

  return Promise.race([asyncFn(), timeOutPromise]) // Invoke asyncFn to get the Promise
    .finally(() => clearTimeout(timeoutID));
};

export { asyncTimeout, promiseTimeout };
