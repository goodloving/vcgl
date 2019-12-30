<template>
  <div class="contianer">
    <btn @click="onClickActionSheet">actionsheet demo</btn>
    <btn @click="onClickBtn">button demo</btn>
  </div>
</template>

<script>
import Btn from "../components/Button";
export default {
  components: {
    Btn
  },
  methods: {
    onClickActionSheet() {
      this.$router.push("/actionsheet");
    },
    onClickBtn(){
      this.$router.push("/button");
    }
  }
};
</script>

<style lang="less" scoped> 
.contianer{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
