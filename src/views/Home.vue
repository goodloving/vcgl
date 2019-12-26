<template>
  <div>
    <button @click="onClickActionSheet">actionsheet demo</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    onClickActionSheet() {
      this.$router.push("/actionsheet");
    }
  }
};
</script>

<style></style>
