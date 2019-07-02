<template>
    <div class="form-box">
        <div style="text-align: center; font-size: 4vh; font-weight: bold">
            Rangkuman
        </div>
        <br />

        <b-col v-if="!isBusySummary">
            <b-row>
                <b-col md="4">
                    Jumlah OrangTuaAsuh
                </b-col>
                <b-col md="4">
                    : {{totalOka}}
                </b-col>
            </b-row>

            <b-row>
                <b-col md="4">
                    Jumlah Infaq/bulan yang Diharapkan
                </b-col>
                <b-col md="4">
                    : <currency-formatter-on-table :value="totalInfaqPerMonth"></currency-formatter-on-table>
                </b-col>
            </b-row>

            <b-row>
                <b-col md="4">
                    Jumlah Infaq Terkumpul Sejak Awal
                </b-col>
                <b-col md="4">
                    : <currency-formatter-on-table :value="totalInfaqAllTime"></currency-formatter-on-table>
                </b-col>
            </b-row>        
        </b-col>
        <b-row style="text-align: center; vertical-align: center" v-if="isBusySummary">
            <div class="text-center text-danger my-2" style="margin: auto">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>
        </b-row>

        <hr>

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
        :items="multi_summary"
        :fields="summary_fields"
        :current-page="currentPage"
        :per-page="perPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        :busy="isBusy"
        >

            <template slot="infaq" slot-scope="row">
                <currency-formatter-on-table :value="row.value"></currency-formatter-on-table>
            </template>


            <template slot="row-details" slot-scope="row">
                <b-card>
                <ul>
                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                </ul>
                </b-card>
            </template>
            <div slot="table-busy" class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>
            
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
    </div>                
</template>

<script>
    import CurrencyFormatterOnTable from "./CurrencyFormatterOnTable"
    export default {
        data() {
            return {
                access_token: localStorage.access_token ? localStorage.access_token : '',
                summary: [],
                summary_fields: [
                    {key: 'month_year', label: 'Periode', sortable: true, sortDirection: 'desc'},
                    {key: 'infaq', label: 'Total Infaq', sortable: true, sortDirection: 'asc'}
                ],
                filtered_summary: [],
                totalRows: 1,
                currentPage: 1,
                perPage: 5,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                filter_time: '',
                status_options: [
                    { value: '', text: '-' },
                    { value: 'True', text: 'Lunas' },
                    { value: 'False', text: 'Belum Lunas' },
                ],
                isBusy: true,
                isBusySummary: true,
                totalOka: '',
                totalInfaqPerMonth: '',
                totalInfaqAllTime: ''
            }
        },
        computed: {
            sortOptions() {
            // Create an options list from our fields
            return this.summary_fields
                .filter(f => f.sortable)
                .map(f => {
                return { text: f.label, value: f.key }
                })
            },
            multi_summary: function () {
                var filtered = this.summary.filter((el) => {
                    let filtered = true
                    if (this.filter_time != '') {
                        filtered = el.month_year.toLowerCase().indexOf(this.filter_time.toLowerCase()) > -1
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
            this.load_summary()
            this.totalRows = this.summary.length
        },
        methods: {
            async load_table() {
                let access_token = localStorage.access_token;
                let result = await fetch(process.env.VUE_APP_BASE_API + 'monthly-infaq/summary', {
                    method: 'GET',
                    headers: {
                        Authorization: access_token,
                        'Content-Type': 'application/json'
                    }
                });
                let json = await result.json()
                this.summary = json.data
                this.totalRows = this.summary.length
                this.isBusy = false;
            },
            async load_summary() {
                let access_token = localStorage.access_token;
                let result = await fetch(process.env.VUE_APP_BASE_API + 'user/summary', {
                    method: 'GET',
                    headers: {
                        Authorization: access_token,
                        'Content-Type': 'application/json'
                    }
                });
                let json = await result.json()
                this.totalOka = json.data['total_oka']
                this.totalInfaqPerMonth = json.data['total_infaq_per_month']
                this.totalInfaqAllTime = json.data['total_infaq_all_time']
                this.isBusySummary = false;
            }
        },
        components: {CurrencyFormatterOnTable}
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
