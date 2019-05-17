export default {
    props:{
        animationType: {
            type: Number,
            default: 1
        }
    },
    data(){
        return{
            animation: false,
        }
    },
    methods: {
        /**
         * 动画效果
         */
        btnAnimation(){
            let that =this
            if (that.animationType===1) {
                that.animation = true;
                that.$nextTick(()=>{
                    setTimeout(function () {
                        that.animation = false;
                        that.$forceUpdate()
                    },200)
                })
            }
        }
    }
}
