<template>
  <div>
    演示 actionsheet demo
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: {
        1: "微信",
        2: "支付宝",
        3: "银联"
      },
      icons: [
        require("../assets/images/delete.png"),
        require("../assets/images/delete.png"),
        require("../assets/images/delete.png"),
        require("../assets/images/delete.png")
      ]
    };
  },
  mounted() {
    this.onClickActionSheet();
  },
  methods: {
    onClickActionSheet() {
      this.$vgActionSheet.show({
        menus: this.menus,
        icons: this.icons,
        as_item_height: "45px",
        as_font_size: "18px",
        as_item_color: "rgba(99,34,200,1)",
        as_cancel_color: "#999999",
        onSelected: index => this.onSelected(index),
        onCanncel: () => this.onCancel()
      });
    },
    onSelected(index) {
      alert(index);
    },
    onCancel() {
      this.$vgActionSheet.hide();
    }
  }
};
</script>

<style></style>
