<template>
    <section class="section main-form pay ">
        <div class=" px-4 pb-5 mb-3" >
            <div style="float:right" class="is-justify-content-center mt-3">
                <span @click="$router.push('/')" style="float:right"> <b-icon type="is-secondary" size="is-medium" icon="home-outline"></b-icon> </span>
            </div>
            
            <h3 class="title is-3">My Payments <b-tag v-if="data.length > 0 " type="is-main">{{ data.length }}</b-tag></h3>
        </div>
        <div class="px-3 pb-2">
                    <div class="" style="max-width:460px;">
                        <b-field label="">
                            <b-input @input.native="onSearch" @keyup.native="load" :loading="loading" v-model="search" placeholder="Search anything"></b-input>
                        </b-field>
                    </div>
            </div>
        <div class="p-3 font">
            <!-- <b-table :data="data" :mobile-cards="false" >
                <b-table-column field="id" label="No" width="40" :numeric="true" sortable v-slot="props">
                    {{ props.row.id }}
                </b-table-column>
                <b-table-column field="amount" label="Amount" sortable v-slot="props">
                    <span class="has-text-weight-bold is-"> {{ '₵ '+(props.row.amount).toFixed(2) }} </span><br>
                </b-table-column>
                <b-table-column field="mode" label="Mode" sortable v-slot="props">
                    <b-tag type="is-main" size="is-small" >{{ (props.row.mode) }}</b-tag>
                </b-table-column>
                <b-table-column field="note" label="Note" sortable v-slot="props">
                    
                    <p class="has-text-grey ">{{ (props.row.note) }}</p>
                </b-table-column>
                <b-table-column field="date" label="Date" sortable v-slot="props">
                    <p class="has-text-weight-medium ">
                        {{ formatAMPM(props.row.date).substring(4,15) }}
                        <br>
                        {{ formatAMPM(props.row.date).substring(16) }}
                    </p>
                </b-table-column>
            </b-table> -->

            <ul class="menu-list columns is-multiline" style="">
                    <li v-for="visit in result.length > 0 ? result : data" :key="visit.id" class="column is-mobile  is-full">

                        <a class="columns is-mobile mb-0" >
                            <!-- <div @click="routeTo(shop)" class="column is-one-fifth is-flex is-justify-content-center is-align-items-center">
                                <b-image :src="shop.logo"></b-image>
                            </div> -->
                            <div @click="routeTo(visit)" class="column">
                                
                                <b-tag  class="mr-1 mb-3 has-text-dark" type="is-secondary"> {{ visit.paymentMode }} </b-tag>

                                <p class="has-text-primary small">{{ formatAMPM(visit.date) }}</p>

                                <p v-if="visit.note" class="pt-2 has-text-grey "> - {{ visit.note }}</p>
                                
                                <!-- <span class="has-text-grey small "> {{ shop.locationName }} </span> -->
                            </div>
                            <div class="column is-4 is-flex is-justify-content-center is-align-items-center">
                                <!-- <a class="p-2" :href="`tel:${shop.phone.countryCode+shop.phone.tel}`">
                                    <feather size="20" class="has-text-" type="phone-call"></feather>
                                </a> -->
                                <p class="mb-2 has-text-weight-semibold has-text-weight-medium is-5 medium">{{  '₵ '+(visit.amount).toFixed(2)}}</p>
                            </div>
                        </a>

                        <hr class="m-0 p-0 mb-0">
                    </li>
                </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "payments",
        middleware: ['auth'],
        data() {
            return {
                loading: false,
                search: '',
                data: [
                    { 'id': 1, 'note': 'Pledge', 'mode': 'Mobile Money', 'date': '2022-10-15 13:43:27', 'amount': 50.00 },
                    { 'id': 2, 'note': '', 'mode': 'Bank', 'date': '2022-12-15 06:00:53', 'amount': 75.00 },
                    { 'id': 3, 'note': '', 'mode': 'Bank', 'date': '2023-04-26 06:26:28', 'amount': 30.00 },
                    { 'id': 4, 'note': 'Pledge', 'mode': 'Bank', 'date': '2023-04-10 10:28:46', 'amount': 10.00 },
                    { 'id': 5, 'note': '', 'mode': 'Mobile Money', 'date': '2022-12-06 14:38:38', 'amount': 5.00 }
                ],
                result: [],
                columns: [
                    {
                        field: 'id',
                        label: 'No',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'amount',
                        label: 'Amount',
                        
                    },
                ]
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            formatAMPM(date) {
                date =  date ? new Date(date) : new Date()
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return date.toDateString()+', '+strTime;
            },
            onSearch() {
                // console.log('here')
                if (this.search.length >= 0) {
                    
                   
                    const res = this.data.filter(({ note, amount, mode, date }) => note.toLowerCase().includes(this.search.toLowerCase()) || amount == this.search || mode.toLowerCase().includes(this.search.toLowerCase()) || date.toLowerCase().includes(this.search.toLowerCase()) )
                    this.result = res
                    
                }
            },
            load() {
                this.loading = true 
                setTimeout(()=>{
                    this.loading = false
                }, 500)
            },
            routeTo(visit) {

            },
            getData() {
                this.$axios.$get('/user/pay')
                                    .then((res) =>  {
                                        console.log(res)
                                        //
                                        if (res) {
                                            
                                            this.data = res
                                            this.isLoading = false

                                            for (let index = 0; index < this.data.length; index++) {

                                                // date
                                                if (this.data[index].createdAt) {
                                                this.data[index].date = (new Date(this.data[index].createdAt)).toISOString()

                                                }

                                            }
        
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
.pay .font {
    font-size: 0.9rem !important;
}

.small {
    font-size: 0.8rem;
}

.medium {
    font-size: 1rem;
}
</style>