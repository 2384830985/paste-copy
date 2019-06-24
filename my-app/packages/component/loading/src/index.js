import Vue from 'vue';
import PcLoading from './loading';

const LoadingConstructor = Vue.extend(PcLoading);

LoadingConstructor.prototype.close = function(){
    let loadingChild = [].filter.call(document.body.childNodes,(item)=> {
        if (item.className) return item.className.indexOf('pc-loading-content') !== -1;
        return false
    });
    this.$destroy();
    document.body.removeChild(loadingChild[0]);
};

const Loading = (options = {})=>{
    options.customClass = 'content';
    let instance = new LoadingConstructor({
        el: document.createElement('div'),
        data: options
    });
    let parent = document.body;
    parent.appendChild(instance.$el);
    return instance
};

export default Loading;
