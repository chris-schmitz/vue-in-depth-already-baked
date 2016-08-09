<script>
    module.exports = {
        data(){
            return {
                message: 'mask',
                showIcon: false,
                applyMask: false
            }
        },
        events:{
            'applyMask': function(message = 'test', showIcon = false){
                console.log('applying')
                this.message = message
                this.showIcon = showIcon
                this.applyMask = true
            },
            'removeMask': function (){
                this.applyMask = false
            }
        }
    }
</script>

<template>
    <div class="mask-container" v-if="applyMask">
        <div class="message-container">
            <span class="message">{{message}}</span><i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
    </div>
</template>

<style lang="sass">
    $fontSize: 30pt;

    .mask-container{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color:rgba(0,0,0,.8);
        z-index:1000;
        display:flex;
        justify-content: center;
        align-items: center;

        .message-container{
            background-color:white;
            padding: 20px;
            border-radius:5px;

            >*{
                font-size:$fontSize;
            }
        }
        .message{
            margin-right:10px;
        }
    }
</style>