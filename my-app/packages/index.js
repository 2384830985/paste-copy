import TOptionGroup from './component/option-group'
import TInput from './component/input'
import TSelect from './component/select'
import TOption from './component/option'
import TCheckboxGroup from './component/checkbox-group'
import TCheckbox from './component/checkbox'
import TRadio from './component/radio'
import TRadioGroup from './component/radio-group'
import TButton from './component/button'
import TButtonGroup from './component/button-group'
import TIcon from './component/icon'
import TRow from './component/row'
import TCol from './component/col'
import './styles/index.less'

// 存储组件列表
const components = [
    TOptionGroup,
    TOption,
    TSelect,
    TInput,
    TCheckboxGroup,
    TCheckbox,
    TRadioGroup,
    TRadio,
    TCol,
    TRow,
    TIcon,
    TButtonGroup,
    TButton
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue,opts={}) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))

    Vue.prototype.$AVIEW = {
        size: opts.size || '',
    }
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    ...components
}
