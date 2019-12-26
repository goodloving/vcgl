import VActionSheet from "../components/ActionSheet";
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
    const ActionSheet = vue.extend(VActionSheet);
    if (!$vm) {
      $vm = new ActionSheet({
        el: document.createElement("div")
      });
      document.body.appendChild($vm.$el);
    }

    const actionsheet = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        if (typeof options === "object" && (options.onShow || options.onHide)) {
          options.onShow && options.onShow();
        }
        this.$watcher && this.$watcher();

        $vm.$off("can-btn-clicked");
        $vm.$off("sel-btn-clicked");

        $vm.$on("can-btn-clicked", () => {
          options && options.onCancel && options.onCancel();
        });
        $vm.$on("sel-btn-clicked", index => {
          options && options.onSelected && options.onSelected(index);
        });
        $vm.show();
      },
      hide() {
        $vm.hide();
      },
      isVisible() {
        return $vm.showAS;
      }
    };
    vue.$vgActionSheet = actionsheet;

    vue.mixin({
      created: function() {
        this.$vgActionSheet = vue.$vgActionSheet;
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
