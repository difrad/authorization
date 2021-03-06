import { createApp } from 'vue';
import App from './App.vue';
import AmplifyVue from '@aws-amplify/ui-vue';

import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";

import '@aws-amplify/ui-components';

Amplify.configure(awsExports);

const app = createApp(App);
app.use(AmplifyVue);
app.mount('#app');
