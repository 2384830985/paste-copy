import PcLoading from './loading';
import loadingDirective from './directives'

PcLoading.install = function (Vue) {
    Vue.use(loadingDirective);
    Vue.component(PcLoading.name,PcLoading)
};
export default {
    PcLoading,
    loadingDirective
}
