<template>
    <b-navbar class="container is-max-widescreen pb-1">
        <template #brand>
            <b-navbar-item tag="router-link" class="is-flex is-align-items-center" :to="{ path: '/' }">
                <h3 class="has-text-main title is-3 " style="font-weight:800">CertApp</h3>
                <!-- <nuxt-img
                    style="height:50px"
                    provider="cloudinary"
                    :src="('/website/logo/logo_m6kail.png')"
                    alt="GreenShelve logo"
                ></nuxt-img> -->
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ name: 'index' }" >
               Home 
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'about' }" v-if="!loggedIn">
              About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'contact' }" v-if="!loggedIn">
              Contact
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div v-if="!loggedIn" class="buttons">
                    <nuxt-link  to="/login" class="button is-rounded is-main">
                        <strong>Login</strong>
                    </nuxt-link>
                    <nuxt-link to="/signup" class="button is-rounded  is-light">
                        Register
                    </nuxt-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
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
.navbar-item img {
    max-height: 4rem;
}
</style>