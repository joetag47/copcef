<template>
  <section class="section main-form " >
    <div class="has-text-centered mb-5" style="margin-top: 40px;">
        <img src="logo.jpg" />
        <!-- <h1 class="title is-2 has-text-grey">
            Login
        </h1> -->
        <p class="subtitle has-text-weight- has-text-grey is-6 pt-2 ">
             Login below
        </p>
        <br>
    </div>
    <form @submit.prevent="userLogin()">
        <b-field :type="emType" :message="emMessage">
            <b-input
                type="email"
                v-model="login.email"
                @input="validateEmail()"
                placeholder="Your email"
                required>
            </b-input>
        </b-field>

        <b-field :type="psType" :message="psMessage">
            <b-input
                @keyup.enter.native="userLogin()"
                type="password"
                v-model="login.password"
                @input="validatePs()"
                placeholder="Your password"
                required>
            </b-input>
        </b-field>
        <div class=" has-text-">
            <!-- <b-checkbox type="is-main has-text-main" v-model="login.remember">Remember me</b-checkbox> -->
            <nuxt-link class="has-text-main has-text-weight-semibold" to="/signup" style="font-size: 0.95rem !important;">  <b-icon icon="account-plus" class="mr-1" size="is-small" type="is-secondary"></b-icon> Create Account</nuxt-link>
            <nuxt-link class="has-text-main has-text-weight-semibold is-size-6 is-pulled-right" style="font-size: 0.95rem !important;" to="/forgot"> <b-icon icon="lock" class="mr-1" size="is-small" type="is-secondary"></b-icon> Forgot password</nuxt-link>
        </div>
        <br>
        
        <b-field class="my-5">
            <b-button
            @click="userLogin()"
            expanded
            label="Login"
            type="is-main" />
        </b-field>
        {{ checkLogin }}
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
  name: 'login',
  head: {
    title: ' Login'
  },
  data() {
    return {
        login: {
            email: '',
            password: '',
            remember: false
        },
        emType: '',
        emMessage: '',
        psType: '',
        psMessage: '',
    }
  },
  computed: {
    checkLogin() {
        //
        // if (this.$route.query.email) {
        //     this.login.email = this.$route.query.email
        // }

        // console.log(this.$auth)
        if (this.$auth.loggedIn) {
            //
            this.$router.push('/')
        }
    }
  },
  mounted() {

    const data = this.$route.params

    // if (Object.keys(data).length !== 0) {
    //     if (this.$route.params.email) {
    //         this.login.email = data.email
    //     }
    // }
    if (this.$auth.loggedIn) {
            //
            this.$router.push('/')
    }
  },
  methods: {
    validateEmail() {

        const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        if (this.login.email.match(reg)) {
                this.emType = 'is-success';
                this.emMessage =''
                return true
        } else {
                this.emType = 'is-danger';
                this.emMessage ='Kindly enter a valid email'
                return false
                
        }

        },
        validatePs() {
        if (this.login.password.length < 3){
            this.psType = 'is-danger';
            this.psMessage ='Password should be 3 or more characters'
            return false
        }

        if (this.login.password.length >= 3){
            this.psType = 'is-success';
            this.psMessage =''
            return true
        }
    },
    //
    async userLogin() {

        if (!this.validateEmail() || !this.validatePs()){
            return
        }

        
        try {
            let response = await this.$auth.loginWith('local', { data: this.login })
                                // .then( (res) => {

                                //     this.$auth.setUserToken(res.token, res.refresh_token)
                                //     this.$auth.setUser(res)

                                // })
            // this.$auth.setUser(response.data)
            console.log(response)
            // console.log(this.$auth.user)
            // //
            // this.$axios.setToken(response.token, 'Bearer')

            // console.log(response)
            // this.$buefy.toast.open({ duration: 3500, message: `Successful Login`})

            setTimeout(() => {
    
                this.$router.push('/')

            }, 500)

            this.$buefy.toast.open({ duration: 3500, message: `Successful Login`})

        } catch (err) {
            console.log(err)
            this.$buefy.toast.open({ duration: 4500, message: ` ${err.response.data}`})
        }
    
        
    },
  }
}
</script>
