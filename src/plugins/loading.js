import VLoading from "../components/Loading";
import objectAssign from "object-assign";

let $vm;

const mergeOptions = function($vm, options) {
  const defaults = {};
  for (let i in $vm.$options.props) {
    if (i !== "value") {
      defaults[i] = $vm.$options.props[i].default;
    }
  }
  const _options = objectAssign({}, defaults, options);
  for (let i in _options) {
    $vm[i] = _options[i];
  }
};
const plugin = {
  install(vue = {}) {
    const Loading = vue.extend(VLoading);
    if (!$vm) {
      $vm = new Loading({
        el: document.createElement("div"),
      });
      document.body.appendChild($vm.$el);
    }

    const loading = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        $vm.show();
      },
      close() {
        $vm.close();
      }
    };
    vue.$loading = loading;

    vue.mixin({
      created: function() {
        this.$vgLoading = vue.$loading;
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
