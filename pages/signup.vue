<template>
    <section class="section main-form">
    <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
      <div class="has-text-centered mb-3">
        <img src="logo.jpg" />
          <!-- <h2 class="title is-2 has-text-grey" style="font-weight:700">
              Create Account
          </h2> -->
          <p class="has-text-weight- has-text-grey is-6 pt-2">
            Create Account below
          </p>
          <br>
      </div>
      <div class="">
          <div class="columns is-mobile mb-1">
            <div class="column">
                <b-field :type="fn.type" :message="fn.message">
                    <b-input
                        type="text"
                        v-model="form.firstname"
                        @input="validateFname()"
                        placeholder="Firstname"
                        required>
                    </b-input>
                </b-field>
            </div>
            <div class="column">
                <b-field :type="ln.type" :message="ln.message">
                    <b-input
                        type="text"
                        v-model="form.lastname"
                        @input="validateLname()"
                        placeholder="Lastname"
                        required>
                    </b-input>
                </b-field>
            </div>
          </div>
          
          <b-field :type="ar.type" :message="ar.message">
              <!-- <b-input
                  type="text"
                  v-model="form.inst"
                  placeholder="Your institution"
                  required>
              </b-input> -->
                <v-select @input="validateArea()" v-model="form.area" :options="areas" label="Preferences"></v-select>
               
          </b-field>

          <div class="columns is-mobile">
            <div class="column">
                <b-field :type="ds.type" :message="ds.message">
                    <b-input
                        type="text"
                        v-model="form.district"
                        @input="validateDist()"
                        placeholder="Enter District"
                        required>
                    </b-input>
                </b-field>
            </div>
            <div class="column">
                <b-field :type="lc.type" :message="lc.message">
                    <b-input
                        type="text"
                        v-model="form.local"
                        @input="validateLocal()"
                        placeholder="Enter Local"
                        required>
                    </b-input>
                </b-field>
            </div>
          </div>
          <div class="columns is-mobile">
                <div class="column is-one-quarter-widesreen is-one-quarter-desktop is-one-quarter-tablet is-one-third-mobile mr-1">
                    <!-- <b-field label="">
                        <b-input :disabled="(form.country.length !== 0)" v-model="form.country" placeholder="+233" value="233"></b-input>
                    </b-field> -->
                    <vue-country-code
                        class=" is-size-5"
                        @onSelect="onSelect"
                        :enabledCountryCode="true"
                        :preferredCountries="[ 'us', 'gb', 'gh','ng','ke']"
                        >
                    </vue-country-code>
                </div>
                <div class="column">
                    <b-field :type="cn.type" :message="cn.message">
                        <b-input @input="validateContact()" v-model="form.contact" placeholder="XXXXXXXXX"></b-input>
                    </b-field>
                </div>
            </div>
          <b-field :type="em.type" :message="em.message">
              <b-input
                  type="email"
                  v-model="form.email"
                  @input="validateEmail()"
                  placeholder="Your email"
                  required>
              </b-input>
          </b-field>
          <b-field :type="ps.type" :message="ps.message">
              <b-input
                  type="password"
                  v-model="form.password"
                  password-reveal
                  @input="validatePs()"
                  placeholder="Your password"
                  required>
              </b-input>
          </b-field>
          <div class="p-2">
            <nuxt-link class="has-text-main has-text-weight-semibold" to="/login"><b-icon icon="login" class="mr-1" size="is-small" type="is-secondary"></b-icon> Login here</nuxt-link>

            <nuxt-link class="has-text-main has-text-weight-semibold is-size-6 is-pulled-right" style="font-size: 0.95rem !important;" to="/forgot"> <b-icon icon="lock" class="mr-1" size="is-small" type="is-secondary"></b-icon> Forgot password</nuxt-link>
              <!-- <b-checkbox type="is-main main-text is-pulled-right" v-model="form.terms"> I agree to the <a class="has-text-main has-text-weight-semibold">Terms & conditions</a> </b-checkbox> -->
          </div>
          <b-field class="my-4" >
              <b-button
              @click="signUp()"
              expanded
              label="Submit"
              type="is-main" />
          </b-field>
          <!-- <div class="p-2">
              <p class="title is-6 "> Already signed up ? <nuxt-link class="has-text-main" to="/login">Login</nuxt-link> </p>
          </div> -->
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'signup',
    head: {
        title: ' Create Account'
    },
    data() {
      return {
          isLoading: false,
          isFullPage: true,
          form: {
              firstname: '',
              lastname: '',
              area: 'Select Area',
              country: '233',
              contact: '',
              district: '',
              local: '',
              tel: '',
              email: '',
              password: '',
              year: null,
              terms: true
          },
          fn: {
              type:'',
              message:'',
          },
          ln:{
              type:'',
              message:'',
          },
          cn:{
              type:'',
              message:'',
          },
          em:{
              type:'',
              message:'',
          },
          ar:{
              type:'',
              message:'',
          },
          ds:{
              type:'',
              message:'',
          },
          lc:{
              type:'',
              message:'',
          },
          dob:{
              type:'',
              message:'',
          },
          ag:{
              type:'',
              message:'',
          },
          ps:{
              type:'',
              message:'',
          },
          areas: [   'Select Area',
            'ABUAKWA',
            'ACHIMOTA',
            'AFLAO',
            'AFRAM PLAINS',
            'AGOMANYA',
            'AGONA SWEDRU',
            'AKIM ODA',
            'ANYAA-ABLEKUMA',
            'ASAMANKESE',
            'ASANKRANGWA',
            'ASHANTI BEKWAI',
            'ASHIAMAN',
            'ASOKWA',
            'ASSIN FOSU',
            'ATEBUBU',
            'AXIM',
            'BAWKU',
            'BOGOSO',
            'BOLGATANGA',
            'BOMPATA',
            'BREKUM',
            'CAPE COAST',
            'DANSOMAN',
            'DOWN TOWN- OFAAKOR',
            'DUNKWA',
            'EJISU',
            'ESSAM DEBISO',
            'GOASO',
            'HAATSO',
            'HO',
            'HOHOE',
            'KADE',
            'KANESHIE',
            'KASOA',
            'KETE KRACHI',
            'KINTAMPO',
            'KOFORIDUA',
            'KOFORIDUA EFFIDUASE',
            'KONONGO',
            'KWADASO',
            'LA',
            'MADINA',
            'MAMPONG',
            'MANKESSIM',
            'NEW TAFO',
            'NKAWKAW',
            'NKWANTA',
            'NSAWAM',
            'OBUASI',
            'ODORKOR',
            'OFFINSO',
            'SAWLA',
            'SEFWI BEKWAI',
            'SEFWI JUABOSO',
            'SEFWI WIAWSO',
            'SEKONDI',
            'SOGAKOPE',
            'SUAME',
            'SUHUM',
            'SUNYANI',
            'TAKORADI',
            'TAMALE',
            'TARKWA',
            'TECHIMAN',
            'TEMA',
            'TEPA',
            'TESHIE NUNGUA',
            'TUMU',
            'TWIFO PRASO',
            'WA',
            'WALEWALE',
            'WINNEBA',
            'YENDI'
        ]
      }
    },
    methods: {
            validateFname() {
                if (this.form.firstname.length < 3){
                    this.fn.type = 'is-danger';
                    this.fn.message ='Enter 3-characters or above'
                    return false
                }

                if (this.form.firstname.length >= 3){
                    this.fn.type = 'is-success';
                    this.fn.message =''
                    return true
                }
            },
            validateLname() {
                if (this.form.lastname.length < 3){
                    this.ln.type = 'is-danger';
                    this.ln.message ='Enter 3-characters or above'
                    return false
                }

                if (this.form.lastname.length >= 3){
                    this.ln.type = 'is-success';
                    this.ln.message =''
                    return true
                }
            },
            validateArea() {
                if (this.form.area == 'Select Area' || this.form.area == ''){
                    this.ar.type = 'is-danger';
                    this.ar.message ='Kindly select an area'
                    return false
                }

                if (this.form.area.length > 0){
                    this.ar.type = 'is-success';
                    this.ar.message =''
                    return true
                }
            },
            validateDist() {
                if (this.form.district.length < 3){
                    this.ds.type = 'is-danger';
                    this.ds.message ='District should be 3 or more characters'
                    return false
                }

                if (this.form.district.length >= 3){
                    this.ds.type = 'is-success';
                    this.ds.message =''
                    return true
                }
            },
            validateLocal() {
                if (this.form.local.length < 3){
                    this.lc.type = 'is-danger';
                    this.lc.message ='Local should be 3 or more characters'
                    return false
                }

                if (this.form.local.length >= 3){
                    this.lc.type = 'is-success';
                    this.lc.message =''
                    return true
                }
            },
            validateContact() {

                const reg = new RegExp(/^\d+$/)
                
                if (reg.test(this.form.contact)) {

                    if (this.form.contact.length <=8){
                        this.cn.type = 'is-danger';
                        this.cn.message ='Kindly enter a valid contact'
                        return false
                    }

                    if (this.form.contact.length > 8 && this.form.contact.length < 11){
                        this.cn.type = 'is-success';
                        this.cn.message =''
                        return true
                    } else {
                        this.cn.type = 'is-danger';
                        this.cn.message ='Kindly enter a valid contact'
                        return false
                    }
                } else {
                    if (this.form.contact.length <=8){
                        this.cn.type = 'is-danger';
                        this.cn.message ='Kindly enter a contact number'
                        return false
                    }
                }

                
            },
            validateEmail() {

                const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

                if (this.form.email.match(reg)) {
                        this.em.type = 'is-success';
                        this.em.message =''
                        return true
                } else {
                        this.em.type = 'is-danger';
                        this.em.message ='Kindly enter a valid email'
                        return false
                        
                }

            },
            validatePs() {

                // const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$^!%*?&#])[A-Za-z\d@$^!%*?&#]{8,}$/
                const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/


                if (!regx.test(this.form.password)){
                    this.ps.type = 'is-danger';
                    this.ps.message ='Password should contain at least one lowercase letter, uppercase letter, one number and at least 6 characters long'
                    return false
                } else {
                    this.ps.type = 'is-success';
                    this.ps.message =''
                    return true
                }
            },
      //
        signUp() {

            // validate
            if ( !this.validateFname() || !this.validateLname() || !this.validateArea() || !this.validateDist() || !this.validateLocal() || !this.validateContact() || !this.validateEmail() || !this.validatePs()){
                    return
            }

            this.isLoading = true

            // this.$buefy.toast.open({ duration: 3500, message: `Successful registered. Kindly wait to login!`})
    
            this.$axios.$post('/user/signup', this.form)
                               .then( (res) =>  {
                                console.log(res)
                                  //
                                  if (res.message) {
                                      this.$buefy.toast.open({ duration: 3500, message: `${res.message}!`})
                                      
                                      
                                      setTimeout(() => {
  
                                          this.$router.push({ name:'login', params: { email: res.data.email } })
  
                                      }, 3000)

                                      this.isLoading = false
  
                                  }
  
                               }).catch((err)=> {
                                  this.$buefy.toast.open({ duration: 3500, message: `Failed: ${err.response.data}`})
                                  this.isLoading = false
                              })
  
                      //   this.$buefy.toast.open(`${name} deleted!`)
          // this.$buefy.toast.open({ duration: 3500, message: `Success`})
        },
        onSelect({name, iso2, dialCode}) {
            this.form.country = "+"+dialCode
            console.log(name, iso2, dialCode);
        }
    }
  }
  </script>
  <style lang="scss" >
  @import "vue-select/dist/vue-select.css";
  
  .vs__selected-options input[class] {
      padding: 0.55rem;
  }
  
  .vs__selected {
      padding: 0.55rem;
  }
  
  .vs__deselect {
      margin: 6px;
      margin-left: 8px;
  }
  </style>