<template>
  <button id="vcgl_btn" :class="mianType" @click="handleClick"><slot /></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    btn_font_size: {
      type: String,
      default: ""
    },
    btn_font_color: {
      type: String,
      default: ""
    },
    btn_width: {
      type: String,
      default: ""
    },
    btn_height: {
      type: String,
      default: ""
    },
    btn_background: {
      type: String,
      default: ""
    },
    btn_border: {
      type: String,
      default: ""
    },
    btn_border_radius: {
      type: String,
      default: ""
    },
    btn_disabled: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  computed: {
    mianType() {
      if (this.type === "primary") {
        return "primary";
      }
      if (this.type === "success") {
        return "success";
      }
      if (this.type === "error") {
        return "error";
      }
      return "default";
    }
  },
  mounted() {
    var tagName = document.getElementById("vcgl_btn");
    tagName.style.cssText = `
      font-size:${this.btn_font_size};
      width:${this.btn_width};
      height:${this.btn_height};
      background:${this.btn_background};
      color:${this.btn_font_color};
      border:${this.btn_border};
      border-radius:${this.btn_border_radius};
      pointer-events:${this.btn_disabled === "true" ? "none" : ""};
      opacity:${this.btn_disabled === "true" ? "0.2" : "1"}`;
  }
};
</script>

<style lang="less" scoped>
.default {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px 8px;
  outline: none;
  background: rgba(255, 255, 255, 1);
}
.primary {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  padding: 5px 8px;
  outline: none;
  background: #409eff;
}
.success {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  padding: 5px 8px;
  outline: none;
  background: #189b0d;
}
.error {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  padding: 5px 8px;
  outline: none;
  background: #e42727;
}
</style>
