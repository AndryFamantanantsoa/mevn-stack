<template>
    <div>
        <Alert :variant="variant" :alert-text="alerttext" :show-dismissible-alert="showDismissibleAlert" />
        <AuthForm buttonText="Sign up" :submitForm="signupFunc" :hasName="true" />
    </div>
</template>

<script>
    import AuthForm from '@/components/login/AuthForm.vue'
    import Alert from '@/components/alerts/alert.vue'
    export default {
        name: "signup",
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
            async signupFunc (data) {
                let resp = await this.$axios.post("/api/login/signup", data);
                if (resp.status == 201){
                    this.variant = "success";
                    this.alerttext = "User successfully add";
                    this.showDismissibleAlert = true;
                    this.$router.push('/signin');
                }
                else if (resp.data.status == 400 || resp.data.status == 401 ){
                    this.variant = "danger";
                    this.alerttext = resp.data.error;
                    this.showDismissibleAlert = true;
                }else{
                    this.variant = "danger";
                    this.alerttext = "internal errors occurred";
                    this.showDismissibleAlert = true;
                }
            }
        }
    }
</script>