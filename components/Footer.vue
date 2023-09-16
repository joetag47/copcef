<template>
    <div>
        <section class="container is-max-widescreen">
            <div class="columns p-3">
                <div class="column is-4 p-5">
                    <nuxt-img
                        style="height:50px"
                        provider="cloudinary"
                        :src="('/website/logo/logo_m6kail.png')"
                        alt="GreenShelve logo"
                        width="213"
                        height="50"
                    ></nuxt-img>
                    <p class="px-3 small has-text-grey-light">Your green Marketplace<br>
                        Find all fresh groceries here,
                    <!-- <br>The <b>Instacart</b> of Africa. -->
                    </p>
                    <div class="p-3 pt-5 mt-5">
                        <a href="#" target="_blank" class="pr-3 ">
                            <b-icon size="is-" icon="facebook"></b-icon>
                        </a>
                        <a href="#" target="_blank" class="pr-3 ">
                            <b-icon size="is-" icon="twitter"></b-icon>
                        </a>
                        <a href="#" target="_blank" class="pr-3 ">
                            <b-icon size="is-" icon="instagram"></b-icon>
                        </a>
                        <a href="#" target="_blank" class="">
                            <b-icon size="is-" icon="linkedin"></b-icon>
                        </a>
                          
                    </div>
                </div>
                <div class="column p-5">
                    <h3 class="title is-5"> Home</h3>
                    <ul>
                        <li class="pb-2 has-text-weight-">
                            <nuxt-link to="/about" class="has-text-grey">About us</nuxt-link>
                        </li>
                        <li class="pb-2 has-text-weight- ">
                            <nuxt-link to="/contact" class="has-text-grey">Contact</nuxt-link>
                        </li>
                        <li class="pb-2 has-text-weight- ">
                            <nuxt-link to="/about" class="has-text-grey">App</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/green">Go Green </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="column p-5">
                    <h3 class="title is-5"> Work with us</h3>
                    <ul>
                        <li class="pb-2 has-text-weight-">
                            <nuxt-link class="has-text-grey" to="/vendor/">Sign up as vendor</nuxt-link>
                            <!-- <a class="has-text-grey" target="_blank" href="https://forms.gle/FrMzuPauS8Afdiat7">Sign up as vendor</a> -->
                        </li>
                        <li class="pb-2 has-text-weight- ">
                            <nuxt-link class="has-text-grey" to="/courier/">Sign up as driver</nuxt-link>
                            <!-- <a class="has-text-grey">Sign up as driver</a> -->
                        </li>
                        <!-- <li class="pb-2 has-text-weight- ">
                            <a class="has-text-grey">Fleet</a>
                        </li> -->
                        <li class="pb-2 has-text-weight- ">
                            <a class="has-text-grey">Careers</a>
                        </li>
                    </ul>
                </div>
                <div class="column p-5">
                    <h3 class="title is-5"> Platform</h3>
                    <ul>
                        <li class="pb-2 has-text-weight-">
                            <a class="has-text-grey">Privacy policy</a>
                        </li>
                        <li class="pb-2 has-text-weight- ">
                            <a class="has-text-grey">Terms of service</a>
                        </li>
                        <li class="pb-2 has-text-weight- ">
                            <a class="has-text-grey">Security</a>
                        </li>
                        <li class="pb-2 has-text-weight- ">
                            <a class="has-text-grey">Technologies</a>
                        </li>
                        <li class="pb-2 has-text-weight- ">
                            <a class="has-text-grey">Cookies</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="px-5 pb-3 columns is-mobile">
                <div class="column">
                    <span class="">&copy; {{ new Date().getFullYear() }}. GreenShelve </span>

                </div>

                <div class="column is-flex is-justify-content-right">
                    <a class=" has-text-dark px-2 small" target="_blank" href="https://vendor.greenshelve.com">
                           Vendor Signin 
                        </a>
                        <a class=" has-text-dark px-2 small" target="_blank" href="https://courier.greenshelve.com">
                           Courier Signin
                        </a>
                        <!-- <a class=" has-text-grey px-2 small" target="_blank" href="https://vendor.greenshelve.com">
                            Fleet
                        </a> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:'Footer'
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/custom.scss';
    li > a {
        font-size: 0.95rem;
    }

    .small {
        font-size: 0.95rem;
    }

    li > a:hover {
        color: $primary !important;
    }
</style>