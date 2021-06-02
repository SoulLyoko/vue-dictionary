<template>
  <div id="app">
    <div>
      <div class="label">select:</div>
      <v-dict v-model="dictValue" type="select" code="1"></v-dict>
    </div>
    <div>
      <div class="label">multiple select:</div>
      <v-dict v-model="dictArr" type="select" code="1" multiple style="width:500px"></v-dict>
    </div>
    <div>
      <div class="label">radio:</div>
      <v-dict v-model="dictValue" type="radio" code="1"></v-dict>
    </div>
    <div>
      <div class="label">checkbox:</div>
      <v-dict v-model="dictArr" code="1" type="checkbox"></v-dict>
    </div>
    <div>
      <div class="label">cascader:</div>
      <v-dict
        v-model="cascaderValue"
        type="cascader"
        :props="{ checkStrictly: true }"
        :show-all-levels="false"
        :dictData="cascaderDict"
        :dictOption="{ label: 'label', value: 'value' }"
      ></v-dict>
    </div>
    <div>
      <div class="label">text:</div>
      <v-dict v-model="dictValue" code="1" type="text"></v-dict>
    </div>
    <div>
      <div class="label">use dictData:</div>
      <v-dict
        ref="sexdict"
        v-model="customValue"
        type="radio"
        :dictData="customDict"
        :dictOption="{ label: 'label', value: 'value' }"
      ></v-dict>
    </div>
    <div>
      <div class="label">getLabel():</div>
      <button @click="getLabel">{{ label }}</button>
    </div>
    <div>
      <div class="label">slot:</div>
      <v-dict code="1">
        <template #default="{options}">
          <div>
            <div v-for="item in options" :key="item.value">{{ item.value }}.{{ item.label }}</div>
          </div>
        </template>
      </v-dict>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dictValue: 1,
      dictArr: [1, 2],
      cascaderValue: "1-1",
      customValue: 1,
      customDict: [
        { label: "男", value: 1 },
        { label: "女", value: 0 }
      ],
      cascaderDict: [
        {
          label: "level1",
          value: "1",
          children: [
            { label: "level1-1", value: "1-1" },
            { label: "level1-2", value: "1-2" },
            { label: "level1-3", value: "1-3" }
          ]
        },
        {
          label: "level2",
          value: "2",
          children: [
            { label: "level2-1", value: "2-1" },
            { label: "level2-2", value: "2-2" },
            { label: "level2-3", value: "2-3" }
          ]
        }
      ],
      label: "Click To Get Label"
    };
  },
  methods: {
    getLabel() {
      this.label = this.$refs.sexdict.getLabel(1);
    }
  }
};
</script>

<style>
#app {
  width: 1200px;
  margin: 100px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.label {
  color: green;
}
</style>
