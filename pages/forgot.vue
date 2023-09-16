<template>
    <section class="section main-form " >
    <div class="has-text-centered mb-5" style="margin-top: 40px;">
        <img src="logo.jpg" />
        <!-- <h1 class="title is-2 has-text-grey">
            Login
        </h1> -->
        <p class="subtitle has-text-weight- has-text-grey is-6 pt-2 ">
             Reset password below
        </p>
        <br>
    </div>
    <form @submit.prevent="userLogin()">
        <b-field >
            <b-input
                type="email"
                v-model="form.email"
                placeholder="Your email"
                required>
            </b-input>
        </b-field>
        <div class="notification">
            <!-- <button class="delete"></button> -->
            <span class="has-text-weight-semibold"> NB:</span>
            Enter valid email address, and recieve a <b>reset code</b>. Kindly use <b>reset code</b> to reset password. Thank you.
        </div>
        <div class=" has-text-">
            <!-- <b-checkbox type="is-main has-text-main" v-model="login.remember">Remember me</b-checkbox> -->
            <nuxt-link class="has-text-main has-text-weight-semibold" to="/login"><b-icon icon="login" class="mr-1" size="is-small"  type="is-secondary"></b-icon> Login here</nuxt-link>
            <nuxt-link class="has-text-main has-text-weight-semibold is-pulled-right" to="/signup" style="font-size: 0.95rem !important;">  <b-icon icon="account-plus" class="mr-1" size="is-small" type="is-secondary"></b-icon> Create Account</nuxt-link>
            
        </div>
        <br>
        
        <b-field class="my-5">
            <b-button
            @click="userLogin()"
            expanded
            label="Reset"
            type="is-main" />
        </b-field>
        <!-- <div class="p-2">
            <p class="title is-6"> Not registered yet? <nuxt-link class="has-text-main" to="/signup">Create Account</nuxt-link> </p>
        </div> -->
    </form>
    <div style="padding-top:10px;display:none">
        
        <hr>
        <b-button class="mr-2"  icon-left="google" type="is-">
                Google
        </b-button>

        <b-button class="mx-"  icon-left="facebook" type="is-">
                Facebook
        </b-button>

        <b-button class="ml-2"  icon-left="github" type="is-">
                Github
        </b-button>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'forgot',
        head: {
            title: ' Forgot Password'
        },
        data() {
            return {
                form: {
                    email: ''
                }
            }
        },
        methods: {
            //
            async userLogin() {
                
                try {

                    // let response = await this.$auth.loginWith('local', { data: this.login })
                                        // .then( (res) => {

                                            // this.$auth.setUserToken(res.token, res.refresh_token)
                                            // this.$auth.setUser(res)

                                        // })
                    // this.$auth.setUser(response.data)
                    // console.log(response)
                    // console.log(this.$auth.user)
                    // //
                    // this.$axios.setToken(response.token, 'Bearer')

                    // console.log(response)
                    this.$buefy.toast.open({ duration: 3500, message: `Successfully Sent`})

                } catch (err) {
                    console.log(err)
                    this.$buefy.toast.open({ duration: 4500, message: `Failed : ${err.response.data}`})
                }
            
                
            },
        },
    }
</script>

<style lang="sass" scoped>

</style>