<template>
    <section>
        <hr>
        <section class="container is-max-widescreen bpg p-5 has-text-">
            <div class=" p-5">
                <div class="has-text-centered " style="max-width:800px;margin:auto">
                        <h1 class="title is-1"> Become a <span class="has-text-main">GreenShelve</span> ambassador and promote us to earn more</h1>
                        <p>
                            We are open to work with content creator, content promotors, brand promoters,<br> social influeners and more.
                        </p>
                </div>
            </div>
            <div class="space">

            </div>
            <div class="p-5">
                <div class="columns">
                    <div class="column">
                        <div class="content">
                            <h3 class="title is-3"> What you recieve as a <br> content promotor</h3>
                            <ul>
                                <li>Reasonable Compensation </li>
                                <li>Free offers</li>
                                <li>You will receive bonuses on GreenShelve</li>
                                <li>Quality content</li>
                                <li>You will receive a precise content brief and <br>our brand guide</li>
                                <li>Long term partnership</li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="content">
                            <h3 class="title is-3"> What we are looking for</h3>
                            <ul>
                                <li>More than 5000 followers on any <br>social media platform </li>
                                <li>Regular content creation and high engagement rate</li>
                                <li>High quality content and an authentic follower base</li>
                                <li>You will receive a precise content brief and <br>our brand guide</li>
                                <li>A love for fresh foods and green society</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-5 " v-if="false"  style="max-width:900px;margin:auto">
                <div class="p-3 m-5 has-text-centered">
                    <h4 class="title is-3"> Appy as an Ambassador</h4>
                </div>
                <div class="columns is-mobile">
                                <div class="column is-half">
                                    <b-field label="Name" :type="fn.type" :message="fn.message">
                                        <b-input input="validateFname()" rounded autofocus v-model="form.firstname" placeholder="Firstname"></b-input>
                                    </b-field>
                                </div>
                                <div class="column">
                                    <b-field label="" :type="ln.type" :message="ln.message">
                                        <b-input input="validateLname()" rounded autofocus v-model="form.lastname" placeholder="Lastname"></b-input>
                                    </b-field>
                                </div>
                            </div>
                            <div class="columns is-mobile">
                                <div class="column is-one-quarter-widesreen is-one-quarter-desktop is-one-quarter-tablet is-one-third-mobile">
                                    <b-field label="">
                                        <b-input :disabled="(form.country.length !== 0)" v-model="form.country" placeholder="+233" value="233"></b-input>
                                    </b-field>
                                </div>
                                <div class="column">
                                    <b-field label="" :type="cn.type" :message="cn.message">
                                        <b-input input="validateContact()" rounded v-model="form.contact" placeholder="XXXXXXXXX"></b-input>
                                    </b-field>
                                </div>
                            </div>
                            <div class="columns is-mobile">
                                <div class="column is-half-desktop is-is-two-fifths-mobile">
                                    <b-field label="" :type="gn.type" :message="gn.message">
                                        <b-select
                                            class="mb-4"
                                            expanded
                                            v-model="form.gender"
                                            placeholder=" Gender"
                                            input="validateGender()"
                                        >
                                            <option value=""> Select</option>
                                            <option value="male"> Male</option>
                                            <option value="female"> Female</option>

                                        </b-select>
                                    </b-field>
                                </div>
                                <div class="column">
                                    <b-field label="" :type="dob.type" :message="dob.message">
                                        <b-datepicker
                                            input="validateDOB()"
                                            placeholder="Date of birth"
                                            v-model="form.dob"
                                        >
                                        </b-datepicker>
                                    </b-field>
                                </div>
                            </div>

                            <div class="notification">
                                <button class="delete"></button>
                                Submit details to register and <strong>verify your 
                                 contact</strong>, For more info: <a href="mailto:contact@platfrom.com" class="has-text-primary">contact@platform.com</a>. Sign In here 
                                 <strong><router-link class="has-text-primary" to="/signin">Sign in </router-link></strong> 
                            </div>
                            
                            <b-field :type="ag.type" :message="ag.message">
                                <b-checkbox v-model="form.checkbox">I agree to the <a>Terms & Conditions</a> and <a>privacy policy</a>.</b-checkbox>
                            </b-field>
                            
                            <!-- <span> 
                                <router-link  to="/signin">Signin </router-link>
                            </span> -->
                            <b-field class="pt-5">
                                <b-button @click="onSubmit" class="is-submit-button" type="is-dark">Submit</b-button>
                            </b-field>
            </div>
        </section>
        <hr>
    </section>
</template>

<script>
    export default {
        name: 'Influencer',
        data() {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    country: '+233',
                    contact: '',
                    code: '',
                    gender: null,
                    dob:'',
                    checkbox: false,
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
                gn:{
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>