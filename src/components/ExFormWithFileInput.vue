<template>
    <div class="form">
        <b-form @submit="onSubmit">
            <b-form-group 
                id="input-group-1"
                >
                <b-form-input 
                    id="input-1" 
                    v-model="form.whatsapp" 
                    placeholder="Nomor WhatsApp Anda"
                    style="border-radius: 3px; font-size: 0.9rem;"
                    >
                </b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-2"
                >
                <b-form-input 
                    id="input-2" 
                    v-model="form.password" 
                    type="password"
                    placeholder="Password"
                    style="border-radius: 3px; font-size: 0.9rem;"
                    >
                </b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-3"
                >
                <b-form-file 
                    accept="image/jpeg, image/png, image/gif"
                    required
                    v-model="form.file"
                    :state="Boolean(form.file)"
                    placeholder="Pilih file..."
                    drop-placeholder="Taruh file disini..."
                    >
                </b-form-file>  
            </b-form-group>

            <b-button block type="submit" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px">KIRIM</b-button>
        </b-form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            form: {
                whatsapp: '',
                password: '',
                file: null
            },
        }
    },
    methods: {
        submit(payload) {
            console.log(process.env.VUE_APP_BASE_API);
            const path = process.env.VUE_APP_BASE_API + 'transaction/create';
            axios.post(path, payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error)
            });
        },
        onSubmit(evt) {
            evt.preventDefault();
            if (this.form.file.size < 2000000) {
                const payload = {
                    whatsapp: this.form.whatsapp,
                    password: this.form.password,
                    file: this.form.file
                };
                this.submit(payload);
            } else {
                console.log("Ukuran maksimal 2MB")
            }
        },
    }
}
</script>

<style scoped>
    .form {
        width: 50%;
        margin: auto;
        margin-top: 50px;
    }
</style>
