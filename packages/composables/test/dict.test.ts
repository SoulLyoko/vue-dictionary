import { ref } from "vue-demi";

import { useDict, useDictStorage } from "../dict";

const resolveTimeout = 100;
const testCount = ref(0);
const testData = [
  { label: "test1", value: "test1" },
  { label: "test2", value: "test2" }
];

const sleep = (ms?: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const getTestData = async () => {
  sleep(resolveTimeout);
  testCount.value += 1;
  return testData;
};
const useDictFn = () => useDict(getTestData, { res: "res" }, "test");

describe("useDict", () => {
  it("returns", async () => {
    const { data, isLoading, isFinished, execute } = useDictFn();
    expect(data.value).toEqual([]);
    expect(isLoading.value).toBeTruthy();
    expect(isFinished.value).toBeFalsy();
    await sleep(resolveTimeout);
    expect(data.value).toEqual(testData);
    expect(isLoading.value).toBeFalsy();
    expect(isFinished.value).toBeTruthy();

    execute();
    await sleep(resolveTimeout);
    expect(testCount.value).toBe(2);
  });

  it("cache", async () => {
    const iterator: number[] = new Array(10).fill(resolveTimeout);
    for (const i of iterator) {
      useDictFn();
      await sleep(i);
    }
    expect(testCount.value).toBe(2);
  });
});

describe("useDictStorage", () => {
  it("return dictStorage", async () => {
    const testStorage = useDictStorage();
    expect(testStorage.test.data.value).toEqual(testData);
  });

  it("return dictStorageItem", async () => {
    const testStorage = useDictStorage("test");
    expect(testStorage.data.value).toEqual(testData);
  });
});
