<template>
  <Header/>
  <ToDo/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import ToDo from './components/ToDo.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    ToDo
  }
});
</script>

<style lang="stylus">
 @import './assets/main.styl';
</style>