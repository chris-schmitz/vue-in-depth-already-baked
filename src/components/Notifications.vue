<script>
    module.exports = {
        data: () => {
            return {
                showAlert: false,
                type: null,
                message: null
            }
        },
        computed:{
            alertType: function (){
                let alertName = {}
                alertName["alert-" + this.type] = true
                return alertName
            }
        },
        events:{
            showNotification: 'showNotification',
            hideNotification: 'hideNotification'
        },
        methods:{
            showNotification: function (type = 'danger', message = 'Unknown Error'){
                this.message = message
                this.type = type
                this.showAlert = true
            },
            hideNotification: function (){
                this.showAlert = false
            }
        }
    }
</script>

<template>
    <div class="notifications-container">
        <div v-show="showAlert" transition="flip" class="animated alert alert-dismissible" v-bind:class="alertType">
            <button @click="hideNotification" type="button" class="close" data-dismiss="alert">
                <span>&times;</span>
            </button>
            <span class="notification">
                <strong>{{ type }}</strong>
                <span class="notification-message">{{ message }}</span>
            </span>
        </div>
    </div>
</template>

<style lang="sass">
    .notifications-container{
        margin-top: 20px;
    }
</style>