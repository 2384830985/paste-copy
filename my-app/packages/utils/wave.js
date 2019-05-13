// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
    if (process.env.NODE_ENV === 'test') {
        return false;
    }
    return !element || element.offsetParent === null;
}

let  styleForPesudo;

export default {
    name: 'wave',
    mounted(){
        let that =this;
        that.$nextTick(()=>{
            let node = that.$el
            if (node.nodeType!==1) {
                return
            }
            this.instance = this.bindAnimationEvent(node);
        })
    },
    methods:{
        /**
         * 删除当前innerHTML
         */
        removeExtraStyleNode() {
            if (styleForPesudo) {
                styleForPesudo.innerHTML = '';
            }
        },
        /**
         * 点击事件
         */
        onClick(node,waveColor){
            if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
                return;
            }
            console.log(node)
            console.log(node.type)
            console.log(this.$slots.default[0])
            console.log(this.$slots.default)
            this.removeExtraStyleNode();
            this.extraNode = document.createElement('div');
            const extraNode = this.extraNode;
            extraNode.className = 'ant-click-animating-node';
            node.setAttribute('jinjinjin', 'true');
            extraNode.style.borderColor = waveColor;
            node.appendChild(extraNode);
            // 创建一个 style 然后插入
            styleForPesudo = styleForPesudo || document.createElement('style');

            styleForPesudo.innerHTML = `[jinjinjin]:after { border-color: ${waveColor}; }`;
            if (!document.body.contains(styleForPesudo)) {
                document.body.appendChild(styleForPesudo);
            }
        },
        /**
         * 绑定动画事件
         * @param node
         */
        bindAnimationEvent(node){
            if (!node||
                !node.getAttribute||
                node.getAttribute('disabled') ||
                node.className.indexOf('disabled') >= 0
            ) {
                return
            }
            console.log(node)
            // 点击事件回调
            const onClick = (e)=>{
                console.log(e)
                // 当前的是input 或者没有 dom 的时候则不回调
                if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
                    return;
                }
                const waveColor =
                    getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
                    getComputedStyle(node).getPropertyValue('border-color') ||
                    getComputedStyle(node).getPropertyValue('background-color');
                this.clickWaveTimeoutId = window.setTimeout(() => this.onClick(node, waveColor), 0);

            }
            // 添加click事件
            node.addEventListener('click',onClick,true);
            // console.log(this.$slots.default)
            // console.log(this.$slots.default[0])
            // 添加一个删除当前click的方法
            return {
                cancel: () => {
                    node.removeEventListener('click', onClick, true);
                },
            }
        }
    },
    render(){
        return this.$slots.default && this.$slots.default[0];
    }
}
