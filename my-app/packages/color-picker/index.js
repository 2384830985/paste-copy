import ColorPicker from './src/color-picker'

ColorPicker.install = function (Vue) {
    Vue.component(ColorPicker.name,ColorPicker)
};

export default ColorPicker
