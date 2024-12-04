export type Options = {
    timeout?: number;
    errorMessage?: string;
    onTimeout?: () => void;
};
declare const promiseTimeout: <T>(promise: Promise<T>, options: Options) => Promise<T>;
declare const asyncTimeout: <T>(asyncFn: () => Promise<T>, options: Options) => Promise<T>;
export { asyncTimeout, promiseTimeout };
