import Vue from 'nativescript-vue';
import CatTinder from './components/CatTinder';
import './styles.scss';


// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({
  render: h => h(CatTinder),
}).$start();
