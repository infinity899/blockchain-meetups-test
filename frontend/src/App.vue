<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/variables';
@import './scss/general';

#app {
  max-width: 1280px;
  margin: auto;
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-primary;
}
</style>
