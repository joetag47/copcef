<template>
    <section class="section main-form">
      <div class="px-4 pb-5 mb-3">
        <div style="float:right" class="is-justify-content-center mt-5">
                <span @click="$router.push('/')" style="float:right"> <b-icon type="is-main" size="is-medium" icon="home-outline"></b-icon> </span>
            </div>
          <h2 class="title is-3" >
              Hi, <span class="has-text-main"> {{ form.firstname }}</span>
          </h2>
          <!-- <p class="subtitle is-6 pt-2 mb-2"><b-tag rounded type="is-main"> {{ $auth.user.email }} </b-tag></p> -->
          <p class="subtitle is-7 has-text-weight-medium">EDIT PROFILE BELOW</p>
          <!-- <p class="subtitle is-6 mb-2">
              edit profile details below
          </p> -->
          

      </div>
      <div class="">
        <div class="columns is-mobile mb-1">
            <div class="column">
                <b-field label="Firstname" label-position="on-border" :type="fn.type" :message="fn.message">
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
                <b-field label="Lastname" label-position="on-border" :type="ln.type" :message="ln.message">
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
          <b-field label="Area" label-position="on-border" :type="ar.type" :message="ar.message">
              <!-- <b-input
                  type="text"
                  v-model="form.area"
                  placeholder="Your Area"
                  required>
              </b-input> -->
              <v-select v-model="form.area" @input="validateArea()" :options="areas" label="Area"></v-select>
               
          </b-field>

          <div class="columns is-mobile">
            <div class="column">
                <b-field label="District" label-position="on-border" :type="ds.type" :message="ds.message">
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
                <b-field label="Local" label-position="on-border" :type="lc.type" :message="lc.message">
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
                    <b-field label="Country" label-position="on-border">
                        <vue-country-code
                            class=" is-size-5"
                            v-model="form.country"
                            @onSelect="onSelect"
                            :enabledCountryCode="true"
                            :preferredCountries="[ 'us', 'gb', 'gh','ng','ke']"
                            >
                        </vue-country-code>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Contact"  label-position="on-border" :type="cn.type" :message="cn.message">
                        <b-input @input="validateContact()" v-model="form.contact" placeholder="XXXXXXXXX"></b-input>
                    </b-field>
                </div>
            </div>
            <b-field label="Email"  label-position="on-border">
              <b-input
                  type="email"
                  v-model="form.email"
                  placeholder="Your email"
                  disabled
                  required>
              </b-input>
          </b-field>
            <div class="columns is-mobile">
                                <div class="column is-half-desktop is-is-two-fifths-mobile">
                                    <b-field label="Gender" label-position="on-border" :type="gn.type" :message="gn.message">
                                        <b-select
                                            expanded
                                            v-model="form.gender"
                                            :disabled="gend"
                                            placeholder=" Gender"
                                            @input="validateGender()"
                                        >
                                            <option value=""> Select</option>
                                            <option value="male"> Male</option>
                                            <option value="female"> Female</option>

                                        </b-select>
                                    </b-field>
                                </div>
                                <div class="column">
                                    <b-field label="Date of Birth" label-position="on-border" :type="dob.type" :message="dob.message">
                                        <b-datepicker
                                            :disabled="dobd"
                                            @input="validateDOB()"
                                            placeholder="Date of birth"
                                            v-model="form.dob"
                                        >
                                        </b-datepicker>
                                    </b-field>
                                </div>
                            </div>
  
          
          <div class="notification">
            <!-- <button class="delete"></button> -->
            <span class="has-text-weight-semibold"> NB:</span>
            Kindly submit to reflect changes. Thank you
          </div>
          <b-field class="my-4">
              <b-button
              @click="submit()"
              expanded
              label="Submit"
              type="is-main" />
          </b-field>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'profile',
    data() {
      return {
          dobd: false,
          gend: false,
          form: {
              firstname: '',
              lastname: '',
              name: '',
              country: '',
              contact: '',
              email: '',
              dob: '',
              gender: '',
          },
          areas: [   'Select Area',
                            'ANYAA-ABREKUMA',
                            'ASHIAMAN',
                            'DANSOMAN',
                            'KANESHIE',
                            'LA',
                            'MADINA',
                            'TESHIE-NUNGUA',
                        ],
                        n: {
              type:'',
              message:'',
          },
          fn:{
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
          gn:{
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
      }
    },
    fetch() {
  
      let user = this.$auth.user
      //
      this.form.firstname = user.firstname
      this.form.lastname = user.lastname
      this.form.contact = user.phone.tel
      this.form.country = user.phone.countryCode
      this.form.email = user.email
      this.form.area = user.area
      this.form.district = user.district
      this.form.local = user.local
      this.form.gender = user.gender
      this.form.dob = user.dob ? new Date(user.dob.substring(0,10)) : user.dob

      if (user.gender) {
        this.gend = true
      }

      if (user.dob) {
        this.dobd = true
      }
    },
    computed: {
      getUser() {
          return 
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
            validateGender() {
                if (this.form.gender == null || this.form.gender == ''){
                    this.gn.type = 'is-danger';
                    this.gn.message ='Kindly select a gender'
                    return false
                }

                if (this.form.gender.length > 0){
                    this.gn.type = 'is-success';
                    this.gn.message =''
                    return true
                }
            },
            validateDOB() {
                if (this.form.dob == ''){
                    this.dob.type = 'is-danger';
                    this.dob.message ='Kindly select a date'
                    return false
                }

                if (this.form.dob){
                    this.dob.type = 'is-success';
                    this.dob.message =''
                    return true
                }
            },
      //
      submit() {

        if ( !this.validateFname() || !this.validateLname() || !this.validateArea() || !this.validateDist() || !this.validateLocal() || !this.validateContact() || !this.validateGender() || !this.validateDOB()){
                    return
            }
  
          this.$axios.$post('/user/profile', this.form)
                               .then( (res) =>  {
                                  //
                                  if (res) {
                                      this.$buefy.toast.open({ duration: 3500, message: `${res}!`})
                                      //
                                      // setTimeout(() => {
  
                                          // this.$router.push('/login', { params: res.data.data })
  
                                      // }, 3000)
  
                                      this.$auth.fetchUser()
  
                                  }
  
                               }).catch((err)=> {
                                  this.$buefy.toast.open({ duration: 3500, message: `Failed: ${err.response.data}`})
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