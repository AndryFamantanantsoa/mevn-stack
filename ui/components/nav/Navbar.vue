<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Troov-MVEN</b-navbar-brand>
      <b-navbar-brand v-if="isAuthentified" to="/list-book">Books</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div v-if="isAuthentified">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>{{ $auth.user.email }}</em>
              </template>
              <b-dropdown-item @click="logoutUser">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <b-nav-item to="/signup" v-if="!isAuthentified">Sign Up</b-nav-item>
          <b-button variant="light" to="/signin"  v-if="!isAuthentified">Sign in</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
      name: "navbar",
      data() {
        return {
          isAuthentified: this.$auth.loggedIn
        }
      },
      methods: {
        updateLogInfo () {
          this.isAuthentified = this.$auth.loggedIn
        },
        async logoutUser (){
          await this.$auth.logout();
          this.$router.push('/signin');
        }
      },
      watch: {
        $route() {
          this.updateLogInfo();
        }
      }
    }
</script>
