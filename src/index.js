import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import Velocity from 'velocity-animate';

import storeObject from './store/';
import routes from './routes/';

import App from './App';

Vue.use(Vuex);
Vue.use(VueRouter);

// Velocity.patch(window, true);
// Velocity.patch(Element && Element.prototype);
// Velocity.patch(NodeList && NodeList.prototype);
// Velocity.patch(HTMLCollection && HTMLCollection.prototype);

const store = new Vuex.Store(storeObject);
const router = new VueRouter({ 
	mode: 'history',
	routes
});

window.axios = require('axios');
window.App = new Vue({
  store,
	router,
	render: h => h(App)
}).$mount('#root');

