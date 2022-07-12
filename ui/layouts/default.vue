<template>
  <div>
    <Navbar/>
    
    <v-main>
      <nuxt />
    </v-main>

    <!-- <Footer/> -->

  </div>
</template>

<script>
  import Navbar from '@/components/nav/Navbar.vue';
  import Footer from '@/components/footer/Footer.vue';
  export default {
    components: {
      Navbar,
      Footer,
    },
  }
</script>
<style lang="scss">
  .vue-template {
      padding: 2em;
      display: flex;
      justify-content: center;
      .login-form{
          width: 44em;
      }
  }
</style>