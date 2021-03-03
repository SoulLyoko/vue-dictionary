<script>
const files = require.context("./components", false, /\.vue$/);
const components = {};
files.keys().forEach(key => {
  components[key.replace(/(\.\/|\.vue)/g, "")] = files(key).default;
});

const defaultOption = {
  label: "label",
  value: "value",
  children: "children",
  request: null,
  res: "res.data"
};

/**
 * @component 字典组件,支持el-select,el-radio,el-checkbox,el-cascader的所有属性
 * @desc 先在字典表中添加字典和数据,该组件已注册为全局组件,无需重复引用,使用 window.Dict[code] 可获取到字典项
 * @desc el-cascader中，props的emitPath已被强制设置成false
 * @desc slot插槽 #default="{options}"
 * @prop {string} code 请求字典接口的字典代码
 * @prop {string} type select下拉选择,cascader级联,radio单选框,radio-button按钮单选框,checkbox多选框,checkbox-button按钮多选框,text文字
 * @prop {string} join transform=true时对数组拼接成字符串的符号。type="text"时,数组拼接成字符串的符号
 * @prop {string} split transform=true时对字符串分割成数组的符号
 * @prop {array} dictData 自定义字典数据，当传入时，将不发code请求，字典格式：[{label:"",value:""}]
 * @prop {array} dictOption 字典配置
 * @prop {boolean} transform 多选时是否进行数据值的转换，只有multiple=true时生效，使用join和split的符号进行拼接和分割
 * @slot default 使用默认插槽时将不再根据type渲染组件，插槽暴露options属性：<template #default="{options}"></template>
 */
export default {
  name: "v-dict",
  components,
  props: {
    dictOption: {
      type: Object,
      default: () => ({})
    },
    dictData: Array,
    code: String,
    type: {
      type: String,
      default: "select"
    },
    join: {
      type: String,
      default: ","
    },
    split: {
      type: String,
      default: ","
    },
    transform: Boolean
  },
  data() {
    return {
      options: []
    };
  },
  render() {
    const useValue = this.getValue(this.$attrs.value);
    const $attrs = { ...this.$attrs, value: useValue };
    const attrs = { attrs: $attrs };
    const component = "dict-" + this.type;
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default({ options: this.options });
    } else if (components[component]) {
      return <component {...attrs} onChange={this.handleChange}></component>;
    } else {
      return <span>{useValue}</span>;
    }
  },
  computed: {
    option() {
      return { ...defaultOption, ...this.$dictOption, ...this.dictOption };
    }
  },
  watch: {
    code: {
      handler(val) {
        if (!val || this.dictData) return;
        this.getDict();
      },
      immediate: true
    },
    dictData: {
      handler(val) {
        if (!val) return;
        this.options = this.formatData(val);
      },
      immediate: true
    }
  },
  methods: {
    getValue(value) {
      if (this.multiple && this.transform) {
        if (typeof value === "string") {
          return value ? value.split(this.split) : [];
        } else {
          value?.join(this.join);
        }
      }
      return value;
    },
    handleChange(value) {
      this.$emit("input", this.getValue(value));
      this.$emit("change", this.getValue(value));
    },
    formatData(data) {
      return data.map(item => {
        const { label, value, children } = this.option;
        const options = { label: item[label], value: item[value] };
        if (item[children]) {
          options.children = this.formatData(item[children]);
        }
        return options;
      });
    },
    getDict() {
      let dict = window.Dict;
      if (window.DictRequesting) {
        setTimeout(this.getDict);
      } else if (dict?.[this.code]) {
        this.options = dict[this.code];
      } else {
        this.requestDict();
      }
    },
    //请求字典并存在window中
    requestDict() {
      const { request, dataPath } = this.option;
      if (!request) {
        this.options = [];
        return;
      }
      window.DictRequesting = true;
      request?.(this.code)
        .then(res => {
          this.options = this.formatData(eval(dataPath));
          let dict = window.Dict || {};
          window.Dict = {
            ...dict,
            [this.code]: [...this.options]
          };
        })
        .catch(err => {
          console.error("获取字典错误：", err);
        })
        .finally(() => {
          window.DictRequesting = false;
        });
    }
  }
};
</script>
