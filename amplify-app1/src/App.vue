<template>
  <div id="app">
    <amplify-authenticator>
      <div class = "welcome">
        <h1>Hi, {{user.username}}!</h1>
        <amplify-sign-out></amplify-sign-out>
      </div>
    </amplify-authenticator>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';

export default {
  name: 'App',
  data(){
    return {
      user: {}
    };
  },
  created() {
    //authentication state management
    onAuthUIStateChange((state, user) => {
      //set current user and load data after login
      if(state === AuthState.SignedIn) {
        this.user = user;
      }
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
