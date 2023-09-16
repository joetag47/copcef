<template>
  <!-- container is-max-widescreen -->
  <section class="section main-form  ">
    <!-- <div class="p-5">
      <h1 class="title">CertApp</h1>
      <p class="subtitle">Retrieve your certificates, testimonials & other</p>
    </div> -->
    <!-- <div hidden class="card mt-5">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="require(`assets/bg.jpg`)" alt="Placeholder image">
        </figure>
      </div>
    </div> -->
    <div class=" px-4 pb-5 mb-3" >
      <div style="float:right" class="is-justify-content-center mt-5">
        <span @click="$router.push('payments')" style="float:right"> <b-icon type="is-secondary" size="is-medium" icon="wallet-outline"></b-icon> </span>
      </div>
      
      <h3 class="title is-3">Hello <nuxt-link to="profile"> {{ user.firstname }}</nuxt-link>, </h3>
      <p class="subtitle is-7 has-text-weight-medium">WELCOME TO COPCEF DONATION PLATFORM</p>
    </div>
    <div class="columns is-multiline" @click="$router.push({ name: 'payments', params: { date: new Date().toISOString().substring(0,10) } })">
      <div class="column is-full card ">
        <div class="card-body p-3 columns is-mobile">
          <div class="column is-two-thirds">
            <h2 class="title is-4"> Today's</h2>
            <p class="subtitle is-6">Contribution</p>
            <b-tag type="is-main" size="is-small" >Day - {{ new Date().toString().substring(0,15) }}</b-tag>
          </div>
          <div class="column has-text-right is-flex is-align-items-center is-justify-content-center">
            <h3 class="title is-4 has-text-weight-bold"><span class="is-size-6 has-text-weight-medium has-text-grey">Ghc</span> {{  day.toFixed(2) }}</h3>
          </div>
          
        </div>
      </div>
      <div class="column is-full card" @click="$router.push({ name: 'payments', params: { date: new Date().getFullYear() } })">
        <div class="card-body p-3 columns is-mobile">
          
          <div class="column is-two-thirds">
            <h2 class="title is-4"> Gross</h2>
            <p class="subtitle is-6">Contribution</p>
            <b-tag type="is-main" size="is-small" >Year - {{ new Date().getFullYear()  }}</b-tag>
          </div>
          <div class="column has-text-right is-flex is-align-items-center is-justify-content-center">
            <h3 class="title is-4 has-text-weight-bold"><span class="is-size-6 has-text-weight-medium has-text-grey">Ghc</span> {{  year.toFixed(2) }}</h3>
          </div>
        </div>
      </div>
      <div class="column is-full card "  @click="$router.push({ name: 'payments', params: { date: new Date().toISOString().substring(0, 7) } })">
        <div class="card-body p-3 columns is-mobile">
          <div class="column is-two-thirds">
            <h2 class="title is-4"> Month's</h2>
            <p class="subtitle is-6">Contribution</p>
            <b-tag type="is-main" size="is-small" >Month - {{ new Date().toString().substring(4, 7)+' '+new Date().getFullYear() }} </b-tag>
          </div>
          <div class="column has-text-right is-flex is-align-items-center is-justify-content-center">
            <h3 class="title is-4 has-text-weight-bold"><span class="is-size-6 has-text-weight-medium has-text-grey">Ghc</span> {{  month.toFixed(2) }}</h3>
          </div>
          
        </div>
      </div>
      
      <br>
      <div class="column is-full">
        <b-button
                @click="$router.push('/donate')"
                style="padding: 1.8rem !important;border-radius: 0;border: 0;"
                expanded
                label="Make Donation"
                type="is-main" />
      </div>
      <div class="column is-full has-text-centered">
        <a @click="logOut()">Logout</a>
        <!-- <b-button @click="logOut()">Logout</b-button> -->
      </div>
    </div>
  </section>
</template>

<script>
// import { HeartIcon, ClockIcon, AnchorIcon } from 'vue-feather-icons'

export default {
  name: 'home',
  middleware: ['auth'],
  head: {
    title: ' Church of Pentecost Chairman Education Fund App'
  },
  data() {
        return {
              data: '',
              month: 0,
              day: 0,
              year: 0,
              user: { firstname: 'User' },
        }
  },
  components: {
    // HeartIcon, ClockIcon, AnchorIcon
  },
  fetch() {

    let user = this.$auth.user
    //
    this.user = user
  },
  mounted() {
    this.getData()
  },
  // computed: {

  // },
  // watch: {
    
  // },
  methods: {
    async logOut() {
                // await this.$auth.logout(/***/)
                await this.$auth.logout(/* .... */)
                this.$router.push('/login')
            },

      getData() {
        this.$axios.$get('/user/pay')
                               .then((res) =>  {
                                  console.log(res)
                                  //
                                  if (res) {
                                      
                                    this.data = res

                                    for (let index = 0; index < this.data.length; index++) {

                                      // date
                                      if (this.data[index].createdAt) {
                                        this.data[index].date = (new Date(this.data[index].createdAt)).toISOString()

                                      }

                                    }

                                    const month = new Date().toISOString().substring(0,7)
                                    const today = new Date().toISOString().substring(0,10)
                                    this.year = this.data.reduce((a, b) => a + b.amount, 0 )
                                    this.month = this.data.filter(u=> u.date.includes(month)).reduce((a, b) => a + b.amount, 0 )
                                    this.day = this.data.filter(u=> u.date.includes(today)).reduce((a, b) => a + b.amount, 0 )

                                    this.isLoading = false
  
                                  }
  
                               }).catch((err)=> {
                                  this.$buefy.toast.open({ duration: 3500, message: ` ${err.response.data}`})
                                  this.isLoading = false
                              })
      }
  }
}
</script>
<style lang="scss" >
// @import '@/assets/scss/custom.scss';

// .has-text-primary {
//   color: $primary !important;
// }

.big {
  font-size: 3rem;
}

.icon-extra {
  height: 4.5rem;
  width: 4.5rem;
}

.icon > i {
  // font-size: 72px !important;
  height: 72px;
  width: 72px;
}


</style>