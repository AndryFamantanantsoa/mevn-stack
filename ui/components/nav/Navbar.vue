<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Troov-MVEN</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div v-if="this.$auth.user">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>{{ $auth.user.email }}</em>
              </template>
              <b-dropdown-item click="logoutUser()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <b-nav-item href="/signup" v-if="!this.$auth.user">Sign Up</b-nav-item>
          <b-button variant="light" to="/signin"  v-if="!this.$auth.user">Sign in</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
      methods: {
        logoutUser (){
          if (this.$auth.user){
            this.$auth.setUser();
            this.$router.push('/signin');
          }
        }
      }
    }
</script>
