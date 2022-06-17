import { ref, reactive } from "vue-demi";

import { useSelected } from "../selected";

describe("useSelected", () => {
  const data = [
    { label: "test1", value: "test1" },
    { label: "test2", value: "test2" }
  ];

  const refData = ref(data);
  const refValue = ref(data[0].value);
  const reactiveConfig = reactive({ returnLabel: false });

  it("normal", () => {
    const selectedItem = useSelected(data, "test1");
    expect(selectedItem.value).toEqual(data[0]);
  });

  it("isNil", () => {
    const selectedItem = useSelected(undefined, undefined);
    expect(selectedItem.value).toEqual([]);
    const selectedLabel = useSelected(undefined, undefined, { returnLabel: true });
    expect(selectedLabel.value).toBe("");
  });

  it("reactivity", () => {
    const selectedItem = useSelected(refData, refValue, reactiveConfig);
    expect(selectedItem.value).toEqual(data[0]);
    refValue.value = data[1].value;
    expect(selectedItem.value).toEqual(data[1]);
    reactiveConfig.returnLabel = true;
    expect(selectedItem.value).toEqual(data[1].label);
  });

  it("return label", () => {
    const selectedLabel = useSelected(refData, refValue, { returnLabel: true });
    expect(selectedLabel.value).toEqual(data[1].label);
  });

  it("return multiple items", () => {
    const selectedItems = useSelected(
      data,
      data.map(e => e.value)
    );
    expect(selectedItems.value).toEqual(data);
  });

  it("return multiple label", () => {
    const selectedLabel = useSelected(
      data,
      data.map(e => e.value),
      { returnLabel: true }
    );
    const expectLabel = data.map(e => e.label).join(",");
    expect(selectedLabel.value).toEqual(expectLabel);
  });

  it("tree data", async () => {
    const treeData = [
      {
        label: "test1",
        value: "test1",
        children: [
          { label: "test11", value: "test11" },
          { label: "test12", value: "test12" }
        ]
      },
      {
        label: "test2",
        value: "test2",
        children: [
          { label: "test21", value: "test21" },
          { label: "test22", value: "test22" }
        ]
      }
    ];

    const config = reactive({ returnLabel: false });

    const selectedItem = useSelected(treeData, "test11");
    expect(selectedItem.value).toEqual(treeData[0].children[0]);

    const selectedItems = useSelected(treeData, ["test11", "test21"], config);
    const expectItems = [treeData[0].children[0], treeData[1].children[0]];
    expect(selectedItems.value).toEqual(expectItems);

    config.returnLabel = true;
    const expectLabel = expectItems.map(e => e.label).join(",");
    expect(selectedItems.value).toBe(expectLabel);
  });
});
