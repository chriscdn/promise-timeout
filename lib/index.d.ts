declare const promiseTimeout: <T>(promise: Promise<T>, timeout: number, errMsg?: string) => Promise<T>;
export default promiseTimeout;
