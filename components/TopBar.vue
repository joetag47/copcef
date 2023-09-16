<template>
    <!-- <div class="has-background-white-ter"> -->
    <div class="">
        <!-- has-background-white-ter -->
        <div class="container is-max-widescreen px-5 py-2">
            <div class="columns is-mobile">
                <div class="column is-4">
                    <p class="has-text-weight-semibold">Partner as: </p>
                </div>
                <div class="column is-flex is-justify-content-right">
                    <a class=" has-text-weight- pr-2 mr-3 small has-text-dark" target="_blank" href="https://forms.gle/FrMzuPauS8Afdiat7">
                        Vendor 
                    </a>
                    <a class=" has-text-weight- pr-2 mr-3 small has-text-dark" target="_blank" href="https://courier.greenshelve.com/signup">
                        Courier 
                    </a>
                    <nuxt-link class="has-text-weight- has-text-dark  small" to="/influencer">
                        Influencer
                    </nuxt-link>
                    <!-- <a class="has-text-weight- has-text-dark  small" target="_blank" href="https://greenshelve.com">
                        
                    </a> -->
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

    export default {
        name: 'NavBar',
        data() {
            return {

            }
        },
        computed: {
            loggedIn() {
                // return this.$auth.loggedIn
                return false
            },
            getInfo()  {
                return false
                // return this.$auth.user
            }
        },
        methods: {
            async logOut() {
                // await this.$auth.logout(/***/)
                await this.$auth.logout(/* .... */)
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
.small {
    font-size: 0.95rem;
}
</style>