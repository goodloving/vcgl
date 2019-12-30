<template>
  <div v-if="showAS">
    <div class="v-actionsheet-cover" @click="_cancel"></div>
    <div class="v-actionsheet-page" :style="{bottom:(Number(as_item_height.split('p')[0])+10)+'px'}">
      <div
        :style="{'font-size':as_font_size,height:as_item_height,color:as_item_color}"
        :class="
          index === menusLength
            ? 'v-actionsheet-item-last'
            : 'v-actionsheet-item'
        "
        v-for="(item, index) in memusList"
        :key="index"
        @click.stop="_selected(item)"
      >
        <img :src="icons[index]" :style="{height:as_font_size,'margin-right':'5px'}">
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="v-actionsheet-cancel">
      <div
        :style="{'font-size':as_font_size,height:as_item_height,color:as_cancel_color}"
        class="v-actionsheet-cancle-item"
        @click.stop="_cancel">
        <img v-if="menusLength+2===icons.length" :src="icons[menusLength]" :style="{height:as_font_size,'margin-right':'5px'}">
        <span>取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showAS: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Object,
      default: () => {}
    },
    icons: {
      type: Array,
      default: () => []
    },
    as_font_size: {
      type: String,
      default: "17px"
    },
    as_item_color: {
      type: String,
      default: "#000000"
    },
    as_cancel_color: {
      type: String,
      default: "#3c86f5"
    },
    as_item_height: {
      type: String,
      default: "45px"
    }
  },
  computed: {
    memusList() {
      let menuList = [];
      for (var key in this.menus) {
        menuList.push(this.menus[key]);
      }
      return menuList;
    },
    menusLength() {
      return this.memusList.length - 1;
    }
  },
  methods: {
    show() {
      this.showAS = true;
    },
    hide() {
      this.showAS = false;
    },
    _selected(index) {
      this.$emit("sel-btn-clicked", index);
      this.hide();
    },
    _cancel() {
      this.$emit("can-btn-clicked");
      this.hide();
    }
  }
};
</script>
<style lang="less" scoped>
.v-actionsheet-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(75, 75, 75, 0.5);
  z-index: 10000;
}
.v-actionsheet-page {
  position: fixed;
  bottom: 55px;
  right: 5%;
  left: 5%;
  width: 90%;
  background: #ffffff;
  flex-direction: column;
  border-radius: 20px;
  z-index: 19999;
  .v-actionsheet-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    border-bottom: 0.5px solid #e9e7e7;
    font-size: 17px;
  }
  .v-actionsheet-item-last {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    font-size: 17px;
  }
}
.v-actionsheet-cancel {
  position: fixed;
  bottom: 5px;
  right: 5%;
  left: 5%;
  width: 90%;
  background: #ffffff;
  flex-direction: column;
  border-radius: 20px;
  z-index: 19999;
  .v-actionsheet-cancle-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    color: #3c86f5;
    font-size: 17px;
  }
}
</style>
