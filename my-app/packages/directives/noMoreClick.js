// 提交以后禁用按钮一段时间，防止重复提交
import Vue from 'vue';
Vue.directive('noMoreClick', {
    inserted(el, binding) {
        el.addEventListener('click', e => {
            el.classList.add('is-disabled');
            el.disabled = true;
            setTimeout(() => {
                el.disabled = false;
                el.classList.remove('is-disabled');
            }, binding.value|500)
        })
    }
});
