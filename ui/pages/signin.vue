<template>
    <div>
        <Alert :variant="variant" :alert-text="alerttext" :show-dismissible-alert="showDismissibleAlert" />
        <AuthForm buttonText="Sign in" :submitForm="loginFunc" />
    </div>
</template>

<script>
    import AuthForm from '@/components/login/AuthForm.vue'
    import Alert from '@/components/alerts/alert.vue'
    export default {
        name: "SigninPage",
        data() {
            return {
                variant: "danger",
                alerttext: "",
                showDismissibleAlert: false
            }
        },
        components: {
            AuthForm,
            Alert
        },
        methods: {
            async loginFunc (data) {
                this.$auth.loginWith ('local', {
                    data: data
                }).then((resp)=>{
                    if (resp.data.status == 400 || resp.data.status == 401 ){
                        this.variant = "danger";
                        this.alerttext = resp.data.error;
                        this.showDismissibleAlert = true;
                    }
                    else if (resp.status == 200 ){
                        this.$auth.setUser(data);
                        this.$router.push('/list-book');
                    }
                });
            }
        }
    }
</script>