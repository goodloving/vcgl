<template>
  <div>
    <btn
      type="success"
      btn_font_size="20px"
      btn_font_color="#000000"
      btn_width="100%"
      btn_height="100%"
      btn_background="linear-gradient(to right, #000000 0%,#ffffff 100%)"
      btn_border="1px solid red"
      btn_border_radius="5px"
      @click="onClickBtn"
      ><img class="img" src="../assets/images/delete.png" />
      这是一个按钮
    </btn>
  </div>
</template>

<script>
import Btn from "../components/Button";
export default {
  components: {
    Btn
  },
  methods: {
    onClickBtn() {
      alert("hhaha");
    }
  }
};
</script>

<style>
.img {
  height: 20px;
}
</style>
