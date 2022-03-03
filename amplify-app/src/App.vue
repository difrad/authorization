<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";
  import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

  import Amplify from 'aws-amplify';
  import awsconfig from './aws-exports';

  export default {
    setup(){
      name: 'App',
      created(){
        //authentication state management
        onAuthUIStateChange((state, user) => {
          //set current user and load data after login
          if(state === AuthState.SignedIn){
            this.user = user;
          }
        });
      }
      data(){
        return {
          user: {}
        };
      }
      
      }
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

