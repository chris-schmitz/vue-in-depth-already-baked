<template>
  <div id="app" class="container">
    <mask></mask>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Companies</h3>
      </div>
      <router-view transition="flip" transition-mode="out-in" class="animated"></router-view>
      <div class="panel-footer">
        <actions></actions>
      </div>
    </div>
  </div>
</template>

<script>
  import Actions from './components/Actions.vue'
  import Mask from './components/Mask.vue'

  export default {
    components:{ Actions, Mask },
    data () {
      return {}
    },
    router:{
      activate: () => {
        console.log('activate fired from component')
      }
    },
    events:{
      applyMask: function (...payload){
        this.$broadcast('applyMask', ...payload)
      },
      removeMask: function (...payload){
        this.$broadcast('removeMask', ...payload)
      }
    }

  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
#app{
  margin-top:20px;
}
</style>
