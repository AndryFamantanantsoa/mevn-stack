<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Troov-MVEN</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div v-if="$auth.user">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>{{ $auth.user.email }}</em>
              </template>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <b-nav-item href="/signup" v-if="!$auth.user">Sign Up</b-nav-item>
          <b-button variant="light" to="/signin"  v-if="!$auth.user">Sign in</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
    }
</script>
