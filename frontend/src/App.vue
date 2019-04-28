<template>
  <div id="app" v-bind:class="{ 'main-page': this.$route.path == '/' }">
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
    Footer,
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import './scss/variables';
@import './scss/general';

#app {
  max-width: 1280px;
  margin: auto;
  display: flex;
  height: 100%;
  flex-direction: column;
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-primary;
}

#app.main-page {
  max-width: none;
  width: 100%;

  .header {
    background-color: transparent;
  }

  .footer {
    display: none;
  }
}

</style>
