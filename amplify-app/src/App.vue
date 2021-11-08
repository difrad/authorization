<template>
  <div>
    <div v-if="authState !== 'signedin'">You are signed out.</div>
    <amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <div>Hello, {{user.username}}</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'AuthStateApp',
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined
    }
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  }
}

export default {
  name: 'AuthWithSlots',
  data() {
    return {
      formFields: [
        {
          type: 'email',
          label: 'Custom Email Label',
          placeholder: 'Custom email placeholder',
          inputProps: { required: true, autocomplete: 'username' },
        },
        {
          type: 'password',
          label: 'Custom Password Label',
          placeholder: 'Custom password placeholder',
          inputProps: { required: true, autocomplete: 'new-password' },
        },
      ]
    }
  }
}
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
