<template>
    <div class="form-box">
        <div style="text-align: center; font-size: 4vh; font-weight: bold">
            BIODATA OKA
        </div>
        <br />

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
        <br />

        <!-- Main table element -->
        <b-table
        show-empty
        stacked="md"
        :items="okas"
        :fields="oka_fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
        >
        <template slot="name" slot-scope="row">
            {{ row.value }}
        </template>

        <template slot="born_year" slot-scope="row">
            {{ this_year - row.value }}
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
                okas: [],
                oka_fields: [
                    {key: 'id', label: 'ID OKA', sortable: true, sortDirection: 'asc'},
                    {key: 'name', label: 'Nama'},
                    {key: 'whatsapp', label: 'No Whatsapp'},
                    {key: 'born_year', label: 'Umur'},
                    {key: 'infaq', label: 'Infaq', sortable: true, sortDirection: 'desc'},
                    {key: 'instagram', label: 'Instagram'},
                    {key: 'email', label: 'Email'},
                    {key: 'address', label: 'Alamat'},
                    // {key: 'actions', label: 'Aksi'}
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
                },
                this_year : new Date().getFullYear()
            }
        },
        computed: {
            sortOptions() {
            // Create an options list from our fields
            return this.oka_fields
                .filter(f => f.sortable)
                .map(f => {
                return { text: f.label, value: f.key }
                })
            }
        },
        mounted() {
            this.load_table()
            this.totalRows = this.okas.length
        },
        methods: {
            async load_table() {
                let access_token = localStorage.access_token;
                let result = await fetch(process.env.VUE_APP_BASE_API + 'user/all', {
                    method: 'GET',
                    headers: {
                        Authorization: access_token,
                        'Content-Type': 'application/json'
                    }
                });
                let json = await result.json()
                this.okas = json.data
                this.totalRows = this.okas.length
                console.log(this.okas)
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
