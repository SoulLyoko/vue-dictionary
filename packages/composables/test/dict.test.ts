import { ref } from "vue-demi";

import { useDict } from "../dict";

const resolveTimeout = 100;
const resolveCount = ref(0);
const testData = [
  { label: "test1", value: "test1" },
  { label: "test2", value: "test2" }
];

const sleep = (ms?: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const getTestData = async () => {
  sleep(resolveTimeout);
  resolveCount.value += 1;
  return testData;
};
const useDictFn = () => useDict("test", getTestData, { res: "res" });

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
    expect(resolveCount.value).toBe(2);
  });

  it("cache", async () => {
    const iterator: number[] = new Array(10).fill(resolveTimeout);
    for (const i of iterator) {
      useDictFn();
      await sleep(i);
    }
    expect(resolveCount.value).toBe(2);
  });

  it("return dictStorage", async () => {
    const {
      test: { data }
    } = useDict();
    expect(data.value).toEqual(testData);
  });

  it("return dictStorageItem", async () => {
    const { data } = useDict("test");
    expect(data.value).toEqual(testData);
  });
});
