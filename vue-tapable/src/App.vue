<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {SyncHook} from './libs/tapable'
export default {
  name: 'App',
  created(){

    let hook = new SyncHook(['name']);
    hook.tap('1',(name)=>{
      console.log('-----',name);
    })
    hook.call('zack')


  }


}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
