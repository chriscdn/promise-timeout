declare const promiseTimeout: <T>(promise: Promise<T>, timeout: number, errMsg?: string) => Promise<T>;
declare const asyncTimeout: <T>(asyncFn: () => Promise<T>, timeout: number, errMsg?: string) => Promise<T>;
export { asyncTimeout, promiseTimeout };
