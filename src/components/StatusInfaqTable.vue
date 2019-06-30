<template>
    <div class="form-box">
        <div style="text-align: center; font-size: 4vh; font-weight: bold">
            Status Infaq
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
                <b-col md="8">
                    <b-form-group label-cols-sm="4" label="Filter status" class="mb-0">
                        <b-form-select v-model="filter_status" :options="status_options"></b-form-select>
                    </b-form-group>
                </b-col>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="6" class="my-1">
                <b-col md="8">
                    <b-input-group>
                        <b-form-input v-model="filter_time" placeholder="Filter waktu"></b-form-input>
                        <b-input-group-append>
                        <b-button :disabled="!filter_time" @click="filter_time = ''">Bersihkan</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-col>
        </b-row>

        <br />
        <b-table
        show-empty
        stacked="md"
        :items="multi_monthly_infaq"
        :fields="monthly_infaq_fields"
        :current-page="currentPage"
        :per-page="perPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        >

            <template slot="user" slot-scope="row">
                <b-button size="sm" @click="info(row.value, row.value.name, $event.target)" class="mr-1">
                    {{ row.value.name }}
                </b-button>
            </template>
            
            <template slot="paid_off_status" slot-scope="row">
                {{ row.value == "True" ? 'Lunas' : 'Belum Lunas' }}
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
    export default {
        data() {
            return {
                access_token: localStorage.access_token ? localStorage.access_token : '',
                monthly_infaq: [],
                monthly_infaq_fields: [
                    {key: 'month_year', label: 'Periode', sortable: true, sortDirection: 'desc'},
                    {key: 'user', label: 'OKA'},
                    {key: 'user.infaq', label: 'Infaq Rutin', sortable: true, sortDirection: 'asc'},
                    {key: 'temp_infaq', label: 'Infaq Bulan Ini', sortable: true, sortDirection: 'desc'},
                    {key: 'paid_off_status', label: 'Status'},
                ],
                filtered_monthly_infaq: [],
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
                    { value: '', text: '-' },
                    { value: 'True', text: 'Lunas' },
                    { value: 'False', text: 'Belum Lunas' },
                ],
                this_year: new Date().getFullYear()
            }
        },
        computed: {
            sortOptions() {
            // Create an options list from our fields
            return this.monthly_infaq_fields
                .filter(f => f.sortable)
                .map(f => {
                return { text: f.label, value: f.key }
                })
            },
            multi_monthly_infaq: function () {
                var filtered = this.monthly_infaq.filter((el) => {
                    let filtered = true
                    if (this.filter_time != '') {
                        filtered = el.month_year.toLowerCase().indexOf(this.filter_time.toLowerCase()) > -1
                    }
                    if (this.filter_status != '') {
                        filtered = filtered && el.paid_off_status.toLowerCase().indexOf(this.filter_status.toLowerCase()) > -1
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
            this.totalRows = this.monthly_infaq.length
        },
        methods: {
            async load_table() {
                let access_token = localStorage.access_token;
                let result = await fetch(process.env.VUE_APP_BASE_API + 'monthly-infaq/all', {
                    method: 'GET',
                    headers: {
                        Authorization: access_token,
                        'Content-Type': 'application/json'
                    }
                });
                let json = await result.json()
                this.monthly_infaq = json.data
                this.totalRows = this.monthly_infaq.length
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
            }
        },
    }
</script>

<style scoped>
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
</style>
