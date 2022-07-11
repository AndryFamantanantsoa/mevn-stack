<template>
  <b-list-group>
    <Alert :variant="variant" :alert-text="alerttext" :show-dismissible-alert="showDismissibleAlert" />
    <b-list-group-item href="#" class="flex-column align-items-start" v-for="( item, index ) in items" :key="index">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ item.title }}</h5>
        <small>{{ item.isbn }}</small>
        </div>

        <p class="mb-1">
        {{ item.description }}
        </p>

        <small>Edition: {{ item.edition }}</small>
        <nuxt-link class="outline-primary" :to="{ name: 'book-view', params: { id: item._id, action: 'Update' }}">Edit</nuxt-link>
        <b-button variant="danger" @click="deleteBook(item._id, index)">Delete</b-button>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
  import Alert from '@/components/alerts/alert.vue'
  export default {
    data() {
        return {
            variant: "danger",
            alerttext: "",
            showDismissibleAlert: false
        }
    },
    components: {
        Alert
    },
    props: ["items", "deleteBook"]
  }
</script>
<style lang="scss">
  .list-group{
    padding: 2rem;
  }
</style>