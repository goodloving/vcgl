<template>
  <div>
    <div @click="showLoading">show loading</div>
  </div>
</template>

<script>
export default {
  methods: {
    showLoading(){
      this.$vgLoading.show({
        text: "加载中...",
        fontsize:"20px",
        fontcolor:"#666666",
        background:"red"
      });
      setTimeout(() => {
        this.closeLoading()
      }, 3000);
    },
    closeLoading() {
      this.$vgLoading.close();
    }
  }

}
</script>

<style>

</style>