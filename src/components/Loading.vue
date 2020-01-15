<template>
  <div class="cmb-loading">
    <transition name="fade">
      <div v-if="showLoading">
        <div class="cmb-loading__mask--transparent"></div>
        <div class="cmb-loading-toast" :style="{'background':background}">
          <div class="cmb-loading-icon">
            <img
              :src="icon_loading"
              :width="width"
              :height="height"
            />
          </div>
          <p class="text" :style="{'font-size':fontsize,color:fontcolor}"
            >{{ text }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "cmb-loading",
  props: {
    text: {
      type: String,
      default: "Loading"
    },
    width: {
      type: String,
      default: "38px"
    },
    height: {
      type: String,
      default: "38px"
    },
    icon_loading: {
      type: String,
      default: require("../assets/sysImgs/sys_loading.png")
    },
    fontsize: {
      type: String,
      default: "15px"
    },
    fontcolor: {
      type: String,
      default: "#ffffff"
    },
    background: {
      type: String,
      default: "rgba(17, 17, 17, 0.7)"
    }
  },
  data() {
    return {
      showLoading: false
    };
  },
  methods: {
    show() {
      this.showLoading = true;
    },
    close() {
      this.showLoading = false;
    }
  }
};
</script>
<style lang="less" scoped>
.cmb-loading {
  .cmb-loading__mask--transparent {
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .cmb-loading-toast {
    position: fixed;
    z-index: 5000;
    width: 100px;
    height: 100px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(17, 17, 17, 0.7);
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .cmb-loading-icon {
      min-height: 66px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
    img {
      animation: rotate 1.2s linear infinite;
    }
    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .text {
      font-size: 15px;
    }
  }
}
</style>
