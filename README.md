[toc]

## 介绍

&emsp;&emsp;vcgl为基于Vue.js开发的组件库，主要针对移动端。相对于常用一些组件库，vcgl自设计之初就贯彻着用户**高度定制**的原则，几乎所有的组件都能够根据用户的需求，通过改变不同参数值来实现不同样式设计，当然如果你觉得麻烦也可以使用默认的参数、应用默认的样式（默认样式也是很好看的哟）！

&emsp;&emsp;github地址：https://github.com/goodloving/vcgl（如果用的还可以，欢迎给☆）

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


