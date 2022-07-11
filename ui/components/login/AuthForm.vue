<template>
  <div class="vue-template">
    <form class="login-form">
        <h3>{{ buttonText }}</h3>
        <div class="form-group" v-if="hasName">
            <label>Name</label>
            <input type="text" class="form-control form-control-lg" v-model="userInfo.name" required />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control form-control-lg" v-model="userInfo.email" required />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control form-control-lg" v-model="userInfo.password" required />
        </div>
        <button type="button" class="btn btn-dark btn-lg btn-block" @click="submitForm(userInfo)" >{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hasName: false,
        userInfo: {
          email: 'andry@dfv.com',
          password: 'fvvxcbfdbd'
        },
      }
    },
    props: ["submitForm", "buttonText", "hasName"]
  }
</script>