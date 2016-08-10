<template>
  <div id="app" class="container">
    <svg width="100%" height="100%" id="grid" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#D800E5" stroke-width="0.5"/>
        </pattern>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#smallGrid)"/>
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D800E5" stroke-width="1"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <mask></mask>
    <notifications></notifications>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Companies</h3>
      </div>
      <router-view transition="fade" transition-mode="out-in" class="router-view animated"></router-view>
      <div class="panel-footer">
        <actions></actions>
      </div>
    </div>
  </div>
</template>

<script>
  import Actions from './components/Actions.vue'
  import Mask from './components/Mask.vue'
  import Notifications from './components/Notifications.vue'

  export default {
    components:{ Actions, Mask, Notifications},
    http:{
      root: '/api/v1',
    },
    ready(){
      this.$http.get('companies',)
        .then((response) => {
          State.setCompanies(response.data.companies)
        })
        .catch((r) => {
          console.error(r)
          // send a notification or alert
        })
    },
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
      },
      showNotification: function (...payload){
        this.$broadcast('showNotification', ...payload)
      },
      hideNotification: function (...payload){
        this.$broadcast('hideNotification', ...payload)
      }
    }

  }
</script>

<style lang="sass">
  body {
    font-family: Helvetica, sans-serif;
  }
  #grid{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
  }
  #app{
    margin-top:20px;

  }
  .router-view{
    -webkit-animation-duration: .25s;
    //-webkit-animation-delay: 0s;
    //-webkit-animation-iteration-count: infinite;
  }
</style>
