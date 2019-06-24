<template>
    <div class="form-box">
        <!-- User Interface controls -->
        <b-row>
            <b-col md="6" class="my-1">
                <b-input-group>
                    <b-form-input v-model="filter" placeholder="Ketik untuk mencari"></b-form-input>
                    <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Bersihkan</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table
        show-empty
        stacked="md"
        :items="monthly_infaq"
        :fields="monthly_infaq_fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
        >

        <template slot="user" slot-scope="row">
            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
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
            <pre>{{ infoModal.content }}</pre>
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
                    {key: 'month_year', label: 'Waktu', sortable: true, sortDirection: 'desc'},
                    {key: 'user', label: 'OKA', sortable: true, sortDirection: 'asc'},
                    {key: 'temp_infaq', label: 'Infaq Bulan Ini', sortable: true, sortDirection: 'desc'},
                    {key: 'paid_off_status', label: 'Status'},
                ],
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
                }
            }
        },
        computed: {
            sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => {
                return { text: f.label, value: f.key }
                })
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
                console.log(this.monthly_infaq)
            },
            info(item, index, button) {
                this.infoModal.title = `Row index: ${index}`
                this.infoModal.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
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
