<template>
  <div class="contianer">
    <img alt="Vue logo" src="../assets/images/logo.png" style="margin-top:30px"/>
    <h3>Welcome to VCGL Vue.js App </h3>
    <btn class="btn" @click="onClickActionSheet">actionsheet demo</btn>
    <btn class="btn" @click="onClickBtn">button demo</btn>
    <btn class="btn" @click="onClickLoading">loading demo</btn>
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
    },
    onClickLoading(){
      this.$router.push("/loading");
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
  .btn{
    margin-top: 5px;
  }
}
</style>
