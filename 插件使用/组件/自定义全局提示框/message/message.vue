<template>
    <div id="toast" :class="['toast', { 'suc-toast': successful }, {'notfixed': getContainer}]" v-show="visible">
        <!-- 成功 -->
        <template v-if="successful">
            <div class="success-toast">
                <div class="toast-icon">
                   <div class="right-hook">
                   </div>
                </div>
                <div class="toast-msg" v-html="message">
                </div>
            </div>
        </template>
        <!-- 成功 -->
        <template v-else-if="crossTip">
            <div class="cross-toast">
                
                <div class="toast-msg">
                    {{ message }}
                </div>
                <p> 2s后自动关闭 </p>
                <div class="close" @click="visible=false">
                    关闭
                </div>
            </div>
        </template>
        <!-- 其他 -->
        <template v-else>
            <div :class="['dialog-tips',  customClass]" v-html="message"></div>
        </template>
    </div>
</template>
<script>
export default {
    data () {
        return {
            visible: false,
            message: '',
            customClass:'',
            successful: false,
            crossTip:false,
            getContainer: false
        }
    }
}
</script>
<style lang="less" scoped>

@keyframes dgLeft{
    0%{
        top:-100%}
    100%{
        top:0%
    }
}
		
@keyframes dgRight{
    0%{
        left:-100%
    }
    100%{
        left:0%
    }
}

@keyframes dgZoom{
    0%{
        transform: scale(0, 0);
    }
    100%{
        transform: scale(1, 1);
    }
}

@keyframes dgOpacity{
    0%{
        opacity: 0;
        margin-left: -120px;
    }
    100%{
        opacity: 1;
        margin-left: 0;
    }
}

.toast{
    position: fixed;
    z-index: 505;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.suc-toast{
        width:100%;
    }
    &.notfixed{
        position: absolute;
    }
}

.dialog-tips {
    border-radius: 6px;
    background: rgba(62, 101, 255, 1);
    padding: 10px 14px;
    white-space: break-all;
    text-align: center;
    color: #fff;
    font-size: 12px;
}

.success-toast{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    .toast-icon{
        width: 66px;
        height: 66px;
        border-radius: 66px;
        background: linear-gradient(349deg, rgba(62, 101, 255) 8.22%, rgba(99, 130, 255) 91.78%);
        position: relative;
        animation: dgZoom 0.3s linear 0s 1 both;
        .right-hook{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: rotate(-45deg);
            width: 30px;
            height: 20px;
            margin: -14px 0 0 -13px;
            overflow: hidden;
            
            &::after{
                content: "";
                position: absolute;
                background: #fff;
                border-radius: 3px;
                width: 30px;
                height: 3px;
                bottom: 0;
                animation: dgRight 0.3s linear 0.6s 1 both;
            }
            &::before{
                content: "";
                position: absolute;
                background: #fff;
                border-radius: 3px;
                width: 3px;
                height: 20px;
                left: 0;
                animation: dgLeft 0.3s linear 0.3s 1 both;
            }
        }
    }
    .toast-msg{
        
        
        border-radius: 32px;
        background: rgba(62, 101, 255);
        color: #fff;
        font-size: 14px;
        margin-top: 16px;
        padding:4px 16px;
        text-align: center;
        margin-left: -120px;
        animation: dgOpacity 0.3s linear 0s 1 both;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}
.cross-toast{
    width: 304px;
    background: rgba(24, 26, 33, 0.90);
    border-radius: 6px;
    padding: 14px 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    .toast-msg {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 1.5;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.60);
        text-align: center;
    }
    p {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        font-weight: 400;
        padding-top: 10px;
        color: rgba(255, 255, 255, 0.60);
        text-align: center;
    }
    .close {
        width: 100%;
        height: 32px;
        line-height: 32px;
        background: rgba(62, 101, 255, 1);
        border-radius: 4px;
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
        font-weight: 500;
    }
}


</style>