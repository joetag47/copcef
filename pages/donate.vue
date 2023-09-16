<template>
    <section class="section main-form " >
        <div class=" px-4 pb-5 mb-3" >
            <div style="float:right" class="is-justify-content-center mt-3">
                <span @click="$router.push('/')" style="float:right"> <b-icon type="is-secondary" size="is-medium" icon="home-outline"></b-icon> </span>
            </div>
            
            <h3 class="title is-3">Donate here</h3>
        </div>
    <form @submit.prevent="userLogin()" class="p-3">
        <b-field :type="am.type" :message="am.message">
            <b-input
                v-model="form.amount"
                placeholder="Your amount"
                @input="validateAmount()"
                min="5"
                required>
            </b-input>
        </b-field>
        <b-field label="">
            <b-select
                class="mb-4"
                   expanded
                v-model="form.mode"
                placeholder=" Payment mode"
                >
                <option value=""> Select</option>
                <option value="mobile_money"> Mobile Money</option>
                <option value="bank"> Bank Transfer</option>

            </b-select>
        </b-field>
        <b-field>
            <b-input maxlength="200" type="textarea" v-model="form.note" placeholder="Payment Note"></b-input>
        </b-field>
        <div class="notification">
            <!-- <button class="delete"></button> -->
            <span class="has-text-weight-semibold"> NB:</span>
            We accept donations from <b>GHC 5.00</b> and above. For Bank transfers we only accept <b> GCB Accounts</b>. Thank you.
        </div>
        
        <b-field class="my-5">
            <b-button
            @click="userLogin()"
            expanded
            label="Pay Now"
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
        name: 'donate',
        middleware: ['auth'],
        head: {
            title: ' Forgot Password'
        },
        data() {
            return {
                form: {
                    note: '',
                    mode: 'mobile_money',
                    amount: null,
                },
                am: {
                    type: '',
                    message: ''
                },
            }
        },
        methods: {
            //
            validateAmount() {
                if (this.form.amount < 5){
                    this.am.type = 'is-danger';
                    this.am.message ='Donation should be above GHC 5.00'
                    return false
                }

                if (this.form.amount >= 5){
                    this.am.type = 'is-success';
                    this.am.message =''
                    return true
                }
            },
            async userLogin() {

                if (!this.validateAmount()){
                    return
                }
                
                try {

                    this.$axios.$post('/user/pay', this.form)
                               .then( (res) =>  {
                                console.log(res)
                                  //
                                  if (res) {
                                      this.$buefy.toast.open({ duration: 3500, message: `${res}!`})
                                      
                                      
                                      setTimeout(() => {
  
                                          this.$router.push('/payments', { params: res.data })
  
                                      }, 2000)
  
                                  }
  
                               }).catch((err)=> {
                                  this.$buefy.toast.open({ duration: 3500, message: `Failed: ${err.response.data}`})
                                  this.isLoading = false
                              })

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