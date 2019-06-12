import PcTable from './component/table'
import PcFormItem from './component/form-item'
import PcForm from './component/form'
import PcOptionGroup from './component/option-group'
import PcInput from './component/input'
import PcSelect from './component/select'
import PcOption from './component/option'
import PcCheckboxGroup from './component/checkbox-group'
import PcCheckbox from './component/checkbox'
import PcRadio from './component/radio'
import PcRadioGroup from './component/radio-group'
import PcButton from './component/button'
import PcButtonGroup from './component/button-group'
import PcIcon from './component/icon'
import PcRow from './component/row'
import PcCol from './component/col'
import PcAlert from './component/alert'
import PcBreadcrumb from './component/breadcrumb'
import PcBreadcrumbItem from './component/breadcrumb-item'
import './styles/index.less'

// 存储组件列表
const components = [
    PcTable,
    PcFormItem,
    PcForm,
    PcOptionGroup,
    PcOption,
    PcSelect,
    PcInput,
    PcCheckboxGroup,
    PcCheckbox,
    PcRadioGroup,
    PcRadio,
    PcCol,
    PcRow,
    PcIcon,
    PcButtonGroup,
    PcButton,
    PcAlert,
    PcBreadcrumb,
    PcBreadcrumbItem
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue,opts={}) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))

    Vue.prototype.$PASTE = {
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
