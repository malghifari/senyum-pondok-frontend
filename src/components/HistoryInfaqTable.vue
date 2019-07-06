<template>
    <div class="form-box">
        <div style="text-align: center; font-size: 4vh; font-weight: bold">
            History Infaq
        </div>
        <br />
        <!-- User Interface controls -->
        <b-row>
            <b-col md="6" class="my-1">
                <b-col md="10">
                    <b-form-group label-cols-sm="5" class="mb-0" label="Status Infaq">
                        <b-form-select v-model="filter_status" :options="status_options"></b-form-select>
                    </b-form-group>
                </b-col>
            </b-col>
        </b-row>

        <br />
        <b-table
        show-empty
        stacked="md"
        :items="multi_transaction"
        :fields="transaction_fields"
        :current-page="currentPage"
        :per-page="perPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        >

            <template slot="created_at" slot-scope="row">
                {{timeConvert(row.value)}}
            </template>
            
            <template slot="user" slot-scope="row">
                <b-button size="sm" @click="info(row.value, row.value.name, $event.target)" class="mr-1">
                    {{ row.value.name }}
                </b-button>
            </template>
            
            <template slot="verified" slot-scope="row">
                <b-button :variant="getColor(row.value)" @click="openInfoModal(row,$event.target)">
                {{ getStatusVerifikasi(row.value) }} 
                </b-button>
            </template>

            <template slot="row-details" slot-scope="row">
                <b-card>
                <ul>
                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                </ul>
                </b-card>
            </template>
            
        </b-table>

        <b-row>
            <b-col md="5" class="my-1">
                <b-form-group label-cols-sm="3" label="Per Halaman" class="mb-0">
                <b-form-select style="width: 25%" v-model="perPage" :options="pageOptions"></b-form-select>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="6" class="my-1">
                <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                class="my-0"
                ></b-pagination>
            </b-col>
        </b-row>

        <!-- Info modal -->
        <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
            <b-row>
                <b-col cols="4">
                    Tanggal Infaq
                </b-col>
                <b-col>
                    {{timeConvert(infoModal.content.created_at)}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    Nominal
                </b-col>
                <b-col>
                    {{infoModal.content.nominal}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    Status
                </b-col>
                <b-col>
                    <span :class="getClassStatus(infoModal.content.verified)">{{ getStatusVerifikasi(infoModal.content.verified) }}</span>
                </b-col>
            </b-row>
            <img  v-bind:src="'https://storage.googleapis.com/img-infaq-tf/' + infoModal.content.filename " id="img-konfirmasi">
        </b-modal>
    </div>                
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                access_token: localStorage.access_token ? localStorage.access_token : '',
                transaction: [],
                transaction_fields: [
                    {key: 'created_at', label: 'Tanggal', sortable: true, sortDirection: 'desc'},
                    {key: 'nominal', label: 'Nominal', sortable: true, sortDirection: 'asc'},
                    {key: 'verified', label: 'Status'},
                ],
                filtered_transaction: [],
                totalRows: 1,
                currentPage: 1,
                perPage: 5,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                infoModal: {
                    id: 'info-modal',
                    title: 'Detail Infaq',
                    content: {
                        created_at: '',
                        nominal: '',
                        filename: '',
                        verified: ''
                    }
                },
                filter_time: '',
                filter_status: '',
                filter_name: '',
                status_options: [
                    { value: '', text: 'Semua Status' },
                    { value: 'true', text: 'Sudah Terverifikasi' },
                    { value: 'false', text: 'Verifikasi Gagal' },
                    { value: 'null', text: 'Belum Terverifikasi' },
                ],
                this_year: new Date().getFullYear()
            }
        },
        computed: {
            sortOptions() {
            // Create an options list from our fields
            return this.transaction_fields
                .filter(f => f.sortable)
                .map(f => {
                return { text: f.label, value: f.key }
                })
            },
            multi_transaction: function () {
                var filtered = this.transaction.filter((el) => {
                    let filtered = true
                    if (this.filter_time != '') {
                        filtered = el.month_year.toLowerCase().indexOf(this.filter_time.toLowerCase()) > -1
                    }
                    if (this.filter_status != '') {
                        var toString;
                        if(el.verified == null){
                            toString = 'null'
                        } else {
                            toString = el.verified.toString();
                        }
                        filtered = filtered && toString.toLowerCase().indexOf(this.filter_status.toLowerCase()) > -1
                    }
                    if (this.filter_name != '') {
                        filtered = filtered && el.user.name.toLowerCase().indexOf(this.filter_name.toLowerCase()) > -1
                    }
                    return filtered
                })
                this.totalRows = filtered.length
                this.currentPage = 1
                return filtered
            }
        },
        mounted() {
            this.load_table()
            this.totalRows = this.transaction.length
        },
        methods: {
            async load_table() {
                let access_token = localStorage.access_token;
                let result = await fetch(process.env.VUE_APP_BASE_API + 'transaction/own', {
                    method: 'GET',
                    headers: {
                        Authorization: access_token,
                        'Content-Type': 'application/json'
                    }
                });
                let json = await result.json()
                this.transaction = json.data
                this.totalRows = this.transaction.length
            },
            openInfoModal(item,button) {
                console.log(item)
                this.infoModal.content = item.item;
                this.$root.$emit('bv::show::modal',this.infoModal.id,button)
            },
            info(item, index, button) {
                this.infoModal.title = `Biodata ${index}`
                this.infoModal.content = item
                console.log(this.infoModal);
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            resetInfoModal() {
                this.infoModal.content = ''
            },
            multiFilter(el) {
                let filtered = ''
                if (this.filter_time != '') {
                    filtered = el.month_year.toLowerCase().indexOf(this.filter_time.toLowerCase()) > -1
                }
                if (this.filter_status != '') {
                    console.log(this.filter_status);
                    console.log(el.paid_off_status);
                    filtered = filtered && el.paid_off_status.toLowerCase().indexOf(this.filter_status.toLowerCase()) > -1
                }
                return filtered
            },
            getColor(value){
                if(value == true){
                    return "success";
                } else if(value === false){
                    return "danger";
                } else {
                    return "secondary";
                }
            },
            getClassStatus(value){
                if(value == true){
                    return "verified"
                } else if(value === false){
                    return "unverified"
                } else {
                    return "nullverified"
                }
            },
            getStatusVerifikasi(value){
                if(value == true){
                    return "Sudah Terverifikasi";
                } else if(value === false){
                    return "Verifikasi Gagal";
                } else {
                    return "Belum Terverifikasi";
                }
            },
            timeConvert(date){
                console.log(date)
                var asiaTime = date.toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
                asiaTime = new Date(asiaTime);
                return asiaTime.toLocaleString()
            }
        },
    }
</script>

<style scoped>
    #img-konfirmasi {
        padding: 5%;
        border: 1px solid #dee2e6;
    }

    #img-konfirmasi:hover {
      transform: scale(1.5);
    }
    .form-box {
        margin: auto;
        margin-top: 30px;
        width: 80%;
        padding: 10px;
        overflow: auto;
    }

    .form-box > h5 {
        text-align: left; margin: 0px; margin-bottom: 20px;
    }

    @media screen and (min-width: 540px) {
        .form-box {
            display: block;
            margin: auto;
            width: 80%;
            background-color: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
            padding: 30px;
        }
        .form-box > h5 {
            text-align: center; margin: 20px; margin-bottom: 30px;
        }
    }
    .verified {
        color : #28A745;
    }
    .unverified {
        color: #DC3545;
    }
    .nullverified {
        color: #6C757D;
    }
</style>
