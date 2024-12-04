import { describe, expect, test } from "vitest";
import { asyncTimeout, promiseTimeout } from "../src/index";

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const errorMessage = "The request did not complete in time.";

describe("All test", () => {
  test("Async Test", async () => {
    expect(await asyncTimeout(async () => 5, { timeout: 100000, errorMessage }))
      .toBe(5);
  });
  test("Promise Test", async () => {
    expect(
      await promiseTimeout(
        new Promise((resolve) => resolve(15)),
        { timeout: 100000, errorMessage },
      ),
    ).toBe(15);
  });

  test("Async Test Timeout", async () => {
    expect(
      asyncTimeout(async () => pause(1000), { timeout: 20, errorMessage }),
    ).rejects.toThrow(errorMessage);
  });

  test("Promise Test Timeout", async () => {
    expect(
      promiseTimeout(pause(1000), { timeout: 2, errorMessage }),
    ).rejects.toThrow(errorMessage);
  });

  test("Promise Test Timeout", async () => {
    expect(
      promiseTimeout(
        new Promise((resolve) => {
          pause(5000).then(resolve);
        }),
        { timeout: 100, errorMessage },
      ),
    ).rejects.toThrow(errorMessage);
  });

  test("Async Test Timeout", async () => {
    expect(
      asyncTimeout(async () => pause(1000), {
        timeout: 20,
        errorMessage,
      }),
    ).rejects.toThrow(errorMessage);
  });
});
