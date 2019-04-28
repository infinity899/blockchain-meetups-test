<template>
  <footer class="footer full-width">
      <div class="footer-logo">
          <img src="../assets/header.svg" alt="logo">
      </div>
      <div class="footer-contact">
        <p>Contact: fake@email.com</p>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style lang="scss">

.footer {
  height: 112px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 600px){
    flex-direction: column;
    justify-content: center;
  }

  .footer-logo {
    margin: auto;
    width: 260px;
    height: 90%;

    @media screen and (max-width: 600px){
      width: 120px;
      height: auto;
    }
  }

  .footer-contact {
    position: absolute;
    right: 24px;

    @media screen and (max-width: 600px){
      position: relative;
      right: auto;
    }

    p {
      font-size: 18px;
      font-weight: 700;
    }
  }
}


</style>
