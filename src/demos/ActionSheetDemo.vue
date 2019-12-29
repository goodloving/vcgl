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
      }
    };
  },
  mounted(){
    this.onClickActionSheet()
  },
  methods: {
    onClickActionSheet() {
      this.$vgActionSheet.show({
        menus: this.menus,
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
