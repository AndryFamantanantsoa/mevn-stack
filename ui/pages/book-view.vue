<template>
    <div class="list-template">
        <Alert :variant="variant" :alert-text="alerttext" :show-dismissible-alert="showDismissibleAlert" />
        <h2>{{action}} book</h2>
        <BooksViewer :addBook="addBook" :action="action" :bookData="dataBook" />
    </div>
</template>

<script>
    import BooksViewer from '@/components/books/BooksViewer'
    import Alert from '@/components/alerts/alert.vue'
    export default {
        name: 'book-view',
        components: {
            BooksViewer,
            Alert
        },
        data() {
            return {
                variant: "danger",
                alerttext: "",
                showDismissibleAlert: false,
                action: this.$route.params.action?this.$route.params.action:"Add",
                dataBook: []
            }
        },
         asyncData ({ params, $axios }, callback) {
            if(params.id){
                $axios.get('/api/books/'+ params.id)
                .then((res) => {
                    callback(null, { dataBook: res.data })
                })
            }
            else
            {
                callback(null, { dataBook: [] })
            }
        },
        methods: {
            async addBook (data){
                let resp = [];
                if(this.action == "Add"){
                    resp = await this.$axios.post("/api/books/new", data);
                }else if (this.$route.params.action == "Update" ){
                    resp = await this.$axios.put("/api/books/"+this.$route.params.id, data );
                }
                if (resp.data.status == 400 || resp.data.status == 404 || resp.data.status == 500 ){
                    this.variant = "danger";
                    this.alerttext = resp.data.message;
                    this.showDismissibleAlert = true;
                }else if (resp.status == 200 && (resp.data.status != 400 || resp.data.status != 500 || resp.data.status != 404)){
                    this.variant = "success";
                    this.alerttext = resp.data.message?resp.data.message:"successfully add.";
                    this.showDismissibleAlert = true;
                    setTimeout(() => {
                        this.$router.push('/list-book');
                    }, 2500);
                }else{
                    this.variant = "danger";
                    this.alerttext = "internal errors occurred";
                    this.showDismissibleAlert = true;
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