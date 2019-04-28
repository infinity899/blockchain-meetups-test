<template>
<header class="header full-width">
    <div class="navbar">
        <div class="navbar-logo">
            <router-link to="/">
                 <img src="../assets/mini_logo.png" alt="logo">
            </router-link>
        </div>
        <ul ref="links" class="header-links" v-on:click="getCity">   
            <li class="header-links-item">
                <router-link to="/listing/seatle">Seatle</router-link>
            </li>
            <li class="header-links-item">
                <router-link to="/listing/sanjose">San Jose</router-link>
            </li>
            <li class="header-links-item">
                <router-link to="/listing/sanfrancisco">San Francisco</router-link>
            </li>
        </ul>
    </div>
</header>
</template>

<script>

export default {
  name: 'Header',
  components: {
  },
  props: {
  },
  methods: {
      getCity(event) {
           return event.target.text ? this.$store.state.city = event.target.text.toLowerCase() : false;
      }
  },
  mounted() {
      // gets the city from link on mount in case of refresh app or sharing route
      if (this.$refs.links.querySelector('.router-link-active'))
         return this.$store.state.city = this.$refs.links.querySelector('.router-link-active').text.toLowerCase();
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: auto;

    &-logo {
        width: 100px;
        height: 100px;

        img {
            width: 100%;
            height: auto;
        }
    }
}

.header {
    height: 112px;
    background-color: $color-white;

    &-links {
        list-style-type:none;

        &-item {
            margin: 0 40px;
            display: inline;
            color: $text-danger;
            font-size: 22px;
            letter-spacing: 0;
            text-align: center;

            @media screen and(max-width: 600px) {
                font-size: 12px;
                margin: 0 4px;
            }   

            a.router-link-active {
                color: $text-primary;
            }
        }
    }

}

</style>
