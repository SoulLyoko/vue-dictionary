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
  dataPath: "res.data"
};

export default {
  name: "v-dict",
  components,
  props: {
    dictOption: {
      type: Object,
      default: () => ({})
    },
    dictData: Array,
    type: {
      type: String,
      default: "select"
    },
    code: String,
    transform: Boolean,
    join: {
      type: String,
      default: ","
    },
    split: {
      type: String,
      default: ","
    }
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
