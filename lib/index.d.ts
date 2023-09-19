declare function promiseRetry<T>(promise: Promise<T>, timeout: number, errMsg?: string): Promise<T>;
export default promiseRetry;
