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

            <image-uploader
                :preview="true"
                :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                capture="environment"
                :debug="1"
                doNotResize="gif"
                :autoRotate="true"
                outputFormat="verbose"
                @input="setImage"
            >
                <label for="fileInput" slot="upload-label">
                <figure>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    >
                    <path
                        class="path1"
                        d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                    ></path>
                    </svg>
                </figure>
                <span class="upload-caption">{{
                    hasImage ? "Replace" : "Click to upload"
                }}</span>
                </label>
            </image-uploader>

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
            hasImage: false,
            image: null
        }
    },
    methods: {
        submit(payload) {
            console.log(process.env.VUE_APP_BASE_API);
            const path = process.env.VUE_APP_BASE_API + 'transaction/create';
            axios.post(path, payload, {
                headers: {
                    'Content-Type': 'application/json'
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
            // if (this.image.size < 2000000000) {
            const payload = {
                whatsapp: this.form.whatsapp,
                password: this.form.password,
                file: this.image
            };
            this.submit(payload);
            // } else {
            //     console.log("Ukuran maksimal 2MB")
            // }
        },
        setImage: function(output) {
            this.hasImage = true;
            this.image = output;
            console.log(this.image);
        }
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
