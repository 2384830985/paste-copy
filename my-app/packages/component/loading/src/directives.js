import Vue from 'vue';
import PcLoading from './loading';

const Mask = Vue.extend(PcLoading);

const loadingDirective = {};

loadingDirective.install = Vue => {
    const toggleLoading = (el,binding)=>{
        // 为当前dom 添加loading
        if (binding.value) {
            if (!binding.modifiers.fullscreen) {
                el.mask.classList.remove("pc-loading-fixed");
                el.classList.add("pc-loading-position");
            }
            el.appendChild(el.mask);
        //    删除当前dom 的loading
        }else {
            el.classList.remove("pc-loading-position");
            let loadingChild = [].filter.call(el.childNodes,(item)=> {
                if (item.className) return item.className.indexOf('pc-loading-content') !== -1;
                return false
            });
            el.removeChild(loadingChild[0]);
        }
    }
    Vue.directive('loading',{
        // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        bind: function(el, binding, vnode){
            console.log('绑定'+'bind')
            console.log(binding)
            console.log(vnode)
            let test = el.getAttribute('pc-loading-text');
            let addClasses = el.getAttribute('pc-loading-class');
            let background = el.getAttribute('pc-loading-background');
            let spinner = el.getAttribute('pc-loading-spinner');
            const mask = new Mask({
                el: document.createElement('div'),
                data: {
                    customClass: 'content',
                    text: test||'',
                    addClasses: addClasses||'',
                    background: background||'',
                    spinner: spinner||'',
                }
            });
            el.instance = mask;
            el.mask = mask.$el;
            el.maskStyle = {};
            binding.value && toggleLoading(el,binding)
        },
        // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
        // inserted(el){
        // },
        // 更新时候
        update: function(el, binding) {
            console.log('更新'+'update')
            toggleLoading(el,binding)
        },
        // 结束的时候
        unbind: function(el, binding) {
            console.log('结束的时候'+'unbind');
            el.classList.remove("pc-loading-position");
            console.log(el)
            console.log(binding)
        }
    })
}

export default loadingDirective

