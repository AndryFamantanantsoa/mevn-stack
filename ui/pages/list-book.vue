<template>
    <div class="list-template">
        <Alert :variant="variant" :alert-text="alerttext" :show-dismissible-alert="showDismissibleAlert" />
        <h2>List of books</h2>
        <b-button variant="success" to="/book-view">Add book</b-button>
        <ListsViewer :items="items" :deleteBook="deleteBook" />
    </div>
</template>

<script>
    import ListsViewer from '@/components/books/ListsViewer'
    import Alert from '@/components/alerts/alert.vue'
    export default {
        components: {
            ListsViewer,
            Alert
        },
        data() {
            return {
                items: [],
                variant: "danger",
                alerttext: "",
                showDismissibleAlert: false
            }
        },
        asyncData ({ $axios }, callback) {
            $axios.get('/api/books')
            .then((res) => {
                callback(null, { items: res.data })
            })
        },
        methods: {
            async deleteBook (id, index){
                if(confirm("Do you really want to delete?")){
                    this.$axios.delete('/api/books/'+id)
                    .then((res) => {
                        if (res.status == 200 && (res.data.status != 404 || res.data.status != 500) ){
                            this.variant = "success";
                            this.alerttext = res.data.message;
                            this.showDismissibleAlert = true;
                            this.items.splice(index, 1);
                        }
                        if (res.data.status == 404 || res.data.status == 500){
                            this.variant = "danger";
                            this.alerttext = res.data.message;
                            this.showDismissibleAlert = true;
                        }
                    }).catch(error => {
                        console.log(error);
                    })
                }
            }
        }
    }
</script>
<style lang="scss">
.list-template{
    margin: 2rem;
}
</style>