<template>
  <div id="app" class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Companies</h3>
      </div>
      <router-view></router-view>
      <div class="panel-footer">
        <actions></actions>
      </div>
    </div>
  </div>
</template>

<script>
  import Actions from './components/Actions.vue'

  export default {
    components:{ Actions },
    data () {
      return {}
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
