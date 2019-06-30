<template>
    <div class="form-box">
        <div style="text-align: center; font-size: 4vh; font-weight: bold">
            Verifikasi Infaq
        </div>
        <br />
        <!-- User Interface controls -->
        <b-row>
            <b-col md="6" class="my-1">
                <b-col md="8">
                    <b-input-group>
                        <b-form-input v-model="filter_name" placeholder="Filter nama"></b-form-input>
                        <b-input-group-append>
                        <b-button :disabled="!filter_name" @click="filter_name = ''">Bersihkan</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-col>
            <b-col md="6" class="my-1">
                <b-col md="6">
                </b-col>
                <b-col md="8">
                    <b-form-group label-cols-sm="4" class="mb-0">
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
                <b-button :variant="getColor(row.value)" @click="openActionModal(row,$event.target)">
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
        <!-- Action Modal  -->
        <b-modal :id="actionModal.id" :title="actionModal.title">
            <pre>
                Nama OKA : {{actionModal.user.name}}<br>
                Nominal : {{actionModal.nominal}}<br>
                Status : <span :class="getClassStatus(actionModal.status)">{{ getStatusVerifikasi(actionModal.status) }}</span>
            </pre>

            <img  v-bind:src="'https://storage.googleapis.com/img-infaq-tf/' + actionModal.img " id="img-konfirmasi">
           <template slot="modal-footer" slot-scope="{ ok, cancel}" @hide="resetActionModal">
                <b-button size="sm" variant="success" @click="accept_action">
                    Terima
                </b-button>
                <b-button size="sm" variant="danger" @click="reject_action">
                    Tolak
                </b-button>
                <b-button size="sm" variant="success" @click="resetActionModal">
                    Tutup
                </b-button>

           </template>
        </b-modal>

        <!-- Info modal -->
        <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
            <b-row>
                <b-col cols="4">
                    ID OKA
                </b-col>
                <b-col>
                    {{infoModal.content.id}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    Nama
                </b-col>
                <b-col>
                    {{infoModal.content.name}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    No. Whatsapp
                </b-col>
                <b-col>
                    {{infoModal.content.whatsapp}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    Umur
                </b-col>
                <b-col>
                    {{ this_year - infoModal.content.born_year}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    Email
                </b-col>
                <b-col>
                    {{infoModal.content.email}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    Instagram
                </b-col>
                <b-col>
                    {{infoModal.content.instagram}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    Alamat
                </b-col>
                <b-col>
                    {{infoModal.content.address}}
                </b-col>
            </b-row>
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
                    {key: 'user', label: 'OKA'},
                    {key: 'monthly_infaq.month_year', label: 'Periode', sortable: true, sortDirection: 'desc'},
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
                    title: '',
                    content: ''
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
                this_year: new Date().getFullYear(),
                actionModal: {
                    id: 'actionModal',
                    img: '',
                    title: 'Verifikasi Infaq',
                    user: '',
                    status: '',
                    nominal: ''
                }
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
                let result = await fetch(process.env.VUE_APP_BASE_API + 'transaction/all', {
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
            openActionModal(item,button) {
                console.log(item)
                this.actionModal.img = item.item.filename
                this.actionModal.user = item.item.user
                this.actionModal.status = item.value
                this.actionModal.nominal = item.item.nominal
                this.actionModal.idTransaction = item.item.id
                this.$root.$emit('bv::show::modal',this.actionModal.id,button)
            },
            info(item, index, button) {
                this.infoModal.title = `Biodata ${index}`
                this.infoModal.content = item
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            multiFilter(el) {
                let filtered = ''
                if (this.filter_time != '') {
                    filtered = el.month_year.toLowerCase().indexOf(this.filter_time.toLowerCase()) > -1
                }
                if (this.filter_status != '') {
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
            resetActionModal(){
                this.actionModal.img = '';
                this.actionModal.user = '';
                this.actionModal.status = '';
                this.actionModal.nominal = '';
                this.actionModal.idTransaction = '';
                this.$root.$emit('bv::hide::modal',this.actionModal.id)
            },
            reject_action(){
                var access_token = localStorage.access_token
                var headers = {
                    'Authorization': access_token,
                    'Content-Type': 'application/json'
                }
                var uri = process.env.VUE_APP_BASE_API + 'transaction/update/verified'
                var data = {
                    'id' : this.actionModal.idTransaction,
                    'verified':false
                }
                console.log(data)
                console.log(uri)
                axios.post(uri, data, {headers: headers})
                .then((response) => {
                    console.log(response)
                    this.$router.go();
                })
                .catch((error) => {
                    console.log(error)
                })
                this.resetActionModal();
            },
            accept_action(){
                var access_token = localStorage.access_token
                var headers = {
                    'Authorization': access_token,
                    'Content-Type': 'application/json'
                }
                var uri = process.env.VUE_APP_BASE_API + 'transaction/update/verified'
                var data = {
                    'id' : this.actionModal.idTransaction,
                    'verified':true
                }
                console.log(data)
                console.log(uri)
                axios.post(uri, data, {headers: headers})
                .then((response) => {
                    console.log(response)
                    this.$router.go();
                })
                .catch((error) => {
                    console.log(error)
                })
                this.resetActionModal();
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
