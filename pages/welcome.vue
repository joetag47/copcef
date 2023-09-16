<template>
    <section class="section main-form welcome" style="padding: 0;">
        <div class="columns is-mobile is-multiline">
            <div class="column is-half">
                <img src="chr/6.jpg">
            </div>
            <div class="column is-half">
                <img src="chr/5.jpg">
            </div>
            <div class="column is-half">
                <img src="chr/4.jpg">
            </div>
            <div class="column is-half">
                <img src="chr/3.jpg">
            </div>
            <div class="column is-half">
                <img src="chr/2.jpg">
            </div>
            <div class="column is-half">
                <img src="chr/1.jpg">
            </div>
            <!-- <div class="column is-full bg-main " style="padding: 2.0rem;">
                <h1 class="title is-3 has-text-white">Welcome</h1>
                <p class="subtitle has-text-white">Chairman Education Fund</p>
            </div> -->
            <div class="column is-full has-text-centered" style="padding: 0.5rem;">
                <p class="is-size-7 ">&copy; Church of Pentecost Chairman Education Fund</p>
            </div>
            <div class="column is-half">
                <b-button
                @click="$router.push('/signup')"
                style="padding: 1.8rem !important;border-radius: 0;border: 0;"
                expanded
                label="Create Account"
                type="is-main" />
            </div>
            <div class="column is-half">
                <b-button
                @click="$router.push('/login')"
                style="padding: 1.8rem !important;border-radius: 0;border: 0;"
                expanded
                label="Login"
                type="is-secondary" />
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'welcome',
    data() {
      return {
          login: {
              email: '',
              password: '',
              remember: false
          }
      }
    },
    computed: {
      
    },
    methods: {
      
    }
  }
  </script>
  <style lang="scss">
  .welcome .columns img[src] {
    width: 100% !important;
    object-fit: cover;
    height: 100% !important;
  }
  .welcome, .welcome .column {
    padding: 0;
  }
  </style>
  