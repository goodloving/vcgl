[toc]

## 介绍

&emsp;&emsp;vcgl为基于Vue.js开发的组件库，主要针对移动端。相对于常用一些组件库，vcgl自设计之初就贯彻着用户**高度定制**的原则，几乎所有的组件都能够根据用户的需求，通过改变不同参数值来实现不同样式设计，当然如果你觉得麻烦也可以使用默认的参数、应用默认的样式（默认样式也是很好看的哟）！

&emsp;&emsp;github地址：https://github.com/goodloving/vcgl （如果用的还可以，欢迎给☆）

## 快速开始

```bash
npm install vcgl -S
```

vue项目中引入和使用（按需引入）：

```javascript
import Vue from "vue"
import { VcglActionSheet } from "vcgl";
Vue.use(VcglActionSheet);
```

唤起ActionSheet的事件中调用：

```javascript
this.$vgActionSheet.show({
  menus: this.menus,
  onSelected: index => this.onSelected(index),
  onCancel: () => this.onCancel()
});
```

选择项和取消项对应的函数：

```javascript
onCancel() {
  this.$vactionsheet.hide();  //隐藏
},
onSelected(index) {
  alert(index);  //具体操作
}
```

## 使用说明

### 一、Button

局部引入（单个组件中）：

```javascript
<script>
import { VcglButton } from "vcgl";
export default {
  components: {
    VcglButton
  }
}
</script>
```

使用：

```javascript
<template>
  <div>
    <vcgl-button type="success">这是一个按钮</vcgl-button>
  </div>
</template>
```

或者：

```javascript
<template>
  <div>
    <vcgl-butto
      type="success"
      btn_font_size="20px"
      btn_font_color="#000000"
      btn_width="100%"
      btn_height="100%"
      btn_background="linear-gradient(to right, #000000 0%,#ffffff 100%)"
      btn_border="1px solid red"
      btn_border_radius="5px"
      @click="onClickBtn"
      >
        <img class="img" src="../assets/images/delete.png" />
      	这是一个按钮
    </vcgl-butto>
  </div>
</template>
```

属性：

| 属性名            | 类型     | 描述                                                         |
| ----------------- | -------- | ------------------------------------------------------------ |
| type              | String   | 设置button的总体样式，默认default，可选**primary，success，error** |
| btn_font_size     | String   | 设置button的字体大小，默认大小为"14px"，设置格式"18px"等     |
| btn_font_color    | String   | 设置button的字体颜色，默认黑色"#000000"，设置格式"#000000"、"rgba(14,14,14,1)"等 |
| btn_width         | String   | 设置button的宽度，默认为所包含字体的宽度，设置格式"50px"、"100%"等 |
| btn_height        | String   | 设置button的高度，默认为所包含字体的高度，设置格式"50px"、"100%"等 |
| btn_background    | String   | 设置button的背景色，默认大小为"14px"                         |
| btn_font_color    | String   | 设置button的字体颜色，默认为" rgba(255, 255, 255, 1)"，设置格式"#000000"、"rgba(14,14,14,1)"、"linear-gradient(to right, #000000 0%,#ffffff 100%)"等 |
| btn_border        | String   | 设置button的边框样式，默认为"1px solid #999999"              |
| btn_border_radius | String   | 设置button的边框圆角大小，默认大小为"4px"                    |
| btn_disabled      | String   | 设置button是否可点击，默认为" true"，设置格式"true"、"false" |
| @click            | Function | 设置button的点击事件                                         |



### 二、ActionSheet

全局引入（main.js）：

```javascript
import { VcglActionSheet } from "vcgl";
Vue.use(VcglActionSheet);
```

使用：

```javascript
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
      // 图标与menus对应，如果长度比menus大1，最后一个为"取消"图标
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
```

属性：

| 属性名         | 类型     | 描述                                                         |
| -------------- | -------- | ------------------------------------------------------------ |
| menus          | Objiect  | 需要显示的项，格式为`menus: {gaodeMap: "高德地图",baiduMap: "百度地图",iosMap: "苹果地图"}` |
| icons          | Array    | 每一项中前面是否需要显示图标，默认为[]，即不显示。图标与menus对应，如果长度比menus大1，最后一个为"取消"图标，格式为```[require("../assets/images/delete.png"),require("../assets/images/delete.png"),require("../assets/images/delete.png"),require("../assets/images/delete.png")]``` |
| as_item_height | String   | 设置每一项（包括取消项）的高度，默认为"45px"，格式为"50px"、"100%"等 |
| as_font_size   | String   | 设置每一项（包括取消项）的字体大小，默认为"17px"，格式为"50px"等    |
| as_item_color | String   | 设置每一项的字体颜色，默认为" rgba(255, 255, 255, 1)"，设置格式"#000000"、"rgba(14,14,14,1)"、"linear-gradient(to right, #000000 0%,#ffffff 100%)"等 |
| as_cancel_color | String   | 设置"取消"项的字体颜色，默认为" \#3c86f5"，设置格式"#000000"、"rgba(14,14,14,1)"、"linear-gradient(to right, #000000 0%,#ffffff 100%)"等 |
| onSelected | Function | 接受点击的item的值，根据值进行具体操作，完成后隐藏隐藏ActionSheet和蒙层区 |
| onCancel       | Function | 点击蒙层区和“取消”隐藏ActionSheet和蒙层区                    |


